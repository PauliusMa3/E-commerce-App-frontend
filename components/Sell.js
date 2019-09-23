import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { ALL_PRODUCTS_QUERY } from "./Products";
import Form from "../components/styles/Form";

const CREATE_PRODUCT_MUTATION = gql`
  mutation createItem(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

const Wrapper = styled.div`
  margin: 120px auto 0 auto;

  max-width: 900px;
`;

class Sell extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    price: 0,
    largeImage: ""
  };

  changeHandler = e => {
    const { value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [e.target.name]: val });
  };

  fileHandler = async e => {
    const files = e.target.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Tracky-Tronics");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dalb6tk7y/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();

    this.setState({
      image: file.secure_url,
      largeImage: file.eager[1].secure_url
    });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_PRODUCT_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_PRODUCTS_QUERY }]}
      >
        {(createItem, { loading, error }) => {
          if (error) return <p>{error.message}</p>;
          return (
            <Wrapper>
              <Form
                onSubmit={async e => {
                  e.preventDefault();

                  await createItem();

                  Router.push("/products");
                }}
              >
                <fieldset disabled={loading}>
                  <label htmlFor="title">Title:</label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  />
                  <label htmlFor="file">Product Image:</label>
                  <input
                    id="file"
                    type="file"
                    name="file"
                    placeholder="Product Image"
                    onChange={this.fileHandler}
                  />
                  <label htmlFor="price">Product Price:</label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    value={this.state.price}
                    onChange={this.changeHandler}
                  />
                  <label htmlFor="description">Product Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Product Description"
                    className="product-form--textarea"
                    value={this.state.description}
                    onChange={this.changeHandler}
                  />
                  <button className="product-form--button" type="Submit">
                    Submit
                  </button>
                </fieldset>
              </Form>
            </Wrapper>
          );
        }}
      </Mutation>
    );
  }
}

export default Sell;
