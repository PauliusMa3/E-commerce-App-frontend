import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import ReviewForm from "./styles/ReviewForm";
import Error from "./Error";
import Router from "next/router";

const ADD_REVIEW_MUTATION = gql`
  mutation ADD_REVIEW_MUTATION(
    $itemId: String!
    $text: String!
    $rating: Int!
  ) {
    addReview(itemId: $itemId, text: $text, rating: $rating) {
      rating
      text
    }
  }
`;

class AddReview extends Component {
  state = {
    text: "",
    rating: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={ADD_REVIEW_MUTATION}
        variables={{
          itemId: this.props.id,
          text: this.state.text,
          rating: parseInt(this.state.rating)
        }}
      >
        {(addReview, { loading, error }) => {
          if (error) return <Error error={error.message} />;
          if (loading) return <p>Loading...</p>;

          return (
            <ReviewForm
              onSubmit={async e => {
                e.preventDefault();

                const result = await addReview();

                console.log("result of add review", result);
                Router.back();
              }}
            >
              <textarea
                name="text"
                required
                placeholder="Have you bought this? Please share your experiece. Leave a review..."
                onChange={this.handleInputChange}
              />
              <div class="review-meta">
                <span>Please select stars how would rate your experience</span>
                <div className="review__stars">
                  <input
                    type="radio"
                    id={`star1`}
                    name="rating"
                    value={5}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={`star1`}></label>
                  <input
                    type="radio"
                    id={`star2`}
                    name="rating"
                    value={4}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={`star2`}></label>
                  <input
                    type="radio"
                    id={`star3`}
                    name="rating"
                    value={3}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={`star3`}></label>
                  <input
                    type="radio"
                    id={`star4`}
                    name="rating"
                    value={2}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={`star4`}></label>
                  <input
                    type="radio"
                    id={`star5`}
                    name="rating"
                    value={1}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={`star5`}></label>
                </div>
                <button className="review-button" type="submit">
                  Submit a review &rarr;
                </button>
              </div>
            </ReviewForm>
          );
        }}
      </Mutation>
    );
  }
}

export default AddReview;
