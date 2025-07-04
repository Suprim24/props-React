import User from './user.jsx'
import College from './college.jsx'
import Student from './student.jsx'
import { useState } from 'react'
const App= ()=>
{
  // let name="suprim Acharya"
  let userObj={
    name:"Suprim Acharya",
    age:20,
    email:"Suprim@gmail.com"
  }
  let userObj1={
    name:"Harry",
    age:20,
    email:"Harry@gmail.com"
  }
  let userObj2={
    name:"Garry",
    age:20,
    email:"Harry@gmail.com"
  }
 const[student,setStudent]=useState()
  let collegeName =["Niharreka"," Birat Kshitiz ","BMC"]
  return(
    <div>
      {student && <Student std={student}/>}
      <button onClick={()=>setStudent("sam")}>Update</button>
      {/* <User  name={name} age={12} email="supr@.com" /> */}
      <College clz={collegeName[0]} />
      <User user={userObj}
      />
      <User user={userObj1}/>
      <User user={userObj2}/>
      
      
    </div>
  )
}
export default App