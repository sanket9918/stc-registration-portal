import React, { Component } from 'react'
import Navbar1 from './../navbar.component';
import { Container, Row, Col, Button } from 'reactstrap';

import Footer from './../footer.component';
import { Link } from 'react-router-dom';
class Error extends Component {
    onLogout = (e) => {
        e.preventDefault();        
        this.props.history.push('/')
    }
    componentDidMount() {
        window.scrollTo(0, 0);

    }
    render() {
        return (
            <div>
                <Navbar1 />
                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container className="py-md">
                        <Row className="row-grid justify-content-between align-items-center">
                            <div style={{ margin: "auto", textAlign: "center" }}>
                                <Col lg="12">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{ paddingBottom: "1em", height: "20em" }}
                                        src={require("../../assets/img/global_error.svg")}

                                    />
                                    <h1 className="display-3 text-white">
                                        Oops, something went wrong!
                                    </h1>
                                    <p className="lead text-white">

                                        Please go to the main page.   </p>


                                    <Link to="/">
                                        <Button
                                            className="my-4"
                                            type="submit"

                                        >
                                            Main page
                                </Button>
                                    </Link>


                                </Col>
                            </div>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Error