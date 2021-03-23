import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import styles from "./Nav.module.css";
import { Link, Switch} from "react-router-dom";
import Shape1 from "../../images/Shape1.svg";

const Nav = ({ setLoginModal, user }) => {
	return (
		// <header className={styles.nav}>
		// 	<div className="wrapInner">
		// 		<h1>
		// 			<Link to="/">
		// 				<img className={styles.logo} src={Shape1} alt="worrymonster logo" />
		// 			</Link>
		// 			<span>worry monster</span>
		// 		</h1>
		// 		<Switch>
		// 		    <div>
		// 			<Link to="/Worry">My Worries</Link>
		// 			<Link to="/SharedWorry">Shared Worries</Link>
		// 			<Link to="/Monster">Monster</Link>
		// 			</div>
		// 		</Switch>
		// 	</div>
		// </header>
		<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
	</Navbar>

	);
};

export default Nav;
