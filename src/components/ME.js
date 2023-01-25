import '../App.css';
import me from '../me.png';

function ME() {

  return (
    <div>
      <center><br/><br/>
      <img src={me} style={{width:"800",height:"100"}}/>
      <h1>Mechanical Department</h1>
      <h4>Hod:Dr. DVA Ramasastry</h4>
      <p>Established in1980, the Mechanical Engineering is one of the most versatile and broadest fields of
         engineering. The key areas of Mechanical Engineering like ‘Product Design’, ‘Smart Manufacturing & 
         Automation’ and ‘Automobile Electronics’ have opened vast opportunities in industries allied to
          Automobiles, Aerospace, Renewable Energy, Manufacturing, Oil & Gas Production and Subsea technologies in
           renowned MNC’s and Government companies. Especially, with emerging growth in automation, along with boys,
            girl students also find larger and better scope in Mechanical engineering sector.</p>
      </center>
      <h>Programs offered:</h><br/>
      <ul>
        <li>Engineering Design</li>
        <li>Smart Manufacturing</li>
        <li>Automobile and Autotronics</li>
        <li>Product Design</li>
        <li>Energy & CFD</li>
        <li>M.Tech in Robotics and Mechatronics</li>
        <li>M.Tech in Thermal Engineering</li>
        <li>M.Tech in Machine Design</li>
      </ul>
    
    </div>
  );
}

export default ME;