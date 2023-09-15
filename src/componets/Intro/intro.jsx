import React from 'react'
import './intro.css'
import box1 from './images/box1.png'
import box2 from './images/box2.png'
import box3 from './images/box3.png'
import box4 from './images/box4.png'
import box5 from './images/box5.png'

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

            <div className='box box1'></div>
            <div className='box box2'></div>
            <div className='box box3'></div>
            <div className='box box4'></div>
            <div className='box box5'></div>
            <div className='box box6'></div>



          </div>

        {/* <div className='main-box1'>
          <img src={box1}  className='imgbox1' />
          <p className='divp1'>FINANCIAL PLANNING</p>
        </div>

        <div className='main-box2'>
          <img src={box2} alt="" className='imgbox2' />
          <p className='divp2'>MUTAL FUNDS</p>
        </div>

        <div className='main-box3'>
          <img src={box3} alt="" className='imgbox3' />
          <p className='divp3'> SAVING & INVESMENT</p>
        </div>

        <div className='main-box4'>
          <img src={box4} alt="" className='imgbox4' />
          <p className='divp4' >INDUSTRAIL INSURANCE </p>
        </div>

        <div className='main-box5'>
          <img src={box5} alt="" className='imgbox5' />
          <p className='divp5'>SUPPORT</p>
        </div>

        <div className='main-box6'>

          <h5 className='h3'>INVESMENT PLANNING</h5>
          <p className='p3'>Lorem ipsum dolor sit amet dbbf bfkd  <br />
              adipisicing elit. </p>
          <input type="button" value="READ MORE" className="read" />

        </div> */}
        

      </section>
      <section className='who'>
        <div className='sec-bg'></div>
        <div>
          <h3 className='sec-h1'>WHO WE ARE</h3> <br />
          <p className='sec-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam libero sed iure <br />  numquam earumbeatae fuga sint distinctio exercitationem ea error voluptatee <br />quae doloribus iste aut, accusamus illo nobis fugiat kdbd fnbj jkd kjvnk jnndkc <br /> ndnv lnvn nksn ndlsn lorem ipusm
            <br /> <br /> <span>lorem odlre sit amet ipsam sws hom kdfa hgsvc jsavcj jab</span>
          
          </p>
          <br />
          <input type="button" value='READ MORE' className='sec-button' />


        </div>
        <div c></div>


      </section>







    </>
  )
}

export default body