import React , {useState} from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

export default function AddUser(props) {

    const [enteredUser,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUser.trim().length === 0 || enteredAge.trim().length===0){
            setError({
                title: 'invalid input',
                message: 'please enter a valid name and age'
            })
            return;
        }

        if(enteredAge < 0){
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age i.e. >0'
            })
            return;
            
        }
        // console.log(enteredUser,enteredAge);
        props.onAddUser(enteredUser,enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }



    return (

        <div>

            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUser} />
                    <label htmlFor="age">Age (years) </label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button>Add User</Button>
                </form>
            </Card>
           
        </div>


    )
}
