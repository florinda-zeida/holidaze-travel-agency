import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import AuthContext from "../../../context/AuthContext";
import logo from '../../../images/logo.png';
import styled from 'styled-components';


const style = {
	fontWeight: 'bold',
	color: '#F25C05',
}

const Logo = styled.img`
    width: 140px;
    height: auto;

    &:hover {
      opacity: 80%;
    }
`;


function Navigation() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
<>
		<Navbar className="navbar" fixed="top" variant="light" expand="lg" collapseOnSelect>
		<Navbar.Brand className="mr-auto">  <NavLink to="/"><Logo src={logo} alt="Logo Holidaze Travel Agency" /></NavLink></Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className="ml-auto">
					<NavLink className="style-link" to="/" activeStyle={style} exact>
						Home
					</NavLink>
					<NavLink className="style-link" to="/accommodations" activeStyle={style} exact>
						Accommodations
					</NavLink>
					<NavLink className="style-link" to="/contact" activeStyle={style} exact>
						Contact
					</NavLink>
					{auth ? (
						<>
						<NavDropdown title="Admin" id="collasible-nav-dropdown">
						
						<div className="style-link_dropdown">

						<NavLink className="style-link" to="/admin/enquire" activeStyle={style}>Enquires</NavLink>

						<NavLink className="style-link" to="/admin/message" activeStyle={style}>Messages</NavLink>

						<NavLink className="style-link" to="/admin/add-accommodation" activeStyle={style}>Add Accommodation</NavLink>

						
						</div>
					</NavDropdown>

						
							<Button className="button btn-log" onClick={logout}>
								Log out
							</Button> 
						</>
					) : (
						<NavLink to="/login">
							<Button className="button btn-log">Login</Button>
						</NavLink>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</>
	);
}

export default Navigation;
