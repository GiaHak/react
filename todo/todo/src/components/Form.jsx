import React, {useState} from 'react';


const Todo = () => {

    const [task, setTask] = useState ({
        nameOfTask: "" ,
        isComplete: false
    })
// represents the list containing all the task  objects
const [listOfTasks, setListOfTasks] = useState([])

// when the input on the form changes, we need to update our state variable (task)'s name to be what is in the 

const changeHandler = (e) =>{
    console.log("make change")
    setTask({
         ...task,        //make a copy of whats currently in task
        
        [e.target.name]: e.target.value
    })

}

// when we submit the form, we will add the object to our list(array) of tasks, below is the submit handler called submitTask
const submitTask = (e) =>{
    e.preventDefault()
    console.log("submit task")
    setListOfTasks([...listOfTasks, task])   // update the list of tasks to have whatever it currently has plus the current task object that just got submitted 


    // to clear ot the form inputs first reset the state variable to initial value like below
    // second 
    setTask({
        nameOfTask: "",
        isComplete: false
    })
}
//complete a task
const completeTask = (e, i)=> {
    console.log("done!!!")

    //update the task object that was clicked on
        let [...updatedListofTasks] = listOfTasks
        console.log("updated lists", updatedListofTasks)
        updatedListofTasks[i].isComplete = !updatedListofTasks[i].isComplete
        //change the array of tasks at the index number where the task we want to update is to have the "isComplete" property toggle totrue and false

        setListOfTasks(updatedListofTasks) // update my state variable to use the new updated array of tasks
}


//  delete task
const deleteTask = (e, i) =>{
    let newlist = listOfTasks.filter((task, i)=>{
        return i != i  // return back only the tasks whose index number does not match the index number of the task i want to delete
    })
    //update my state variable liftofTasks
    setListOfTasks(newlist)
}

    return (

        <div>
            <h2>Add a task below</h2>
            <form onSubmit = {submitTask}>
                <div className="form-group">
                    <label htmlFor="">Task:</label>
                    <input onChange={changeHandler} type="text"  name="nameOfTask" value={task.nameOfTask} id= "" className="form-control" />
                </div>
                <input type="submit" value="Add Task" className="btn btn-primary mt-3"/>
            </form>
            {
                listOfTasks.map((task0bj, i)=>{
                    return (
                    <div key = {i}>
                        <h3 style = {{textDecoration:  task0bj.isComplete? "line-through": "non"}}>{task0bj.nameOfTask} <input  onClick = {(e)=>completeTask(e, i)} type="checkbox" name="" id=""/></h3>
                        <button onClick = {(e)=> deleteTask(e, i)}>Delete</button>
                    </div>
                    )
                })
            }
        </div>
    );
};



export default Todo;
