import { MenuIcon, Phone, SidebarClose } from 'lucide-react'
import React from 'react'
import { navLinks, socialMedia } from '../constants'

function Navbar() {

  const [nav, setNav] = React.useState(false)
  return (
    <nav className='w-full fixed top-0 z-[1000] shadow-lg'>
      {/* <div className='w-full bg-yellow-400 p-2 h-[3rem]'>
            <div className='contain mx-auto flex justify-between px-2 items-center h-full '>
              <div className='flex gap-x-3'>
                {
                  socialMedia.map((item,index)=>(
                    <a className='bg-black p-1 rounded-full text-white' key={index} href={item.link}>{item.icon}</a>
                  ))
                }
                
              </div>


              <div className='flex gap-1 md:gap-2 text-md font-semibold bg-black p-2 rounded-full text-white'>
                <Phone/>
                +233532460281
              </div>

            </div>
      </div> */}

      <div className='w-full bg-white h-[4rem] '>
                {/* Logo */}
                <div className='w-full contain flex h-full justify-between items-center p-2 mx-auto'>

                <div className='flex flex-col items-center  '>
                  <h1 className='text-xl font-bold '>Handy.Net</h1>
                  <h3 className='text-lg font-bold text-yellow-400 mt-[-10px]'>IT Solutions</h3>

                </div>


                    {/* Nav Links */}
                    <div className='md:flex gap-x-9 hidden '>
                      {
                        navLinks.map((item,index)=>(
                          <a className='hover:border-b  hover:border-yellow-400 hover px-2  ' key={index} href={item.link}>{item.name}</a>
                        ))
                      }
                    </div>

                      {/* Media links */}
                    <div className='md:flex gap-x-3 hidden'>
                      {
                        socialMedia.map((item,index)=>(
                          <a className='bg-black p-1 rounded-full text-white' key={index} href={item.link}>{item.icon}</a>
                        ))
                      }
                    </div>


                    <div className='md:hidden' onClick={()=>setNav((prev)=>!prev)}>
                      <MenuIcon size={30}/>
                    </div>




                      {/* Mobile menu */}
                    <div className={`bg-black text-white absolute w-full h-[22rem] rounded-b-xl shadow-xl duration-300   z-[10000] flex flex-col items-center  md:hidden left-0 ${nav ? 'top-0' : 'top-[-600%] '}`}>

                      <div className='w-full p-3 flex items-center  justify-between'>
                      <h2 className='font-bold text-2xl'> Handy<span className='text-yellow-400'>.Net</span></h2>

                      <div onClick={()=>setNav(!nav)}>
                        <SidebarClose size={30}/>
                      </div>
                      </div>

                      <hr />

                      <div className='flex flex-col gap-y-5 mt-5 text-lg'>
                      {
                        navLinks.map((item,index)=>(
                          <a className='hover:border-b  hover:border-yellow-400 hover px-2  ' key={index} href={item.link} onClick={()=>setNav((prev)=>!prev)}>{item.name}</a>
                        ))
                      }
                    </div>


                    <div className='flex flex-row mt-6  gap-x-7'>
                      {
                        socialMedia.map((item,index)=>(
                          <a className='bg-black p-1 rounded-full text-white' key={index} href={item.link} onClick={()=>setNav((prev)=>!prev)}>{item.icon}</a>
                        ))
                      }
                    </div>
                      

                    </div>
                </div>
      </div>

    </nav>
  )
}

export default Navbar