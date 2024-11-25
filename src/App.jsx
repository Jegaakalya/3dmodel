 import React from 'react'
import MyBook from './components/MyBook'
import backgroundimg from "./assets/backGround.jpg"
 
 
 const App = () => {
    
   return (
     <div className='w-full h-full flex justify-center items-center ' style={{background: `url(${backgroundimg})` , backgroundSize:"cover", backgroundPosition:"center", minHeight:"100vh", width:"100%"}}>
       <MyBook/>
     </div>
   )
 }
 
 export default App
 