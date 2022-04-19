import React,{useState,useRef} from 'react';
const Select = ()=> {
 const [visible,setVisible]=useState(false);
 const selectRef =  useRef('')
 const selectChange =()=>{
   const selectValue = selectRef.current.value
   if (selectValue === 'others'){
    setVisible(true)
   }
   else{
     setVisible(false)
   }
 }
   return (
     <div> 
       {/* <div onClick={handleVisible}>df</div>     */}
 <select onChange={selectChange} ref={selectRef} name="color" > 
    <option vlaue="pick">pick a color</option>  
    <option value="red">RED</option>
    <option value="blue">BLUE</option>
    <option value="others">others
     </option>
  </select>
 {visible && 
    <div>
      <input type="text" />
    </div>
 }
     </div>
   )
 }
 export default Select