import React, { Component } from "react";
import NavMain from "./NavMain";
import FormField from "./FormField";
import CoolButton from "./CoolButton"
import Container from "./Container";
/////////


export class SignUp extends Component {
    render() {
        return (
            <div>
                <NavMain />
                <Container>
                    <FormField label="Name" type="text" placeholder="e.g Camille P" />
                    <FormField label="Email" type="text" placeholder="your email here" />
                    <FormField label="Password" type="password" placeholder="enter your password" />
                    <CoolButton isSmall isDanger >Submitting</CoolButton>
                </Container>
            </div>
        )
    }
}

export default SignUp





