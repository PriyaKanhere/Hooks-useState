import React, { useState } from 'react'

function HookThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })}></input>
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })}></input>

                <h5>Your First Name is : {name.firstName}</h5>
                <h5>Your Last NAme is : {name.lastName}</h5>
            </form>
        </div>
    )
}

export default HookThree