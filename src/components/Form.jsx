import { useState } from "react"
import validation from "./validation"

export default function Form({login}) {

    const [userdata,setUserdata] = useState({
        email : "",
        password: ""
    })
    const [errors,setErrors] = useState({})

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setUserdata({
            ...userdata,
            [property]: value
        })
        validation({
            ...userdata,
            [property]: value
        }, errors, setErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userdata)
    }

    return (
    <form onSubmit={handleSubmit}>
        
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={userdata.email} onChange={handleChange} />
        
        <label htmlFor="">Contraseña</label>
        <input type="text" name ="password" value={userdata.password} onChange={handleChange} />

        <button>Submit</button>

    </form>
    )
}

