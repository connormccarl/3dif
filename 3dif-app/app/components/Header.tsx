import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MenuBar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#002060] text-xl font-sans font-normal">
        <nav className="w-full mx-auto pe-4 md:pe-6 lg:pe-8" aria-label="Global">
            <div className="relative sm:flex sm:items-center">
                <div className="flex items-center justify-between">
                    <Link className="flex-none text-xl font-semibold" href="/">
                        <Image src="/3DiF-RightTri.png" alt="3DiF logo" width={275} height={100} />
                    </Link>
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg bg-white shadow-sm disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-columns" aria-controls="navbar-collapse-columns" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                </div>

                <div id="navbar-collapse-columns" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block text-white">
                    <div className='text-center text-[#D4B251] text-base italic ms-20 hidden md:block'>3DiF....a pioneer in reimagined, rewarding and stimulating work culture in Human Capital, Technology, Administration and Training</div>
                    <div className="flex flex-col gap-y-3 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] ">
                            <button type="button" className="p-3 flex items-center w-full  hover:text-[#002060] hover:bg-white rounded-lg">
                                Who We Are
                                <svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>
                            <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-auto sm:w-48 bg-[#002060] sm:shadow-md rounded-lg py-2 sm:px-2">
                                <div className="flex flex-col">
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 sm:ps-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/">
                                        Home
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 sm:ps-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/aboutus">
                                        About Us
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 sm:ps-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/employeewall">
                                        Employee Wall
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] ">
                            <button type="button" className="p-3 flex items-center w-full hover:text-[#002060] hover:bg-white rounded-lg">
                                What We Do
                                <svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-auto end-0 sm:w-72 bg-[#002060] sm:shadow-md rounded-lg py-2 sm:px-2">
                                <div className="flex flex-col">
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 sm:ps-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/">
                                        What We Do
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 sm:ps-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/aboutus">
                                        Capabilities Statement
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 sm:ps-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/employeewall">
                                        Past & Present Performance
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 sm:ps-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/employeewall">
                                        Our Clients
                                    </Link>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 ps-8 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/employeewall">
                                        Communities We Support
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='[--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]'>
                            <Link className="flex items-center p-3 rounded-lg hover:text-[#002060] hover:bg-white focus:ring-2 focus:ring-blue-500" href="/">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default MenuBar