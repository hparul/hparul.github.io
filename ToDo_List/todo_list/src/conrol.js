import React from 'react'
import {useState} from 'react'

const ControlledInput=(props)=>{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[startTime,setStartTime]=useState("");
    const[endTime,setEndTime]=useState("");

    const onChangeName=(e)=>{
         setName(e.target.value);
        console.log("name",name);
    }
    const onChangeAge=(e)=>{
        setAge(e.target.value);
       console.log("age",age);
   }
   const onChangeStartTime=(e)=>{
    setStartTime(e.target.value);
   console.log("startTime",startTime);
   }
   const onChangeEndTime=(e)=>{
    setEndTime(e.target.value);
   console.log("endTime",endTime);
   }



    return (
        <div>
            name:<input type="text" value={name} onChange={onChangeName}/>
            age:<input type="number" value={age} onChange={onChangeAge}/>
            startTime:<input type="time" value={startTime} onChange={onChangeStartTime}/>
            endtime:<input type="time" value={endTime} onChange={onChangeEndTime}/>
        </div>
    )
}
export default ControlledInput;