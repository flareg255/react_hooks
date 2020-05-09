import React from 'react'
import useInput from '../hooks/useInput'

function Form() {

    const handleSubmit = e =>{
        e.preventDefault()
        alert(`${firstName} ${lastName}`);
        resetFirstName()
        resetLastName()
    }

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        {...bindFirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        {...bindLastName}
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form
