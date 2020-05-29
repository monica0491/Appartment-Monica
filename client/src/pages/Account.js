import React, { useState, useEffect }  from "react";
// import Footer from "../components/Footer";
import Members from "../components/Members";
import Finances from "../components/Finances";
import Chores from "../components/Chores/Chores";
import { useParams } from "react-router-dom";
import API from '../utils/API';

function Account(props){

    const [household, setHousehold] = useState({});
    const {id} = useParams()

    useEffect(() => {
        loadHousehold(id);
    }, [])

    function loadHousehold(id){
        API.getHousehold(id)
        .then(res => 
            {setHousehold(res.data)})
        .catch(err => console.log(err));
    }
  
    return(
        <div className="group">
        <h1 className="text">Welcome to: {household.name}</h1>
    <div className="row">
        <br></br>
        <div className="column">
        <div className="card">
        <div className="households">
        <Members/>
        </div>
        </div>
        </div>
        <div className="column">
        <div className="card">
        <Chores/>
        </div>
        </div>
        <div className="column">
        <div className="card">
        <Finances/>
        </div>
        </div>
        {/* <Footer/> */}
    </div>
    </div>
  );
}

export default Account;
