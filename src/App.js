import React,{useState} from 'react';
import Login from './components/Login';


function App() {
  const validUser ={
    email:"admin@gmail.com",
    password:"admin123",
  }
  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const [error, setError] = useState("");

  const loginAccount = details=>{
    // console.log(details);
    if(details.email == validUser.email && details.password == validUser.password){
      console.log("logged in");
      setUser({
        email:details.email,
        password:details.password,
      });
    }else{
      console.log("Invalid user mail or Password!!!");
      setError("Invalid user mail or Password!!!");
    }

  }
  const logoutAccount = ()=>{
    console.log("Logged out!!");
    setUser({
      email:"",
      password:"",
    });
    setError("Logged out!!");
  }
  return (
    <div className="App">
      {(user.email !="")?(
        <div  className='bg-white mt-20 shadow-lg  flex flex-col rounded-xl w-full '>
          <h2 className='p-4 text-center text-3xl text-yellow-500 font-mono font-light'>Welcome to site, <span className='text-red-500 underline'>{user.email}</span> </h2>
          <button onClick={logoutAccount} className= " h-14 bg-yellow-500 m-4 text-center font-bold text-2xl text-white rounded-2xl hover:bg-red-500">Logout From The Site</button>
        </div>
      ):(
     <Login loginAccount={loginAccount} error={error}/> 
      )}
    </div>
  );
}

export default App;
