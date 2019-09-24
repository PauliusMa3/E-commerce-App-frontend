import React, { useState } from "react";
import styled from "styled-components";
import Image from "../assets/images/contact us cover.jpg";
import Modal from "./Modal/Modal";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import LargeSpinner from "./Spinner/LargeSpinner";
import ContactUsIcon from "../assets/icons/call-center.svg";
import ContactUsStyles from "./styles/ContactUsStyles";
import ContactFormStyles from "./styles/ContactFormStyles";
import ModalSuccessMessage from "./styles/ModalSuccessMessage";

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
          <ContactUsStyles>
            <Modal
              showModal={showModal}
              handleClose={() => setShowModal(false)}
            >
              {successMessage ? (
                <ModalSuccessMessage>
                  <span className="text-wrapper">&#10004;</span>
                  <p>{successMessage}</p>
                </ModalSuccessMessage>
              ) : (
                <ContactFormStyles
                  onSubmit={async e => {
                    e.preventDefault();
                    const result = await contactUsRequest();
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
                  <button type="submit">Send</button>
                </ContactFormStyles>
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
          </ContactUsStyles>
        );
      }}
    </Mutation>
  );
};

export default ContactUs;
