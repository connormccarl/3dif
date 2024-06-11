import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div>
                <div className='flex justify-center'>
                    <p className='sectionTitle mb-2'>Our Clients</p>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='text-center m-2'>
                        <a href="https://www.va.gov/" target='_blank'>
                            <Image src="/client-logos/dept-veterans-affairs.png" alt="Department of Veterans Affairs" width={270} height={50} />
                            <p className='mt-2'>Department of Veterans Affairs</p>
                        </a>
                    </div>
                    <div className='text-center m-2'>
                        <a href="https://www.blm.gov/" target='_blank'>
                            <Image src="/client-logos/bureau-land-management.png" alt="Department of the Interior - Bureau of Land Management" width={270} height={50} />
                            <p className='mt-2'>Department of the Interior - Bureau of Land Management</p>
                        </a>
                    </div>
                    <div className='text-center m-2'>
                        <a href="https://www.dhs.gov/" target='_blank'>
                            <Image src="/client-logos/dept-homeland-security.png" alt="Department of Homeland Security" width={270} height={50} />
                            <p className='mt-2'>Department of Homeland Security</p>
                        </a>
                    </div>
                    <div className='text-center m-2'>
                        <a href="https://www.ed.gov/" target='_blank'>
                            <Image src="/client-logos/dept-education.png" alt="Department of Education" width={270} height={50} />
                            <p className='mt-2'>Department of Education</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='flex justify-center'>
                    <p className='sectionTitle mb-2'>Testimonials</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='grid-span-auto'>
                        <p className='mb-2 font-bold'>From Clients:</p>
                        <ul className='list-square list-inside ms-7'>
                            <li>3DiF is easy to work with...</li>
                            <li>3DiF employees are accountable and productive...</li>
                            <li>We love working with 3DiF</li>
                            <li>We value our shared joint servant / transformation company ETHOS...</li>
                        </ul>
                    </div>
                    <div className='grid-span-2 flex items-center'>
                        <Image src="/fleur_de_lis.jpg" alt="" width={200} height={50} className='mx-auto' />
                    </div>
                    <div className='grid-span-auto'>
                        <p className='mb-2 font-bold'>From Employees:</p>
                        <ul className='list-square list-inside ms-7'>
                            <li>My co-workers &amp; the nurturing manner in which the company handles its employees.</li>
                            <li>The opportunity to upskill and grow</li>
                            <li>How valued the Employees are in the company</li>
                            <li>Becoming a better version of self...</li>
                        </ul>
                    </div>
                </div>
                <span className='mt-2 flex text-center'>
                    <span>
                       <b>A team is not a div of people who work together. A team is a div of people who trust each other.</b> - <i>Simon Sinek</i>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Clients