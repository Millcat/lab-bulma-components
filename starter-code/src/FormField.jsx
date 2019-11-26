import React, { Component } from 'react'

export class FormField extends Component {
    render() {
        const { label, type, placeholder } = this.props;
        return (
            <div className="field">
                <label className="label">{label}</label>
                <div className="control">
                    <input className="input" type={type} placeholder={placeholder} />
                </div>
            </div>

        )
    }
}

export default FormField


    // DESTRUCTURING
    // const {label, type, placeholer} = this.props;
    // ....


