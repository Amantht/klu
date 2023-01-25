import '../App.css';
import ece from '../ece.png';
function Ece() {

  return (
    <div>
      <center><br/><br/>
      <img src={ece} style={{width:"800",height:"100"}}/>
    <h1>Electrical & Electronic Department</h1>
    <h4>Hod:Dr. Jarupula Somlal</h4>
    <p>Welcome to the Department of Electrical & Electronics Engineering at Koneru Lakshmaiah Education Foundation.
      We started our journey in the year of 1995. Over the last few decades, we have grown our expertise and
      competence in the core Electrical & Electronics Engineering curriculum and research. We have a strong
       undergraduate program in Electrical & Electronics engineering, including B. Tech, M. Tech. dual degree 
       program. At the postgraduate level, we offer M. Tech.,& M. Tech., by Research and PhD degrees. The sanctioned
        students’ strengths of B. Tech., M. Tech., and M. Tech., by researchare respectively 60, 36 and 10 per year.
         At present, the department has 167 PhD scholars.Several sponsored candidates from industries and research 
         laboratories carry out their postgraduate studies in our department.</p>
         </center>
         <h>Programs offered:</h><br/>
         <ul>
          <li>Smart Grid Technology (Specialization)</li>
          <li>Electrical Vehicle Technology (Specialization)</li>
          <li>Green Energy Technology (Specialization)</li>
          <li>Industry Automation (Specialization)</li>
         </ul>
    </div>
  );
}

export default Ece;