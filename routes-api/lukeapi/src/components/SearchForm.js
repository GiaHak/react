import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const SearchForm = () => {

    //state variable to store the categories from the api call
    const [lists, setLists] = useState([])

    //state variable to store the info collected in the form and   set it equal to object
    const [formInfo, setFormInfo] = useState({
        list: "people",
        id: ""     //match the keys (categ and id) in the input form
    })

    //initialize useHistory and store it in a variable so we can use it
    const history = useHistory();


    //when page loads up, i want the axios to call the starwars api and get all the lists, and store the lists in a state variable to that i can pre-populate the dropdown with those lists

    useEffect(() => {
        //use axios to get all the categories (calling the API)
        axios.get("https://swapi.dev/api/")
            .then(res => {    //
                console.log(" logging response", res)
                console.log(Object.keys(res.data))    //extracting keys from response .data 
                setLists(Object.keys(res.data))
            })
            .catch(err => console.log(err))  // catches errors

        console.log("check response!")


    }, [])

    //this changeHandler is to keep track of inputs changing in the form and it will update by  state variable collecting the formInfo with the info form the form (onChange)
    const changeHandler = (e) => {
        console.log("changing inputs!!!")
        console.log(e.target.value) //e.target.value is the information selected or typed in the from inputs

        console.log(e.target.name) //e.target.name is the name of the input that was changed-->and this name of the input matches a key in our state variable formInfo 

        setFormInfo({   //updating a object
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }


    //submit handler-->which is my function that runs after the from is submitted
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted!!")
        console.log(formInfo)
        //AFTER the form is submitted, we redirect using useHistory()

        history.push(`/${formInfo.list}/${formInfo.id}`) //similar to saying "redirect("/test")"
    }




    return (
        //list and id is the input name
        <div>
            <form onSubmit={submitHandler} className=" row g-6 " action="">
                <div className="col-md-6 col-centered">
                    <label htmlFor="">Search for: </label>
                    <select onChange={(e) => changeHandler(e)} name="list" id="" className="form-select">
                        {
                            lists.map((lists, i) => {   //using map to do the list dynamically.  categ is the key and i is the index 
                                return(
                                <option key={i} value={lists}>{lists}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-1">
                <label htmlFor="">ID: </label>
                    <input onChange={(e) => changeHandler(e)} type="number" name="id" id="" className="form-control" />


                </div>
                <div className="col-auto mt-4">
                    <input className="btn btn-primary" type="submit" value="Search" />
                </div>
            </form>


        </div>

    );
};


export default SearchForm;