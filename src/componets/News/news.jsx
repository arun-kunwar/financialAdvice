import React from 'react'
import './news.css'

function news() {
  return (
      <>
          <main className='news-main'>
              <h3> latest news</h3>
              <div className='news-container'>
                  <div className="box box1">
                      <h4 className='box1-heading'> 1SEP</h4>
                      <p className='box1-para1'>Lorem ipsum dolor sit amet consectetur.</p>
                      <p className='box1-para2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex iste asperiores officiis! bdkb dkb <a href="google.com">Read more</a></p>
                  </div>
                  <div className="box box2">
                      <h4 className='box2-heading'> 14FEB</h4>
                      <p className='box2-para1'>Lorem ipsum dolor sit amet consectetur.</p>
                      <p className='box2-para2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex iste asperiores officiis! bdkb dkb <a href="google.com">Read more</a></p>
                      
                  </div>
              </div>
              

          </main>

      </>
  )
}

export default news