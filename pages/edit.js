import React from "react";
import EditProduct from "../components/editProduct";

const EditPage = (props) => {
  return (
    <div>
      <EditProduct id={props.query.id} />
    </div>
  );
};

export default EditPage;
