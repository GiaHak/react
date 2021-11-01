import React, { useState } from  'react';
    
    
const UserForm = (props) => {
 //create a state variable for each input in the form
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpass, setConfirmpass] = useState("");  

//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { firstname, lastname, email, password, confirmpassword};
//         console.log("Welcome", newUser);
//     };
    
    return(
    <>
        <form>
            <div>

                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={ firstname } />

                    {
                        firstname.length<2 && firstname.length >0?
                            <p className= "text-danger">Field must be at least 2 character</p>
                            : <p>  </p>
                    }
             </div>

            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) }value={ lastname } />
                    {
                        lastname.length<3  && lastname.length >0?
                            <p className= "text-danger">Field must be at least 1 character</p>
                            : <p>  </p>
                    }
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email}/>
                    {
                        email.length<4 && email.length >0?
                            <p className= "text-danger">Field must be at least 4 character</p>
                            : <p>  </p>
                    }
            </div>

            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password}/>
                {
                        password.length<4 && password.length >0?
                            <p className= "text-danger">Field must be at least 4 character</p>
                            : <p>  </p>
                    }
            </div>

             <div>
                <label>Confirm: </label>
                <input type="password" onChange={ (e) => setConfirmpass(e.target.value) } value={ confirmpass }/>
                {
                        confirmpass != password ?
                            <p className= "text-danger">confirm password must match</p>
                            : <p>  </p>
                    }
            </div>
            
        </form>

<div>
    {/* step 3- display the state variable at the bottom of page */}

<p>First Name: {firstname} </p>
<p>Last Name: {lastname} </p>
<p>Email Address: {email} </p>
<p>Password: {password} </p>
<p>Confirm : {confirmpass} </p>
</div>
</>
    );
};
    
export default UserForm;
