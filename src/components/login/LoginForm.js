import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../../constants/Api";
import AuthContext from "../../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import ErrorMessage from "../../common/error/ErrorMessage";


const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	identifier: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		// console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			history.push("/admin/message");

		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());

		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
		<Container className="container_form">
			<Form onSubmit={handleSubmit(onSubmit)}>
			{loginError && (
				<Alert variant="danger" className="error-alert">There is a problem to login. please refresh the page and try again. <b className="error-b">Error description:</b> {loginError}</Alert>
			)}
			<fieldset disabled={submitting}>
				{/* <Form.Group>
					<Form.Label htmlFor="identifier">Username</Form.Label>
					<Form.Control className="form_control" ref={register} id="identifier" />
					{errors.identifier && <ErrorMessage>{errors.identifier.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="password">Password</Form.Label>
					<Form.Control type="password"  ref={register} id="password" className="form_control"/>
					{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
				</Form.Group> */}
				<Form.Group>
				<Form.Control  name="identifier" placeholder="Username" ref={register} className="form_control"/>
					{errors.identifier && <ErrorMessage>{errors.identifier.message}</ErrorMessage>}
					</Form.Group>

					<Form.Group>
					<Form.Control name="password" placeholder="Password" ref={register} type="password" className="form_control"/>
					{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
				</Form.Group>

				<button className=" button btn-form">{submitting ? "Loggin in..." : "Login"}</button>
			</fieldset>
			</Form>
		</Container>
		</>
	);
}
