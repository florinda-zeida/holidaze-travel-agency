import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Confirmation from "../../../common/Confirmation";
import { BASE_URL } from "../../../constants/Api";
import axios from "axios";
import ErrorMessage from "../../../common/error/ErrorMessage";
import Loading from "../../../common/Loading";
import Alert from "react-bootstrap/Alert";



const schema = yup.object().shape({
  fullname: yup.string().required("Please enter a name").min(1, "Name must be at least 3 characters"),
  email: yup
  .string()
  .email("Please enter a valid email address")
  .required("Required a valid email address. Example 'email@hotmail.com"),
  message: yup.string().required("Please enter a message").min(1),
});

function FormContact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  

  const url = BASE_URL + `/contacts`;

console.log(url);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitted(true);
    setSubmitting(true);
    setServerError(null);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      
      
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  console.log(serverError);

  if (submitting) {
    return <Loading />;
  }

  if (serverError) {
    return <Alert variant="danger" className="error-alert">An Error occurred, please refresh the page and try again. <b className="error-b">Error description:</b> {serverError}</Alert>;
  }

  return (
    <Container>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
      {submitted && <Confirmation />}  

        <fieldset disabled={submitting}>

              <Form.Group>
                   
                    <Form.Control type="text" name="fullname" placeholder="Your name" ref={register()} className="form_control" />
                    {errors.fullname && <ErrorMessage>{errors.fullname.message}</ErrorMessage>}
                </Form.Group>
                <Form.Group>
                
                <Form.Control type="email" name="email" placeholder="Email address" ref={register()} className="form_control"/>
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                
                <Form.Control type="text" as="textarea" rows="3" name="message" placeholder="Your message" ref={register()} className="form_control"/>
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>

          <Button variant="info" type="submit" className="button btn-form">
            Send
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default FormContact;