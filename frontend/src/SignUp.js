
import { useState } from "react";

function SignUp() {

    const [formData, setFormData] = useState({
        name: "",
        password: "",
        password_confirmation: "",
        email: "",
        admin: false

    })

    function handleChange(e) {
        let name = e.target.name
        let value = e.target.value
        if (e.target.name === "admin" && value === "true") {
            value = true
        } else if (e.target.name === "admin" && value === "false") {
            value = false
        }

         setFormData((prev) => ({...prev, [name]: value}))
    }

function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)

    fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => {
        if (!res.ok) {
         console.log(res.status)
        }
        return res.json()
    }) 
    .then((json) => {
        console.log(json)
    })
    .catch((error) =>{
        console.error(error.full_messages)
    })

}

    return (
        <div className="signup-page">
        <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
            <label>Name</label>
            <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name}></input>
            <label>Email</label>
             <input onChange={(e) => handleChange(e)} type="email" name="email" value={formData.email}></input>
            <label>Password</label>
             <input onChange={(e) => handleChange(e)} type="password" name="password" value={formData.password}></input>
             <label>Password Confirmation</label>
              <input onChange={(e) => handleChange(e)} type="password" name="password_confirmation" value={formData.password_confirmation}></input>
              <label>Account Type</label>
              <select name="admin" onChange={(e) => handleChange(e)}>
                <option value={true} >Admin</option>
                <option value={false} >Customer</option>
              </select>
              <button type="submit">Submit</button>

        </form>
        </div>
    )
}

export default SignUp