import React,{useState}  from 'react';
import '../App.css';

//import NewComp from './newcomp';
const Button=(props)=>{
  return(
    <button onClick={props.handleclick}>
      {props.text}
    </button>
  )
}
const Display=(props)=>{
return(
<div>
  {props.counter}
</div>
)
}
const Cal=()=>{
  const [counter,setCounter] =useState(0)
  const [c,setCounter1] =useState(0)
  const [c1,setCounter2] = useState(0)
  return(
    <div className='App'>
      <Display counter={counter}/>
      <Button
      handleclick ={()=>{setCounter(counter+1);
        console.log('plus clicked')}}
        text ="increase"
        />
        <Button handleclick={()=>setCounter(0)}
        text="zero"/>
        <Button handleclick={()=>setCounter(counter-1)}
        text="Decrease"/>
        <br></br>
        <br></br>
        <Display counter={c}/>
        <Button handleclick={()=>setCounter1(c+1)}
        text="increase"/>
        <Button handleclick={()=>setCounter1(0)}
        text="zero"/>
        <Button handleclick={()=>setCounter1(c-1)}
        text="decrease"/>
        <br></br>
        <br></br>
        <Display counter={c1}/>
        <Button handleclick={()=>setCounter2(c+counter)}
        text ="Addition"/>
        <Button handleclick={()=>setCounter2(counter-c)}
        text ="Subtraction"/>
        <Button handleclick={()=>setCounter2(c*counter)}
        text ="Multiplication"/>
        <Button handleclick={()=>setCounter2(counter/c)}
        text ="Division"/>
        <Button handleclick={()=>setCounter2(0)}
        text ="Reset"/>
    </div>
  )
}

export default Cal;