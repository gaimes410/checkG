import React from 'react'

const Styling = {
    border: "1px solid black"
}

const Permission = (props) => {
    const {index, value} = props
    return (
        <div style={Styling}>
            User: {value.User} <br/>
            Permissions: {value.Permissions} <br/> <br/>
        </div>
    )
}

export default Permission
