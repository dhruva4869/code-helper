import React from 'react'
import {BsFillMoonStarsFill, BsBrightnessHigh} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillGithub,
} from "react-icons/ai";
import img1 from "./971.jpg"
import gg from "./ddf.jpg"
import gg1 from "./dfk.jpg"

function Home() {
  return (
    <div >

    <main className='bg-white px-10 dark:bg-slate-900'>
      
      <section className="min-h-screen ">
        {/* <nav className='py-10 mb-12 flex justify-between bg-local hover:bg-fixed'>
          Hello

        </nav> */}
        <div className='relative py-10 mb-12 w-full h-screen flex justify-between bg-local hover:bg-fixed '>
          <img className='w-full h-full object-cover opacity-50 rounded-xl drop-shadow-xl' src={img1} alt="Background Image"/>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-violet-50 font-medium md:text-6xl font-serif animate-pulse"> Code Guider 🎯</h2>
            <h3 className="text-2xl py-2 text-green-200 font-mono">A personalized guide for you 📑</h3>
            <p className="text-md py-5 leading-8  text-red-100 max-w-xl mx-auto md:text-xl">
              Join us below and embark on a collaborative endeavor 🤝. Together, we shall commence our work.<br></br>
              Code Guider is top-notch, and will only grow with time to time.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-1 my-1 text-gray-600 dark:text-gray-400">
              <a href='https://twitter.com' target='_blank' className='cursor-pointer hover:text-blue-500'><AiFillTwitterCircle /></a>
              <a href='https://linkedin.com' target='_blank' className='cursor-pointer hover:text-sky-700'><AiFillLinkedin/></a>
              <a href='https://github.com' target='_blank' className='cursor-pointer hover:text-black'><AiFillGithub/></a>
            </div>  
          </div>
        </div>

          <div className='bg-gradient-to-r from-indigo-950 to-slate-950 rounded-xl my-10 p-2'>
            <p className="text-md py-5 text-center leading-8  text-cyan-300 max-w-xl mx-auto md:text-xl">
            Navigate the coding landscape with Code Guider, your trusted companion for unlocking the secrets of efficient and elegant programming.
            </p>
          </div>


          <div className='carousel w-full max-h-96 my-7 relative'>


            <div id="item1" className="carousel-item w-full relative">
                <img className='w-full h-full object-cover rounded-xl drop-shadow-xl contrast-150' src={gg1} alt="Background Image"/>
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                  <a href='https://codeforces.com/' target='_blank'><p className='text-cyan-50 text-2xl font-serif overflow-hidden hover:text-cyan-500'> Codeforces Guide</p></a>
                </div>
              </div>
            <div id="item2" className="carousel-item w-full relative">
              <img className='w-full h-full object-cover rounded-xl drop-shadow-xl contrast-125 opacity-50' src={gg} alt="Background Image"/>
              <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                <a href='https://leetcode.com/' target='_blank'><p className='text-cyan-50 text-2xl font-serif overflow-hidden hover:text-cyan-500'> Leetcode Guide</p></a>
              </div>
            </div>

            
          </div>
          <div className="flex justify-center w-full py-3 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
          </div>


        


      </section>


      </main>

    </div>
  )
}

export default Home;