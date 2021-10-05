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
import { useLocation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";


const today = new Date();
today.setHours(0, 0, 0, 0);

// Create new Date instance
const dateMin = new Date();

// Add a day
dateMin.setDate(dateMin.getDate() + 1);

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("Please enter a name")
    .min(1, "Name must be at least 3 characters"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required a valid email address. Example 'email@hotmail.com"),
  special_requests: yup.string(),
  guest_number: yup
  .number()
  .typeError("Please select a number of guests")
  .min(0, 'Min value 0.'),
  checkIn: yup
  .date()
  .nullable()
  .typeError('Invalid Date')
  .required("Please select your arrival")
  .min(today, 'select min current day'),
  checkOut: yup
  .date()
  .nullable()
  .typeError('Invalid Date')
  .required("Please select your departure")
  .min(
    dateMin,
    "Departure can't be before arrival date"
)
});

function FormEnquire() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const url = BASE_URL + `/enquires`;

  // console.log(url);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data = { ...data, ...{ acommodationTitle: query.get("accomodation") } };

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
          <Form.Label className="form-label">Your name</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              placeholder="Name"
              ref={register()}
              className="form_control"
            />
            {errors.fullname && (
              <ErrorMessage>{errors.fullname.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
          <Form.Label className="form-label">Email adress</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email address"
              ref={register()}
              className="form_control"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
          <Form.Label className="form-label">Arrival date</Form.Label>
            <Form.Control
              placeholder="format date: mm/dd/yyyy"
              name="checkIn"
              type="date"
              ref={register()}
              className="form_control"
            />
            {errors.checkIn && (
              <ErrorMessage>{errors.checkIn.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
          <Form.Label className="form-label">Departue date</Form.Label>
            <Form.Control
              placeholder="format date: mm/dd/yyyy"
              name="checkOut"
              type="date"
              ref={register()}
              className="form_control"
            />
            {errors.checkOut && (
              <ErrorMessage>{errors.checkOut.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>

            <Form.Control
              name="accomodation"
              type="hidden"
              className="form_control"
              ref={register()}
              value={query.get("accomodation")}
            />
            {errors.accomodation && (
              <ErrorMessage>{errors.accomodation.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control
              name="guest_number"
              as="select" 
              className="form_control"
              ref={register()}
            >
            <option value="default">Select number of guests</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
            </Form.Control>
            {errors.guest_number && (
              <ErrorMessage>{errors.guest_number.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              as="textarea"
              rows="4"
              name="special_requests"
              placeholder="Special requests"
              ref={register()}
              className="form_control"
            />
            {errors.special_requests && (
              <ErrorMessage>{errors.special_requests.message}</ErrorMessage>
            )}
          </Form.Group>

          <Button variant="info" type="submit" className="button btn-form">
            Send
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default FormEnquire;