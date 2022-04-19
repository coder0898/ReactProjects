import React,{useState} from 'react'

const Login = ({loginAccount, error}) => {
    const [detail, setDetail] = useState({
        email:"",
        password:"",
    })
   const handleSubmit = e =>{
       e.preventDefault();
       loginAccount(detail);
    //    console.log(detail);
   }  
  return (
    <>
    <div  className='bg-white mt-20 shadow-lg shadow-white flex flex-col rounded-xl w-full '>
        <h1 className='text-center bg-orange-500 mt-2 py-4 px-4 text-3xl text-white font-mono font-bold'>User Login Page</h1>
        {(error !="")?(<div className='h-8 m-2 text-center text-xl bg-pink-400 text-red-600 font-serif font-semibold px-2'>{error}</div>):""}
        <form onSubmit={handleSubmit} className="flex flex-col text m-4 ">
            <label className='font-mono text-2xl font-semibold mb-2' >Email:</label>
            <input type="email" name='email' className='h-10 border-b-4 border-indigo-600 text-xl' value={detail.email} onChange={e=> setDetail({...detail, email:e.target.value})} placeholder='Enter your mail id'/>
            <label className='font-mono text-2xl font-semibold mb-2'>Password:</label>
            <input type="password" name='password' className='h-10 border-b-4 border-indigo-600 text-xl mb-2' value={detail.password} onChange={e=> setDetail({...detail, password:e.target.value})} placeholder='Password'/>
            <button type='submit' className='mt-2 bg-blue-700 p-2 text-center font-bold text-2xl text-white rounded-2xl hover:bg-green-700'>Logged In</button>
        </form>
    </div>
    </>
  )
}

export default Login;