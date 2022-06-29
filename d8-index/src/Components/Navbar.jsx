import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img className="logo" src="https://pbs.twimg.com/media/E4a2Tc1XMAAEcF2?format=png&name=4096x4096" alt="Netflix Logo"></img></Navbar.Brand>
            <Nav className="mr-auto">

                <Link to="/">
                    <div className="nav-link">Home</div>
                </Link>

                <Link to="/tv-shows">
                    <div className="nav-link">TV Shows</div>
                </Link>

                <Link to="/SingleMovie">
                    <div className="nav-link">Single Movie</div>
                </Link>

                <Link to="/MovieDetails">
                    <div className="nav-link">Movie Details</div>
                </Link>



                <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}


export default NavBar