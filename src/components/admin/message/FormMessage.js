import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { BsFillBellFill } from "react-icons/bs";
import useAxios from "../../../hooks/useAxios";
import moment from 'moment';
import Loading from '../../../common/Loading';
import Alert from "react-bootstrap/Alert";

export default function FormMessage() {
	const [message, setMessage] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMessage() {
			try {
				const response = await http.get("/contacts");
				console.log("response", response);
				setMessage(response.data.reverse());
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMessage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <Loading />;

	if (error) return <Alert variant="danger" className="error-alert">An Error occurred, please refresh the page and try again. <b className="error-b">Error description:</b> {error}</Alert>;

	

	return (
	  <div className="flex-group_admin">
			{message.map((contacts, index) => {
				return (
          <Card className={index === 0 ? 'card-admin card-new' : 'card-admin'}  key={contacts.id}>
					<Card className="card-icon"><BsFillBellFill className="icon" /><div className="icon-text">NEW</div></Card>
          <Card.Title className="card-admin_title"><b>Name |</b>{contacts.fullname}</Card.Title>
          <hr />
          <Card.Text><b>Date send:</b>{moment(contacts.published_at).format("MMM Do YYYY")}</Card.Text>
          <Card.Text><b>Email:</b>{contacts.email}</Card.Text>
          <Card.Text><b>Message:</b>{contacts.message}</Card.Text>
					
      </Card>
				);
			})}
		</div>
	);
}