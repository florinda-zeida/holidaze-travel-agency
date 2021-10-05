import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../../common/error/ErrorMessage";
import useAxios from "../../../hooks/useAxios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SelectPictures from "../edit/media/SelectPictures";
import Alert from "react-bootstrap/Alert";


const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	sub_title: yup.string().required("Sub title is required"),
	location: yup.string().required("Sub title is required"),
	price: yup.number().typeError("Price is required").required("Price is required"),
	image: yup.string().required("Image is required"),
	alt:yup.string().required("Image is required"),
	metaTitle:yup.string().required("Image is required"),
	metaDescription:yup.string().required("Image is required"),
	keywords:yup.string().required("Keywords is required"),
});

export default function AddPost() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	const http = useAxios();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		if (data.featured_media === "") {
			data.featured_media = null;
		}

		console.log(data);

		try {
			const response = await http.post("/accommodations", data);
			console.log("response", response.data);
			history.push("/accommodations");

		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
			
		} finally {
			setSubmitting(false);
		}
	}

	return (
		
			<Form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <Alert variant="danger" className="error-alert">An Error occurred, please refresh the page and try again. <b className="error-b">Error description:</b> {serverError}</Alert>}
				
				<Form.Group>
				<Form.Control name="title" placeholder="Title" ref={register} className="form_control"/>
						{errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control name="sub_title" placeholder="Sub title" ref={register} className="form_control"/>
						{errors.sub_title && <ErrorMessage>{errors.sub_title.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control name="location" placeholder="Location" ref={register} className="form_control"/>
						{errors.location && <ErrorMessage>{errors.location.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control name="price" type="number"  placeholder="Price per night" ref={register} className="form_control"/>
						{errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control name="description" placeholder="Description" ref={register} className="form_control"/>
				</Form.Group>

				<Form.Group>
				<Form.Control  name="amenities" placeholder="Amenities" ref={register} className="form_control"/>
						{errors.amenities && <ErrorMessage>{errors.amenities.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<SelectPictures register={register} className="form_control-img" name="image"/>
				{errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control  name="alt" placeholder="Image alt" ref={register} className="form_control"/>
						{errors.alt && <ErrorMessage>{errors.alt.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control  name="metaTitle" placeholder="Meta title" ref={register} className="form_control"/>
						{errors.metaTitle && <ErrorMessage>{errors.metaTitle.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control  name="metaDescription" placeholder="Meta description" ref={register} className="form_control"/>
						{errors.metaDescription && <ErrorMessage>{errors.metaDescription.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group>
				<Form.Control name="keywords" placeholder="Keywords" ref={register} className="form_control"/>
						{errors.keywords && <ErrorMessage>{errors.keywords.message}</ErrorMessage>}
				</Form.Group>


				
				<Button className="button" type="submit">{submitting ? "Submitting..." : "Submit"}</Button>
			
			</Form>
	
	);
}
