import React from 'react'
import { useState } from 'react'
import Permission from './Permission'

const Path = (vars) => {
    //var python_url = vars.python_url
    const { api_url } = vars
    const [permissions, SetPermissions] = useState([])
    const [path, SetPath] = useState("")

    async function getPermissions(event) {
        event.preventDefault();
        const request_params = {
            method: 'POST',
            dataType: "json",
            'Access-Control-Allow-Origin': '*',
            body: JSON.stringify({ "path": path })
        }
        await fetch("http://" + api_url, request_params)
            .then(response => response.text())
            .then(data => {
                console.log(JSON.parse(data))
                SetPermissions(JSON.parse(data))
            })
    }

    return (
        <div>
            <form onSubmit={getPermissions}>
                <input type="text" id="path" name="path" placeholder="Enter path here" onChange={(e) => SetPath(e.target.value)} />
                <button id='submit'>Submit!</button>
            </form>
            {permissions.map((value,index) => {
                return <Permission index={index} value={value}/>
            })}
        </div>
    )
}

export default Path
