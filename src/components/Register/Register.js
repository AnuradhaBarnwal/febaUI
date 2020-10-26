import React, { Component } from 'react';
import regis from './Register.module.css';

import { Form, Input, Label, FormGroup, Button, FormText, } from 'reactstrap';
var DatePicker = require("reactstrap-date-picker");

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date().toISOString()
        }
    }
    handleChange(value, formattedValue) {
        this.setState({
            value: value,
            formattedValue: formattedValue
        })
    }

    componentDidUpdate() {
        var hiddenInputElement = document.getElementById("datepicker");
    }
    render() {
        return (
            <div className={regis.forms}>

                <Button close onClick={this.props.click}/>
                <Form>
                    <FormText className={regis.head}>Please Register here First! </FormText>
                    <hr/>
                    <FormGroup >
                        <Label for={regis.lbl}>Name</Label>
                        <Input id={regis.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for={regis.lbl}>Email</Label>
                        <Input id={regis.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for={regis.lbl}>Date of Birth</Label>
                        <DatePicker id={regis.datepicker} value={this.state.value}
                            onchange={(v, f) => this.handleChange(v, f)} />
                    </FormGroup>
                </Form>
                <div className={regis.submit}>
                    <Button>Submit</Button>
                </div>
            </div>
        );
    }
}

export default Register;