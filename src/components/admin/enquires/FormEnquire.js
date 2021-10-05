import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { BsFillBellFill } from "react-icons/bs";
import useAxios from "../../../hooks/useAxios";
import Loading from '../../../common/Loading';
import Alert from "react-bootstrap/Alert";
import moment from 'moment';

export default function FormEnquire() {
	const [enquires, setEnquires,] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getEnquire() {
			try {
				const response = await http.get("/enquires");
				console.log("response", response);
				setEnquires(response.data.reverse());

			} catch (error) {
				console.log(error);
				setError(error.toString());
				
			} finally {
				setLoading(false);
			}
		}

		getEnquire();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <Loading />;

	if (error) return <Alert variant="danger" className="error-alert">An Error occurred, please refresh the page and try again. <b className="error-b">Error description:</b> {error}</Alert>;

	return (
	  <div className="flex-group_admin">
			{enquires.map((enquire, index) => {
				return (
              <Card className={index === 0 ? 'card-admin card-new' : 'card-admin'} key={enquire.id}>
										<Card className="card-icon"><BsFillBellFill className="icon" /><div className="icon-text">NEW</div></Card>
                    <Card.Title className="card-admin_title">{enquire.fullname}</Card.Title>
                    <hr />
										<Card.Text><b>Email:</b>{enquire.email}</Card.Text>
										<Card.Text><b>Accomodation: {enquire.acommodationTitle}</b></Card.Text>
										<Card.Text><b>Number of guests:</b>{enquire.guest_number}</Card.Text>
                    <Card.Text><b className="card-admin_text">Chack-in:</b>{moment(enquire.checkI).format("MMM Do YYYY")}</Card.Text>
                    <Card.Text><b className="card-admin_text">Check-out:</b>{moment(enquire.checkOut).format("MMM Do YYYY")}</Card.Text>
                    <Card.Text><b>Special request:</b>{enquire.special_requests}</Card.Text>
                   
              </Card>
				);
			})}
		</div>
	);
}


