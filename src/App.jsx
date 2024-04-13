import React,{useRef} from 'react'
import './App.css'
const App = () =>
{
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(userRef.current.value,emailRef.current.value,passwordRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Example of UnControlledUseRef</h1>
      Name     :<input type="text"  name="Text"ref={userRef}/><br /><br />
      Email    : <input type="email" name="Email" id="em" ref={emailRef} /><br /><br />
      Password : <input type="password" value="Password" id="pwd" ref={passwordRef} /><br /><br />
      <button type="submit">submit</button>
    </form>
  )

}
export default App