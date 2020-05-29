import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Signup() {
    const [state, dispatch] = useStoreContext();
    const [user,setUser] = useState({username: "", password : "", email : ""});


    const onChange = event =>{
        // console.log('this is who to update!!', event.target.name)
        setUser({...user, [event.target.name] : event.target.value})
    }

    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        API.signup(user)
            .then(function(data) {
                const userId = data.data._id;
                history.push("/myhomescreen/" + userId);
                dispatch({
                    type: LOGIN,
                    _id: data.data._id
                })
                console.log("Just signed up and this is our users id", userId);
            })
    }

    return (

        <div className="container my-5 bg-light p-5">
            <h2 className="text-center">SignUp</h2>
            <form className="mt-4 col-6">
                <div className="form-group">
                    <label>Username </label>
                    <input name="username" onChange={onChange} type="username" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" onChange={onChange} type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" onChange={onChange} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>


                <button onClick={handleClick} className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Submit</button>

            </form>
        </div>
    );
}

export default Signup;