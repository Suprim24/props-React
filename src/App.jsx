import User from './user.jsx'
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
  return(
    <div>
      <h1>Props in React</h1>
      {/* <User  name={name} age={12} email="supr@.com" /> */}
      <User user={userObj}
      />
      <User user={userObj1}/>
    </div>
  )
}
export default App