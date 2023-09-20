import React from 'react'
import './team.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'

function team() {
  return ( <>
    
      <main className='team'>
          <div>
          <h3> Our expert team</h3>
              
          </div>
          <div className='team-photos'>
              <div className='box box1'>
                  <img src={img1} alt="" className='img1'/>
          </div>
              <div className='box box2'>
                  <img src={img2} alt=""  className='img2'/>
          </div>
              <div className='box box3'>
                  <img src={img3} alt=""   className='img3'/>
          </div>
              <div className='box box4'>
                  <img src={img4} alt="" className='img4' />
         </div>
          </div>
          <div className=' team-qualification'>
              <div className="box box1"></div>
              <div className="box box2"></div>
              <div className="box box3"></div>
              <div className="box box4"></div>
          </div>
          
      </main>
      <section className='info'>
          
          <div className='info-head'>
              <div className='box'>
                  <h3>what client say</h3>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatem deleniti praesentium ullam nemo, illo ratione numquam natus accusantium, aliquid delectus! Fuga odio voluptatum voluptas fugit labore corporis autem facere.
                  </p>
              </div>
            

          </div>
          
      </section>
      </>
  )
}

export default team