import React, { useState } from 'react'

const Form = () => {

    const [values,setValues] = useState({
        name:'',
        email:''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <p>{JSON.stringify(values)}</p>
        </form>
    )
}

export default Form