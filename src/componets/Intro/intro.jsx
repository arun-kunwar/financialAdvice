import React from 'react'
import './intro.css'
import box1 from './images/box1.png'
import box2 from './images/box2.png'
import box3 from './images/box3.png'
import box4 from './images/box4.png'
import box5 from './images/box5.png'

function body() {
  return (
    <>
      <section className='flex'  >
        <div className='intro'> </div>
        <div>
          <h1 className='h1'> We Provide Expert <br /> Financial Advice</h1>
          <p className='p'> We provides independent advice  based on establised reasearch methods <br /> and
            our experts have in-depth sector knowledge</p>
        </div>
        <div className='button'><input type="button" value='Get start now' className='submit' /></div>

        <div className='box'></div>
      </section>

      <main className='body'>
        <h2 className='h2'>WHAT WE OFFER</h2>
        <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et! Consequatur nemo ullam officiis <br /> <p className='opp'>lorem sum dolor sit amet consectetur adipisicing elit Beatae .</p> </p>
        <div className='box1'>
          <img src={box1} alt="g " className='imgbox1'/>

        </div>
        <div className='box2'>
          <img src={box2} alt=""  className='imgbox2'/>
         
        </div>
        <div className='box3'>
          <img src={box3} alt="" className='imgbox3' />
        </div>
        <div className='box4'>
          <img src={box4} alt=""  className='imgbox4'/>
        </div>
        <div className='box5'>
          <img src={box5} alt=""  className='imgbox5'/>
        </div>
       
        <div className='box6'>
        
         
        </div>


      </main>







    </>
  )
}

export default body