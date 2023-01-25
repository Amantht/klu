import '../App.css';
import cse from '../cse.png';

function Cse() {

  return (
    <div>   
    <center><br/><br/>
    <img src={cse} style={{width:"800",height:"100"}}/>
        <h1>Computer Science Department</h1>
    <h4>HOD:Hari kiran vege</h4>
 
    <p>Department of Computer Science & Engineering offers undergraduate, post graduate and Doctoral programs with a flexible and industry curriculum
         and innovative pedagogy that is very dynamic in capturing the latest trends in the industry and the job market. 
         The emphasis will be on making the student ready to be fit for the immediate industry needs</p>
         </center>
         <h>Programs offered:</h><br/>
         <ul>
            <li>B. Tech in Computer Science & Engineering</li>
            <li>B.Tech (Hons) Computer Science & Engineering.</li>
            <li>B.Tech Computer Science & Engineering (Specialization)</li>
            <li>B. Tech Computer Science & Engineering (Minor in other branch)</li>
            <li>M.Tech in Computer Science & Engineering</li>
            <li>M.Tech in Digital Forensics & Cyber Security (DF&CS)</li>
            <li>M.Tech in Artificial Intelligence & Data Science( AI&DS )</li>
            <li>Ph D in Computer Science & Engineering</li>
         </ul>

    </div>
  );
}

export default Cse;