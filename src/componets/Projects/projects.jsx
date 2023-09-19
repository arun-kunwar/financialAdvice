import React from 'react'
import './projects.css'
import box1 from './images/box1.jpg'
import box2 from './images/box2.jpg'
import box3 from './images/box3.jpg'
import box4 from './images/box4.jpg'
import box5 from './images/box5.jpg'

function projects() {
  return (
      <>
          
              <nav className='projects-navbar'>
                  
                  <ul> 
                     
              <h2>OUR PROJECTS</h2>
                   
                      <li> <a href="#">FINANCE</a></li>
                      <li> <a href="#">LOAN</a></li>
                      <li><a href="#">CAMERA</a></li>
                      <li><a href="#">INSURANCE</a></li>
                      <li><a href="#">CONTACTS</a></li>
                      </ul>
          </nav>
          <section className='project-main'>
              
              <div className='box box1'>
                  
                  <img src={box1} alt=""  className='img-box1'/>
              </div>
              <div className='box box2'>
                  <img src={ box2} alt="" className='img-box2' />
              </div>
              <div className='box box3'>
                  {/* <h5>FINANCE</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque architecto numquam .</p> */}
                  <img src={box3} alt="" className='img-box3' />
              </div>
              <div className='box box4'>
                  <img src={box4} alt="" className='img-box4' />
              </div>
              <div className='box box5'>
                  <img src={box5} alt="" className='img-box5'/>
              </div>
         
              
              

          </section>
          <section className='project-contacts'>
              <div className='contacts-bg'>
                  <h2>request a free consulatation</h2>
                  <p>Lorem ipsum dolor sit amet amet ipsum consectetur adipisicing elit.</p>
                  <input type="name" placeholder='NAME' className='project-name' />
                  <input type="email"  placeholder='EMAIL' className='project-email' required />
                  <input type="text" placeholder='NEED TO DISCUSS' className='project-text' />
                  <input type="submit" value="SUBMIT" className='project-submit' />
                  
              </div>
        </section>
              

      
      </>
  )
}

export default projects