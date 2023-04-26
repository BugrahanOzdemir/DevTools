import React from "react"

import NavbarData from "./NavbarData"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className=' text-white'>
        <div className='fixed flex flex-col top-0 left-0 w-64 h-full border-r border-primary-focus'>
          <div className='flex items-center justify-center h-14 border-b border-primary-focus bg-primary'>
            <div>
              Dev Tools by <span className='font-bold'>Buğrahan Özdemir</span>
            </div>
          </div>
          <div className='overflow-y-auto overflow-x-hidden flex-grow'>
            <ul className='flex flex-col py-4 space-y-1'>
              {/* Home Page */}
              <Link
                to='/'
                className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-gray-50 hover:text-gray-50 border-l-4 border-transparent hover:border-accent pr-6 transition duration-500'
              >
                <span className='inline-flex justify-center items-center'>
                  <i className='bi bi-house-fill inline-flex justify-center items-center ml-4' />
                </span>
                <span className='ml-2 text-base tracking-wide truncate'>
                  Home Page
                </span>
              </Link>

              {/* Tools */}
              <li className='px-4'>
                <div className='flex flex-row items-center h-8'>
                  <div className='text-md font-light tracking-wide text-gray-300'>
                    Converter
                  </div>
                </div>
              </li>

              {/* Converters */}
              {NavbarData.map((item, index) => {
                if (item.category == "converter") {
                  return (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-gray-50 hover:text-gray-50 border-l-4 border-transparent hover:border-accent pr-6 transition duration-500'
                      >
                        <span className='inline-flex justify-center items-center ml-0'>
                          <i
                            className={
                              item.icon +
                              " inline-flex justify-center items-center ml-4"
                            }
                          />
                        </span>
                        <span className='ml-2 text-base tracking-wide truncate'>
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  )
                }
              })}

              {/* Web */}
              <li className='px-4'>
                <div className='flex flex-row items-center h-8'>
                  <div className='text-md font-light tracking-wide text-gray-300'>
                    Web
                  </div>
                </div>
              </li>

              {NavbarData.map((item, index) => {
                if (item.category == "web") {
                  return (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-gray-50 hover:text-gray-50 border-l-4 border-transparent hover:border-accent pr-6 transition duration-500'
                      >
                        <span className='inline-flex justify-center items-center ml-0'>
                          <i
                            className={
                              item.icon +
                              " inline-flex justify-center items-center ml-4"
                            }
                          />
                        </span>
                        <span className='ml-2 text-base tracking-wide truncate'>
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
