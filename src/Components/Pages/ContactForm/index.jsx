import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Segment,
  Message,
  Header,
} from "semantic-ui-react";
export default function ContactForm() {
  const [success, setSuccess] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState("");
  const [companySize, setCompanySize] = useState("");

  const contactForm = async () => {
    console.log(name);
    const body = {
      name,
      email,
      companyName,
      message,
    };
    console.log(body);
    await axios
      .post("https://api/contactus/submitcontactus", body)
      .then((res) => {
        console.log(res);
        setSuccess("success");
      })
      .catch((err) => {
        console.log(err);
        setSuccess("error");
      });
  };

  return (
    <>
      <StyledSegment>
        <Header>Contact Form</Header>
        <hr style={{ opacity: 0.3 }} />
        <br />
        {success === "error" && (
          <div style={{ color: "red" }}>Fill Form properly</div>
        )}
        {success === "success" && (
          <Message
            success
            header="Form Completed"
            content="Form Submitted Successfully"
          />
        )}
        <Form onSubmit={contactForm}>
          <Form.Group>
            <Form.Field
              control={Input}
              required
              label="Full name"
              value={name}
              placeholder="Name here"
              onChange={(e, { value }) => setName(value)}
            />
            <Form.Field
              control={Input}
              required
              label="Email Address"
              value={email}
              placeholder="Email here"
              onChange={(e, { value }) => setEmail(value)}
            />
            <Form.Field
              control={Input}
              required
              label="Company name"
              value={companyName}
              placeholder="Company Name here"
              onChange={(e, { value }) => setCompanyName(value)}
            />
            <Form.Field
              control={Input}
              required
              label="Message name"
              value={message}
              placeholder="Message here"
              onChange={(e, { value }) => setMessage(value)}
            />
          </Form.Group>
          <Button type="submit" color="green">
            Submit
          </Button>
        </Form>
      </StyledSegment>
    </>
  );
}

const StyledSegment = styled((props) => <Segment padded="very" {...props} />)`
  &.ui[class*="very padded"].segment {
    padding: 2.2em;
  }

  &&&&& {
    border-radius: 16px;
    box-shadow: 0px 0px 10px #e0e0e0;
    border: none;
    width: 80%;
    margin: 50px auto;
  }
`;
