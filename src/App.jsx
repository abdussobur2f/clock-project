 import {useState ,useEffect} from 'react'

 
 
 const App = () => {

   const [clock ,setClock] = useState(new Date())
useEffect(()=>{
  const interval = setInterval(()=>{
setClock(new Date())
 },1000);

 return ()=>{
  clearInterval(interval)
 }


},[clock])
const deg = 6

   

const hour = clock.getHours() * 30;
const minute= clock.getMinutes() * deg;
const sec = clock.getSeconds() * deg;

 
 
   return (
     <>

<div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotate(${(hour) + (minute/2)}deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotate(${minute}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotate(${sec}deg)`
          }}
     
        />
<div className="count">
<span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
</div>
      </div>

     </>
   )
 }
 
 export default App