import React, { Component } from "react";
import { Mutation, renderToStringWithData } from "react-apollo";
import gql from "graphql-tag";
import { ALL_PRODUCTS_QUERY } from "./Products";
import { FaTrashAlt } from "react-icons/fa";

const DELETE_ITEM_QUERY = gql`
  mutation deleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_PRODUCTS_QUERY });

    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );

    cache.writeQuery({ query: ALL_PRODUCTS_QUERY }, data);
  };
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={DELETE_ITEM_QUERY}
        variables={{ id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <FaTrashAlt
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "10",
              right: "10"
            }}
            size={20}
            onClick={() => {
              if (confirm("Are you sure to remove this item?")) {
                deleteItem().catch(err => alert(err.message));
              }
            }}
          >
            {this.props.children}
          </FaTrashAlt>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
