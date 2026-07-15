import Login from "./Login"
import Signup from "./SignUp"


 function UserPage({setCurrentUser}) {








    return (
        <div className="user-page">
            <Login setCurrentUser={setCurrentUser}></Login>
            <Signup></Signup>
        </div>
    )
}

export default UserPage