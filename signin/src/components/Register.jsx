import React,{useState} from 'react'

export const Register = (props) => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email);

    }

    return(
        <div className='Form'>
        <form className="register-form" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label htmlFor="name">Full Name</label>
            <input className='inputbox' value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="fullname"  name="fullname"/>
            <label htmlFor="email">email</label>
            <input  className='inputbox' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="youremail@gmail.com"  name="email"/>
            <label htmlFor="password">password</label>
            <input className='inputbox' value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="*********" id="password" name="password"/>
            <button type='submit'>Sign In</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already had a account have a account?Login here</button>
        </div>
    )
}