import React, { Component } from 'react';
import axios from 'axios';
import Spinner from "../UI/Spinner/Spinner";

import { Form, Input, Label, FormGroup, Button, FormText, FormFeedback } from 'reactstrap';
import classes from './Register.module.css';
var DatePicker = require("reactstrap-date-picker");

class Register extends Component {

    state = {
        value: new Date().toISOString(),
        formattedValue: null,
        data: {
            name: '',
            email: ''
        },
        errors: {},
        loading: false
    }

    inputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(prevValue => {
            return {
                ...prevValue,
                data: {
                    ...prevValue.data,
                    [name]: value
                }
            }
        });

    }

    handleChange(value, formattedValue) {


        this.setState({
            value: value,
            formattedValue: formattedValue
        })
    }

    submitHandler(event) {

        this.setState({ loading: true });

        const date = new Date(this.state.value);
        const formVal = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        const postData = {
            name: this.state.data.name,
            email: this.state.data.email,
            date: formVal
        }

        console.log(postData);

        this.props.start();

        axios.post("https://pqsql-node-api.herokuapp.com/user", postData)
            .then(res => {
                console.log(res.data);
                if (res.data === "User added") {
                    this.props.setMessage(true);
                    this.setState({ loading: false });
                } else {
                    this.props.setMessage(false);
                    this.setState({ loading: false });
                }

            })
            .catch(error => {
                this.props.setMessage(false);
                this.setState({ loading: false });
            })
    }

    render() {

        let form = (
            <div>
                <div className={classes.close}>
                <Button close onClick={this.props.click} />
                </div>
                <Form>
                    <FormText className={classes.head}>Please Register here First! </FormText>
                    <hr />
                    <FormGroup >
                        <Label for={classes.lbl}>Name</Label>
                        <Input name="name" value={this.state.data.name} onChange={(event) => this.inputChange(event)} id='name' invalid={false} />
                        <FormFeedback>Name cannot be blank.</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for={classes.lbl}>Email</Label>
                        <Input name="email" value={this.state.data.email} onChange={(event) => this.inputChange(event)} id='email' invalid={false} />
                        <FormFeedback>Name cannot be blank.</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for={classes.lbl}>Date of Birth</Label>
                        <DatePicker id='datepicker' invalid={false} value={this.state.value}
                            onChange={(val, formatVal) => this.handleChange(val, formatVal)} />
                        <FormFeedback>Name cannot be blank.</FormFeedback>
                    </FormGroup>
                </Form>
                <div className={classes.submit}>
                    <Button onClick={(event) => this.submitHandler(event)}>Submit</Button>
                </div>

            </div>

        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.forms}>{form}</div>
        );
    }

}
export default Register;