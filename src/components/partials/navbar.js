import React from 'react'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';

const Header = () => {
  return (
      // <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      //   <a className="navbar-brand" href="../index.html">MealForToday</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse"
      //           data-target="#navbarTogglerDemo02"
      //           aria-controls="navbarTogglerDemo02" aria-expanded="false"
      //           aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //
      //   <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      //       <li className="nav-item active">
      //         <a className="nav-link"
      //            href="../home/home.template.client.html">Home <span
      //             className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link"
      //            href="../course-editor/course-editor.template.client.html">Search
      //           <span className="sr-only">(current)</span></a>
      //       </li>
      //     </ul>
      //     {/*<ul  className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-right">*/}
      //     <ul className="nav navbar-nav navbar-right">
      //
      //       <form className="form-inline my-2 my-lg-0">
      //         <input className="form-control mr-sm-2" type="search"
      //                placeholder="Search"/>
      //         <button className="btn btn-outline-success my-2 my-sm-0"
      //                 type="submit">Search
      //         </button>
      //       </form>
      //       <li className="nav-item">
      //         <a className="nav-link"
      //            href="../login/login.template.client.html">Login <span
      //             className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link"
      //            href="../register/register.template.client.html">Register <span
      //             className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link"
      //            href="../profile/profile.template.client.html">Profile <span
      //             className="sr-only">(current)</span></a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>



      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Explore">Explore</Nav.Link>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>

          <Nav className="navbar-nav navbar-right">
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Register">Register</Nav.Link>
            <Nav.Link href="#Profile">Profile</Nav.Link>
          </Nav>
        </Navbar>
      </>
  )
}

export default Header