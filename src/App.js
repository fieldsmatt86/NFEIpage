import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NFEI from './img/nfei logo.png';
import NFEIgrads from './img/NFEI grads.jpg';
import Kids from './img/IMG_1936.jpg';
import KidObama from './img/IMG_4069.JPG';
import NSC from './img/IMG_1969.jpg';
import WSC from './img/IMG_4069.JPG';
import SafeSay from './img/safe 2 say pic.jpg';
import SACS from './img/accred-seal-blues-1.png';



class App extends Component {
  render() {
    return (
      <div>
        <script src="https://kit.fontawesome.com/a33fe92022.js" crossorigin="anonymous"></script>

              <div className="AppHeader" >
               
              <div className="AH"> HOME </div>
                <div className="AH"> | </div>
                <div className="AH"> SCHOOLS </div>

              
          
                </div>




            
            <div className="Alerts">
              <div className="AA">
                <img src={NFEI} className="NFEI" alt="" />
                 </div>
              <div className="AAB">
              <div className="AHR">
                <div> CALENDAR </div>
                <div> QUICKLINKS </div>
                <div> RESOURCES </div>
                </div>
                 </div>

            </div>
            <div className="Body">
              <div className="BodyOne">
                <div className="BodyOneBT">
                  <div className="BT">
                    <div> Home </div>
                  <div> About </div>
                  <div> Departments </div>
                  <div> Schools </div>
                  <div> School Board </div>
                  <div> Athletics </div>
                  <div> Community </div>
                  <div> Contact </div>
                </div>
              </div>
            </div>
              <div className="BodyTwo">
              
              <img src={Kids} className="NFEIgrads" alt="" />

              </div>
              <div className="BodyThree">
                <div className="BB"> 

                <div className="B3a"></div>
                <img src={KidObama} className="NFEIgrads2" alt="" />
                 
                 </div>
                <div className="BB1">  
                <div className="BB1a"> Welcome to North Florida Educational Institute </div>
                <div className="BB1b"> North Florida Educational Institute is compromised of two campuses: North Side and West Side serving students K-12. </div>
                <div className="BB1c"> EXPLORE NFEI </div>

                </div>

              </div>
              <div className="BodyFour">
                <div className="BC"> News & Events </div>
              <div className="BD"> There's always something happening in Eagle Land. Check here often for a complete listing of district and building events plus news and announcements about our students and staff. 
</div>
              </div>
              <div className="BodyFive">
              <div className="B5a">Latest News</div>
              <div className="B5b">Upcoming Events</div>

              </div>
              <div className="BodySix">
              <div >
                <div className="B6a"> Everything on Two campus</div>
                <div className="B6aa"> From the first day of kindergarten to graduation day</div>
              </div>
              <img src={WSC} className="B6b" alt=""/>
              
              <img src={NSC} className="B6c" alt=""/>
              <div className="B6ba"> </div>

              </div>
             
            </div>
            <div className="Body2">
              <div className="Body2Left">
          

              </div>
              <div className="Body2Middle">
                <div className='B2M1'>
                  <div className='B2M1A'></div>
                </div>
                <div className='B2M2'>
                <div className='B2M2A'></div>
                </div>
                <div className='B2M3'></div>
                <div className='B2M4'></div>
                <div className='B2M5'></div>
                <div className='B2M6'></div>
              </div>
              <div className="Body2Right">
                <div className='B2R1'></div>
                <div className='B2R3'></div>

              </div>
             
            </div>
            <div className="Bottom1">
          
           
            <img src= {SafeSay} className='B1b' alt=""/>
            <img src= {SACS} className='B1c' alt=""/>
           

            </div>
            <div className="Bottom2">
              <div className="Bottom2Left">
                
                <div className="B2L1"> North Florida Educational Institute </div>
                
                <div className="B2L2"> 
                <div> West Campus (VPK - 6th)</div>
                <div> 580 Lawton Ave - Jacksonville, Florida 32202</div>
                <div> Tel: (904) 574-8059</div>
                <div> Fax: (904) 647-8964</div>
                
                </div>
                <div className="B2L2"> 
                <div> North Campus (7th - 12th)</div>
                <div> 4206 Arques Rd - Jacksonville, Florida 33443</div>
                <div> Tel: (904) 574-8059</div>
                <div> Fax: (904) 647-8964</div>
                </div>
              
              
                <div className="B2M1"> CONTACT US </div>
                <div className="B2M2"> North Florida Educational Institute recognizes
                that each child has unique abilities, talents, and needs. The school is 
                committed to providing in an accountable partnership with parents and 
                community, opportunities for each learner to acquire the knowledge, dkills, 
                and values to become a responsible, productive citizen. 
                </div>
                </div>
              
             
              <div className="Bottom2Right">
                <div className = "B2R1">
                <i class= "fa-user"></i>
                <i class="fa-brands fa-facebook"></i>
                <div className = "B2R2"> 
                <div className = "B2R2a">
                 <div> Enroll </div>
                 <div> Staff </div>
                 <div> Directory </div>
                 <div> News </div>
                 <div> School Calendar</div>
                 <div> Menus </div>
                 <div> Map & Directories </div>
                 <div> Employment </div> 
                 </div>
                </div>
              </div>
            </div>
            <div className="Credits">
            </div>
            </div>
      </div>
    )
  }
}

export default App;
