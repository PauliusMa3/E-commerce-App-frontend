import React, { useState } from "react";
import styled from "styled-components";
import Image from "../assets/images/contact us cover.jpg";
import Modal from "./Modal/Modal";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import LargeSpinner from "./Spinner/LargeSpinner";
import ContactUsIcon from "../assets/icons/call-center.svg";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      top: 0;
      left: 0;
      z-index: 1;
    }
  }



  img {
    object-fit: cover;
    height: 100%;
    width: 100%;


  }

  h1 {
    position: absolute;
    font-size: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%);
  }

  .contact-us-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    z-index: 2;
    font-size: 2rem;
    box-shadow: 0 4px 12px rgba(102, 102, 102, 0.15);

    .contact-us-icon {
      height: 75px;
      width: 75px;
    }

    button {
      padding: 13px 20px;
      font-size: 1.8rem;
      color: white;
      font-weight: 500;
      background: ${props => props.theme.red};
      border: none;
      transition: all 0.25s;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme.darkerRed};
      }
    }
  }
`;

const FormStyles = styled.form`
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 20px;
  }
  display: flex;
  flex-direction: column;

  span {
    font-family: "Chilanka-Regular";
    font-size: 30px;
    text-align: center;
  }

  p {
    font-family: "Chilanka-Regular";
    font-size: 15px;
    text-align: center;
    letter-spacing: 1px;
  }
  padding: 4rem 6rem;
  border-radius: 10px;
  input {
    width: 100%;
    display: block;
    padding: 10px;
  }

  label {
    text-align: left;
    color: ${props => props.theme.black};
    font-size: 14px;
  }

  textarea,
  input {
    border: 1px solid ${props => props.theme.lightgrey};
    font-size: 16px;
    margin-bottom: 15px;
    border-radius: 3px;
    transition: all 0.2s;

    &:hover {
      border: 1px solid #30aabc;
    }

    &:focus {
      border: 1px solid #30aabc;
      outline: none;
    }
  }

  button {
    font-size: 18px;
    text-align: center;
    padding: 8px 15px;
    background: ${props => props.theme.blue};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    width: 25%;
    transition: all 0.25s;

    &:hover {
      background: ${props => props.theme.darkerBlue};
    }
  }

  textarea {
    background: #fcfdfd;
    min-height: 150px;
    width: 100%;
    padding: 15px;
  }
`;

const CONTACT_MUTATION = gql`
  mutation contactUsRequest(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    contactUsRequest(
      name: $name
      email: $email
      phone: $phone
      message: $message
    ) {
      message
    }
  }
`;

const Message = styled.div`
  padding: 30px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text-wrapper {
    background: ${props => props.theme.green};
    border-radius: 50%;
    height: 60px;
    width: 60px;
    font-weight: 800;
    font-size: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = e => {
    e.preventDefault();
    setInputs({ ...inputs, [event.target.name]: e.target.value });
  };
  return (
    <Mutation mutation={CONTACT_MUTATION} variables={inputs}>
      {(contactUsRequest, { data, loading, error }) => {
        if (loading) {
          return (
            <Modal showModal={true} handleClose={() => setShowModal(false)}>
              <LargeSpinner />
            </Modal>
          );
        }

        return (
          <Wrapper>
            <Modal
              showModal={showModal}
              handleClose={() => setShowModal(false)}
            >
              {successMessage ? (
                <Message>
                  <span className="text-wrapper">&#10004;</span>
                  <p>{successMessage}</p>
                </Message>
              ) : (
                <FormStyles
                  onSubmit={async e => {
                    e.preventDefault();
                    const result = await contactUsRequest();
                    console.log(result.data.contactUsRequest.message);
                    setSuccessMessage(result.data.contactUsRequest.message);
                  }}
                >
                  <span>Let's Chat</span>
                  <p>Unlike others, we reply! Reach us via the form below.</p>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={inputs.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={inputs.phone}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    value={inputs.message}
                    onChange={handleInputChange}
                  />
                  <button onClick={() => console.log("hey")}>Send</button>
                </FormStyles>
              )}
            </Modal>
            <div className="image">
              <img src={Image} />
              <div className="contact-us-card">
                <img className="contact-us-icon" src={ContactUsIcon} />
                <h3>Have a chat with us!</h3>
                <p>
                  We will help to find the right products for you and will
                  advise you!
                </p>
                <button
                  className="contact-us-button"
                  onClick={() => setShowModal(true)}
                >
                  Get in touch
                </button>
              </div>
            </div>
          </Wrapper>
        );
      }}
    </Mutation>
  );
};

export default ContactUs;

{
  /* <div className="image">
        <img src={Image} />
        <h1>We'd love to hear from you</h1>
        <p>
          Whether you have questions or any issues, our team would be pleased to
          help you!
        </p> */
}
