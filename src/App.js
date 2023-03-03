import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform'

function App(){
  const[mode,setMode]=useState('dark')
  const toggleMode = ()=>{
    if(mode == 'dark'){
      setMode('light');
      document.body.style.backgroundColor = "grey"
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "light"
    }
    }
  
return(
  <>
<Navbar   title="TextUtils"   about="AboutUs" mode={mode}toggleMode ={toggleMode}/>
<div className="my-3">
<Textform heading="Enter the Text to Analyse"/>

</div>
</>
)
}
export default App;