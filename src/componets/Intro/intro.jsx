import React from 'react'
import './intro.css'
import box1 from './images/box1.png'
import box3 from './images/box3.png'
import box4 from './images/box4.png'
import box5 from './images/box5.png'
import box6 from './images/box6.png'

// reset this


function body() {
  return (
    <>
      <main className='main'  >
        <div>
          <h1 className='h1'> We Provide Expert <br /> Financial Advice</h1>
          <p className='p'> We provides independent advice  based on establised reasearch methods <br /> and
            our experts have in-depth sector knowledge</p>
        </div>
        <div className='button'><input type="button" value='Get start now' className='submit' /></div>

      </main>

      < section className='offer'>
        <div className='offer-head'>
          <h3 className='offer-heading'>WHAT WE OFFER</h3>
          <p className='offer-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et! Consequatur nemo ullam officiis lorem sum dolor sit amet consectetur adipisicing elit Beatae .</p> </div>

        <div className='container-offer'>

          <div className='box box1'>
            <img src={box1} className='imgbox1' />
            <p>FINANCIAL PLANNING</p>
          </div>
          <div className='box box2'>
            <div>
              <h5>INVESMENT PLANNING</h5>
              <p>Lorem ipsum dolor sit amet dbbf
                adipisicing elit. </p>
              <input type="button" value="READ MORE" className='readmore' />
            </div>


          </div>
          <div className='box box3'>
            <img src={box3} alt="" className='imgbox3' />
            <p> SAVING & INVESMENT</p>
          </div>
          <div className='box box4'>
            <img src={box4} className='imgbox4' />
            <p>MUTAL FUNDS</p>
          </div>
          <div className='box box5'>
            <img src={box5} alt="" className='imgbox5' />
            <p>NDUSTRAIL INSURANCE</p>
          </div>
          <div className='box box6'>
            <img src={box6} alt="" className='imgbox6' />
            <p>SUPPORT</p>
          </div>
        </div>
      </section>
      <section className='who'>
        <div className='sec-bg'></div>
        <div className='who-container'>
          <h3 >WHO WE ARE</h3> 
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam libero sed iure  numquam earumbeatae fuga sint distinctio exercitationem ea error voluptatee quae doloribus iste aut, accusamus illo nobis fugiat kdbd fnbj jkd kjvnk jnndkc  ndnv lnvn nksn ndlsn lorem ipusm
            <span>lorem odlre sit amet ipsam sws hom kdfa hgsvc jsavcj jab</span>

          </p>
          <input type="button" value='READ MORE' className='readmore' />
         

        </div>
        <div ></div>


      </section>







    </>
  )
}

export default body