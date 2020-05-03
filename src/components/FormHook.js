import React, { useState } from 'react'

function FormHook() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <div>
            <div>
                <p>First Name: {name.firstName}</p>
                <p>last Name: {name.lastName}</p>
            </div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value})}
                />
                <input
                    type="text"
                    value={name.firstname}
                    onChange={e => setName({ ...name, lastName: e.target.value})}
                />
            </form>
        </div>
    )
}

export default FormHook
