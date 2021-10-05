
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/style.scss';
import Navigation from "./components/layout/navigation/Navigation";
import HomePage from "./components/visitor/home/HomePage";
import Accommodations from "./components/visitor/accommodations/Accommodations";
import DetailAccommodation from "./components/visitor/accommodations/detail/DetailAccommodation";
import Contact from "./components/visitor/contact/Contact";
import Enquire from "./components/visitor/enquire/Enquire";
import AddAccommodation from "./components/admin/edit/AddAccommodation";
import MessageAdmin from "./components/admin/message/MessageAdmin";
import EnquireAdmin from "./components/admin/enquires/EnquireAdmin";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/layout/footer/Footer";
import Confirmation from "./common/Confirmation";
import { AuthProvider } from "./context/AuthContext";
import { Helmet } from "react-helmet-async";
import ProtectedRoute from "./components/route/ProtectedRoute";



function App() {
	return (
		
		<div className="wrapper">
				<AuthProvider>
					<Router>
						<Navigation />
						<div className="container_app">
						<Helmet>
						<title>Holidaze Travel Agency</title>
						<meta
						name="description"
						content="Holidaze is a Travel Agency with accommodations in Bergen"
						/>
						<meta
						name="keywords"
						content="Accommodations, Hotels, Bergen, Room, Hotel Bergen"
						/>
						</Helmet>
							<Switch>
								<Route exact path="/">
									<HomePage />
								</Route>
								<Route exact path="/accommodations">
									<Accommodations />
								</Route>
								<Route path="/detail/:id">
									<DetailAccommodation />
								</Route>
								<Route path="/enquire">
								<Enquire />
								</Route> 
								<Route path="/contact/">
								<Contact />
								</Route> 
								<Route path="/login">
									<LoginPage />
								</Route>
								<Route path="/confirmation" component={ Confirmation }/>
								<ProtectedRoute path="/admin/enquire"  component={EnquireAdmin} exact /> 
                <ProtectedRoute path="/admin/add-accommodation" component={AddAccommodation} />
								<ProtectedRoute path="/admin/message" component={MessageAdmin} />
							</Switch>
						</div>
						<Footer />
					</Router>
				</AuthProvider>
				</div>
			

			

	);
}

export default App;
