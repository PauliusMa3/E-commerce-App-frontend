import React, { Component } from "react";
import Form from "./styles/Form";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import Router from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      image
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    editItem(id: $id, title: $title, description: $description, price: $price) {
      id
      title
    }
  }
`;

class EditProduct extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <Mutation
              mutation={UPDATE_PRODUCT_MUTATION}
              variables={{
                id: this.props.id,
                title: this.state.title,
                description: this.state.description,
                price: this.state.price
              }}
            >
              {(editItem, { loading, error }) => {
                console.log("DATAAA", data);
                return (
                  <Wrapper>
                    <Form
                      onSubmit={async e => {
                        e.preventDefault();
                        console.log(this.state);
                        const res = await editItem();

                        Router.push(
                          `/product?id=${this.props.id}`,
                          `/product/${this.props.id}`
                        );
                        console.log(res);
                      }}
                    >
                      <fieldset>
                        <label htmlFor="title">
                          Title:
                          <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Product Title"
                            defaultValue={data.item.title}
                            value={this.state.title}
                            onChange={this.handleChange}
                          />
                        </label>
                        {/* <label htmlFor="file">
                        Product Image:
                        <img src={data.item.image} width={200} />
                        <input
                          id="file"
                          type="file"
                          name="file"
                          value={data.item.image}
                          onChange={this.handleChange}
                        /> */}
                        {/* </label> */}
                        <label htmlFor="price">
                          Product Price:
                          <input
                            id="price"
                            type="number"
                            name="price"
                            placeholder="Product Price"
                            defaultValue={data.item.price}
                            value={this.state.price}
                            onChange={this.handleChange}
                          />
                        </label>
                        <label htmlFor="description">
                          Product Description:
                          <textarea
                            id="description"
                            name="description"
                            placeholder="Product Description"
                            className="product-form--textarea"
                            defaultValue={data.item.description}
                            value={this.state.description}
                            onChange={this.handleChange}
                          />
                        </label>
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
        }}
      </Query>
    );
  }
}

export default EditProduct;
