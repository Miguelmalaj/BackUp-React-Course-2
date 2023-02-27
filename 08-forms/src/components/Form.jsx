import React, { Component, createRef } from 'react'
import './form.css'

class Form extends Component {
    /* constructor(props) {
        super(props);
        this.state = {};
    } */

    // name = createRef()

    state = {
        name: '',
        gender: 'man',
        language: 'es',
        terms: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.name.current.value);
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleTerms = () => {
        this.setState({
            terms: !this.state.terms
        })
    }

    render() {
        return (
            <>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Forms</h1>
                    <div className="form__field">
                        <label className="form__label" htmlFor="name">Name</label>
                        <input 
                        className="form__input" 
                        id="name"
                        name='name' 
                        onChange={this.handleChange}
                        type="text" 
                        />
                    </div>

                    <div className="form__field">
                        <label className="form__label form__label--radio" htmlFor="man">Man</label>
                        <input 
                        defaultChecked
                        className="form__input" 
                        id="man" 
                        name="gender" 
                        onChange={this.handleChange}
                        type="radio"
                        value='man' 
                        />

                        <label className="form__label form__label--radio" htmlFor="woman">Woman</label>
                        <input 
                        className="form__input" 
                        id="woman"
                        name="gender" 
                        onChange={this.handleChange} 
                        type="radio" 
                        value='woman'
                        />

                        <label className="form__label form__label--radio" htmlFor="other">Other</label>
                        <input 
                        className="form__input" 
                        id="other"
                        name="gender" 
                        onChange={this.handleChange} 
                        type="radio" 
                        value='other'
                        />

                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="languaje">Language</label>
                        <select name="language" id="language" onChange={this.handleChange}>
                            <option value="es">Spanish</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="terms">Terms and conditions</label>
                        <input 
                        className="form__input" 
                        id="other" 
                        name="gender" 
                        onChange={this.handleTerms}
                        type="checkbox" 
                        />
                    </div>
                    <input 
                    className="form__submit" 
                    disabled={!this.state.terms}
                    type="submit" 
                    value="send" 
                    />
                </form >
                <p>{JSON.stringify(this.state)}</p>
            </>
        );
    }
}

export default Form;