import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import classnames from 'classnames'
import { Col, Row, Container, Button, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser } from '../actions/authActions'
import footimage from '../assets/img/brand/white.svg'
import axios from 'axios'
import qs from 'querystring'



class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFocused: '',
            emailFocused: '',
            name: '',
            regNo: '',
            mobileNo: '',
            blockName: '',
            roomNo: '',
            email: '',
            errors: {},
            vision:'',
            loading: false

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
       
    componentWillReceiveProps(nextProps) {
       
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value.toUpperCase()
        })

    }
    onChangeAlter = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
 
    buttonState() {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 5000)
    }
    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            "entry.223933096": this.state.regNo,
            "entry.300677225": this.state.email,
            "entry.73499461": this.state.mobileNo,
            "entry.80618237": this.state.blockName,
            "entry.877919449": this.state.name,
            
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        this.buttonState();
        axios.post('https://docs.google.com/forms/d/e/1FAIpQLSdBnhSGl6dPtuUs0BlZRTBwLhXZ4P8WxmPHHGhn8xhYJE_Fwg/formResponse', qs.stringify(userData), config)
            .then(() => {
                this.props.history.push('/finish')
            }).catch(() => {
                this.props.history.push('/finish')
            })
    }
    render() {
        const { errors, loading } = this.state;
        return (
            <div>

                <Navbar1 />
                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container className="py-md">
                        <Row className="justify-content-between align-items-center">
                            <Col className="mb-lg-auto" lg="6">

                                <div style={{ margin: 'auto', textAlign: 'center' }}>
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{ height: "15em",padding:'2em' }}
                                        src={footimage}

                                    />
                                    <h1 className="display-4  text-white" style={{ fontWeight: "300" }}>Just fill in the details and we will get back to you ASAP!</h1>
                                    <span>Thank you for taking interest to be a part of our journey.We hope you make it to the top and we look forward to work with you</span>
                                </div>
                            </Col>
                            <Col className="mb-lg-auto" lg="6">
                                <div style={{ margin: 'auto', textAlign: 'center' }}></div>
                                <h2 className="display-3 text-white">
                                    Hey let's know about you
                                </h2>


                                {/* The start of the form  */}
                                <form noValidate onSubmit={this.onSubmit}>
                                    <FormGroup
                                        className={classnames("mt-5", {
                                            focused: this.state.nameFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-user-run" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="name"
                                                placeholder="What's your name?"
                                                type="text"
                                                name="name"
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                error={errors.name}

                                                className={classnames("", {
                                                    invalid: errors.name || errors.namenotfound
                                                })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.name}
                                        </span> </div>
                                    <FormGroup
                                        className={classnames({
                                            focused: this.state.emailFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input

                                                placeholder="Registration no."
                                                type="text"
                                                name="regNo"
                                                id='regNo'
                                                onChange={this.onChange}
                                                value={this.state.regNo}
                                                error={errors.regNo}

                                                className={classnames("", {
                                                    invalid: errors.regNo || errors.regnotfound
                                                })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.regNo}
                                        </span> </div>


                                    <FormGroup
                                        className={classnames({
                                            focused: this.state.emailFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-email-83" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="email"
                                                placeholder="Email address"
                                                type="email"
                                                name="email"
                                                onChange={this.onChangeAlter}
                                                value={this.state.email}
                                                error={errors.email}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.email}
                                        </span> </div>
                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-phone" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Mobile No."
                                                type="number"
                                                name="phone"
                                                id='mobileNo'
                                                onChange={this.onChange}
                                                value={this.state.mobileNo}
                                                error={errors.mobileNo}

                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.mobileNo}
                                        </span> </div>

                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-home" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Block name / Room no.(NA if staying outside)"
                                                type="text"
                                                name="block"
                                                id='blockName'
                                                onChange={this.onChange}
                                                value={this.state.blockName}
                                                error={errors.blockName}

                                            />
                                        </InputGroup>
                                    </FormGroup>  
                                    
                                   

                                    <div>
                                        <center>

                                            <Button
                                                className="my-4"
                                                type="submit"
                                                disabled={( this.state.name.length >= 1 && this.state.regNo.length >= 1 && this.state.mobileNo.length >= 1 && this.state.email.length >= 1) ? false : true}
                                            >
                                                {loading && (
                                                    <i
                                                        className="fa fa-refresh fa-spin"
                                                        style={{ marginRight: "5px" }}
                                                    />
                                                )}
                                                {loading && <span>Register</span>}
                                                {!loading && <span>Register</span>}
                                            </Button>

                                        </center>
                                    </div>
                                </form>

                                {/* End of the form */}

                            </Col>                           

                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        )
    }
}
Hero.propTypes = {
    registerUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { registerUser }
)(Hero)