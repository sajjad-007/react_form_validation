import { useState } from "react";


function App() {
  let [change,setChange] = useState({
    fullName:"",
    address:"",
    email:"",
    password:"",
  }) 
  let [error,setError] = useState({
    fullName:"",
    address:"",
    email:"",
    password:"",
  })
  let handleInput = (e)=>{
    let{name,value} = e.target
    setChange({...change, [name]: value})
    // conlose.log(change);
   }
  let handleSubmit= () => {
    if (!change.fullName) {
      setError({fullName: "enter your name"});
    }else if(!change.address) {
      setError({address: "enter your address"});
    }else if(!change.email) {
      setError({email:"enter your email"});
    }else if(!change.password) {
      setError({password:"enter your passwrod"});
    }else {
      console.log(change);
      setError("")
    }

  }
  return (
   <>
    <div className="main">
      <form onSubmit={(event)=> event.preventDefault()}>
      <h1>Open your console and see your data</h1>
        <h2>React form validation</h2>
        
        <input onChange={handleInput} type="text" name="fullName" placeholder="Enter Your Name" />
        {error.fullName && <p>{error.fullName}</p> }

        <input onChange={handleInput} type="text" name="address" placeholder="Enter Your Address" />
        {error.address && <p>{error.address}</p> }

        <input onChange={handleInput} type="text" name="email" placeholder="Enter Your Email" />
        {error.email && <p>{error.email}</p> }

        <input onChange={handleInput} type="password" name="password" placeholder="Enter Your Password" />
        {error.password && <p>{error.password}</p> }

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
     
   </>
  )
}

export default App
