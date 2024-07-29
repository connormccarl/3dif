import React from 'react'
import Image from 'next/image'

const WhatWeDo = () => {
  return (
    <main>
      <div className='flex justify-center mb-6'>
        <div>
            <p className='pageTitle'>What We Do</p>
            <span className='text-[#002060] font-bold'>Human Capital, Technology, Administration and Training</span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-base'>
        <div>
          <p className="text-2xl ps-8 pb-2 text-[#002060]">NAICS Codes</p>
          <table>
            <tbody><tr>
              <th className='pe-2'><a href="https://www.naics.com/naics-code-description/?code=541612" target='_blank'>541612</a></th>
              <td><a href="https://www.naics.com/naics-code-description/?code=541612" target='_blank'>Human Resources</a></td>
            </tr><tr>
              <th className='pe-2'><a href="https://www.naics.com/naics-code-description/?code=541611" target='_blank'>541611</a></th>
              <td><a href="https://www.naics.com/naics-code-description/?code=541611" target='_blank'>Administrative Mgmt</a></td>
            </tr><tr>
              <th className='pe-2'><a href="https://www.naics.com/naics-code-description/?code=561110" target='_blank'>561110</a></th>
              <td><a href="https://www.naics.com/naics-code-description/?code=561110" target='_blank'>Office Admin Services</a></td>
            </tr><tr>
              <th className='pe-2'>561410</th>
              <td>Documentation Services</td>
            </tr><tr>
              <th className='pe-2'>561499</th>
              <td>Business Support Services</td>
            </tr><tr>
              <th className='pe-2'>519190</th>
              <td>Other Information Services</td>
            </tr><tr>
              <th className='pe-2'>541519</th>
              <td>Other Computer Related Services</td>
            </tr><tr>
              <th className='pe-2'>541618</th>
              <td>Other Management Services</td>
            </tr><tr>
              <th className='pe-2'>561421</th>
              <td>Call Center Services</td>
            </tr>
          </tbody></table>
        </div>
        <div>
          <video width={640} height={360} autoPlay loop muted className="max-w-full">
            <source src="/video/whatwedo.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <div className='flex justify-center mb-2'>
            <Image alt="Fleur de Lis" src="/images/fleur_de_lis.jpg" width={200} height={50} />
          </div>
          <div className='flex justify-center mb-2'>
            <div className='flex gap-2'>
              <Image alt="8A Certified" src="/images/certs/8a_Certified.png" width={100} height={50} />
              {/*<Image alt="HUBZone Certified" src="/images/certs/HUBZone_Certified.png" width={100} height={50} />*/}
            </div>
          </div>
          <div className='flex justify-center mb-2'>
            <div className='flex gap-2 items-center'>
              <Image alt="WOSB Certified" src="/images/certs/WOSB_Certified.png" width={100} height={50} />
              <Image alt="SDVOSB" src="/images/SDVOSB-CVE.png"  width={100} height={50} className='max-h-24' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WhatWeDo