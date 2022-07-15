import React, {useState} from "react";

import '../App.css';


export const UseForms =()=>{

    const [person, setPerson] = useState({firstName:"", email:"" , age:"" });
    const [people, setPeople] = useState([]);

const handelSubmit =(e)=>{
    e.preventDefault();
    if(person.firstName && person.email && person.age){

        const newPerson = {...person, id: new Date().getTime().toString(),}
        setPeople([...people, newPerson])
        setPerson({firstName:"", email:"", age:""})
  
    }
}

const handelChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name]:value});


}
    return(
        <>
            <div>
                <form onSubmit={handelSubmit} className="form" >
                    <label htmlFor="firstName">name : </label>
                    <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handelChange} ></input><br/>

                    <label htmlFor="email">email : </label>
                    <input type="text" id="email" name="email" value={person.email} onChange={handelChange} ></input><br/>

                    <label htmlFor="age">age : </label>
                    <input type="text" id="age" name="age" value={person.age} onChange={handelChange} ></input><br/>

                    <button type="submit" >Submit</button>
                </form>
                {
                    people.map((person1, index)=>{
                        const { id, firstName, email , age} = person1
                        return(
                            <div key={id}>
                                <h1>{firstName}</h1>
                                <h2>{email}</h2>
                                <h2>{age}</h2>
                            </div>
                        );
                    })
                }
            </div>
            

            
        </>

    );



}