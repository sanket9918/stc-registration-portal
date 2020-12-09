import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import classnames from 'classnames'
import { Col, Row, Container, Button, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
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
            loading: false,
            domain: '',
            tech_domain: '',
            dropDownDateOpen: false,
            dropDownTimeOpen: false,

            dateValue: 'Date',
            timeValue: 'Time'

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
    onChangeCheck = e => {
        if (e.target.checked) {
            this.setState({
                [e.target.id]: true
            })
        } else {
            this.setState({
                [e.target.id]: false
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
    toggleDate = e => {
        this.setState({
            dropDownDateOpen: !this.state.dropDownDateOpen
        })
    }
    toggleTime = e => {
        this.setState({
            dropDownTimeOpen: !this.state.dropDownTimeOpen
        })
    }
    
    selectDateValue = e => {
        this.setState({
            dateValue: e.target.id
        })
    }
    selectTimeValue = e => {
        this.setState({
            timeValue: e.target.id
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
        let userData = {
            "entry.223933096": this.state.regNo,
            "entry.300677225": this.state.email,
            "entry.73499461": this.state.mobileNo,
            "entry.877919449": this.state.name,
            "entry.740442512": this.state.domain,
            "entry.254028970": this.state.tech_domain,
            "entry.331608497": this.state.dateValue,
            "entry.643192952": this.state.timeValue
            
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
                                    <span>Thank you for taking interest to be a part of our journey.We hope you make it to the top and we look forward to work with you.</span>
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
                                    
                                    <span className='text-white'>Please mention your preferred domain.(You can select more than one)</span><br /><br />

                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-info" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="(Design/Technical/Management)"
                                                type="text"
                                                name="domain"
                                                id='domain'
                                                onChange={this.onChange}
                                                value={this.state.domain}
                                                error={errors.domain}

                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <span className='text-white'>If you are applying for Technical domain, what's your preferred tech domain? (If you haven't decided then mention 'NA')</span><br /><br />
                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-info" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Ex. Web development/Android/Machine Learning/IoT"
                                                type="text"
                                                name="tech_domain"
                                                id='tech_domain'
                                                onChange={this.onChange}
                                                value={this.state.tech_domain}
                                                error={errors.domain}

                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <span className='text-white'>Select Date and Time slot for first round selection.(There may be changes in the actual schedule which may be duly communicated beforehand.)</span><br /><br />

                                    <Dropdown isOpen={this.state.dropDownDateOpen} toggle={this.toggleDate}>
                                        <DropdownToggle caret>
                                            {this.state.dateValue}
                                        </DropdownToggle>
                                        <DropdownMenu>

                                            <DropdownItem><div onClick={this.selectDateValue} id="12 Dec">12 Dec</div></DropdownItem>
                                            <DropdownItem><div onClick={this.selectDateValue} id="13 Dec">13 Dec</div></DropdownItem>
                                            <DropdownItem><div onClick={this.selectDateValue} id="14 Dec">14 Dec</div></DropdownItem>
                                            <DropdownItem><div onClick={this.selectDateValue} id="15 Dec">15 Dec</div></DropdownItem>
                                            <DropdownItem><div onClick={this.selectDateValue} id="16 Dec">16 Dec</div></DropdownItem>

                                        </DropdownMenu>
                                    </Dropdown><br /><br />

                                    <Dropdown isOpen={this.state.dropDownTimeOpen} toggle={this.toggleTime}>
                                        <DropdownToggle caret>
                                            {this.state.timeValue}
                                        </DropdownToggle>
                                        <DropdownMenu>

                                            <DropdownItem><div onClick={this.selectTimeValue} id="9.30AM TO 10.30AM">9.30AM TO 10.30AM</div></DropdownItem>
                                            <DropdownItem><div onClick={this.selectTimeValue} id="3.30PM TO 4.30PM">3.30PM TO 4.30PM</div></DropdownItem>
                                            <DropdownItem><div onClick={this.selectTimeValue} id="7.00PM TO 9.00PM">7.00PM TO 9.00PM</div></DropdownItem>
                                            

                                        </DropdownMenu>
                                    </Dropdown>

                                    <div>
                                        <center>

                                            <Button
                                                className="my-4"
                                                type="submit"
                                                disabled={(this.state.name.length >= 1 && this.state.regNo.length >= 1 && this.state.mobileNo.length >= 1 && this.state.email.length >= 1 && this.state.domain.length >= 1) ? false : true}
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