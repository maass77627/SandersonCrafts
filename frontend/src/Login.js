
import { useState} from "react"
import { useNavigate } from "react-router-dom"
function Login({setCurrentUser}) {
    const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const navigate = useNavigate()

  function handleChange(e) {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))

  }


    function handleSubmit(e) {
    e.preventDefault()
    console.log("before fetch")

    fetch("http://localhost:3000/login", {
        method: "POST", 
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => {
        console.log("got response", res);
        if (!res.ok) {
         throw new Error(`Request failed: ${res.status}`);
        }
        return res.json()
    }) 
    .then((json) => {
        console.log(json)
         console.log("logged in user:", json);
        setCurrentUser(json)
    })
    .catch((error) =>{
        console.error(error.message)
    })


    navigate("/")

}






    return (
        <div className="login-page">
            <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
             <label>Name</label>
            <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name}></input>
            
            <label>Password</label>
             <input onChange={(e) => handleChange(e)} type="password" name="password" value={formData.password}></input>
             
              <button type="submit">Submit</button>


        </form>
        </div>

    )
}

export default Login