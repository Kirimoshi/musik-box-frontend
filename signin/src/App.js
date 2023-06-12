import {Register} from './components//Register';
import {Login} from './components/Login'
import React,{useState} from 'react';
function App({Count}) {
  const [currentForm,setCurrentForm]=useState('login')

  const toggleForm=(formName)=>{
    setCurrentForm(formName)
  }

  return (
    <div className="App">
      {
        currentForm==='login'?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
