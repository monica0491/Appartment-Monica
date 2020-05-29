import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { useParams } from 'react-router-dom';


function Members(props){
    
    const {id} = useParams();

    const [household, setHousehold] = useState([]);
    const [members, setMembers] = useState([])

    useEffect(() => {
        loadHouseholdMembers(id);
        loadMembers()
    }, [id])

    function loadMembers(){
        API.getMembers()
        .then(res => 
            {setMembers(res.data)
            console.log(res.data)})
        .catch(err => console.log(err));
    }

    function loadHouseholdMembers(id){
        API.getHousehold(id)
        .then(res => 
            // console.log(res.data.members[0])
         API.getMember('5ed0754921db62002ab49ec1')
         .then(res => console.log(res)))
        .catch(err => console.log(err));
    }

    //map users and filter the ones that match the household id. Should be on the backend.
    // function householdMembers(){
    //     API.getMember()
    // }

    // API.getMember(res.data.members[0])

    //Pass members id into this getMember method to load members
    // function loadMembers(){
    //     household.map(member => {
          
            
    //     })
    
    //     API.getMember('5ecf288873e24a1e103f2214')
    // .then(res=> 
    //     {setMembers(res.data.username)
    //    })
    
    // }
    
   

    // console.log(members)

    return(
        <div className="profile-info">
            <div className="details">
                    
                    <br></br>
                <div className="details-info">
                    {
                        household.members ? (
                            <ul className="members">
                            <h1 className="members">Current Members:</h1>
                            {/* { <li>
                                        {household.members}
                                    </li>} */}
                            {
                                members.map(member => 
                                    <li key={member._id}>
                                        {member.username}
                                    </li>
                                    )
                            }     
                                </ul>



                            
                                // <li>{members.username}</li>
                                // <br></br>
                
                                
                                ):
                        (
                            <h3>No current members</h3>
                        )
                    }

                   
                </div>
            </div>
            {/* <div>
                <img src='../images/bless.png' width='300' height='60' alt="bless" className="bless"></img>
            </div>  */}
        </div>
    )
}

export default Members;
