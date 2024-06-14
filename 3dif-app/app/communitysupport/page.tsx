import React from 'react'
import Image from 'next/image'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'

const CommunitySupport = () => {
  return (
    <main>
        <div className='flex justify-center'>
            <p className='pageTitle mb-2'>The Communities We Serve</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            <div className='hs-tooltip [--trigger:hover] [--placement:bottom] md:[--placement:right] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.marchofdimes.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/MarchOfDimes.jpg" alt="March of Dimes" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">March of Dimes</div>
                        <div>
                            Raises funds for new families and to help ensure all babies get a healthy and happy start.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:bottom] md:[--placement:right] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.stjude.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/St-Jude.jpg" alt="St. Jude" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">St. Jude</div>
                        <div>
                            Endeavors to offer proper care to all children and work to prevent and find cures for pediatric catastrophic diseases.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:bottom] md:[--placement:left] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.worldwildlife.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/WorldWildLife.jpg" alt="The World Wildlife Fund" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">The World Wildlife Fund</div>
                        <div>
                            Works to protect nature, promote conservation, and support the many living things that populate the Earth.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:bottom] md:[--placement:left] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.pinministry.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/PeopleInNeed.png" alt="People In Need Ministry" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">People In Need Ministry</div>
                        <div>
                            Aids the homeless and poor by providing them with food, clothing, shelter, and free healthcare.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:bottom] md:[--placement:right] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.pinecove.com" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/PineCove.jpg" alt="Pine Cove" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">Pine Cove</div>
                        <div>
                            A series of Christian summer camps catered to youths and young adults and focused on giving then fun and insightful experiences and teaching them valuable lessons about Christ.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:bottom] md:[--placement:right] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.covenanthouse.org/donation-options/donate-today" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/CovenantHouse.png" alt="Covenant House" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">Covenant House</div>
                        <div>
                            Provides shelter, food, immediate crisis care, and other services to homeless and runaway youth. Also provides care to homeless youth aged 14–20, designed to transition them out of homelessness into independent adulthood.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:up] md:[--placement:left] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="http://hosa.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/HOSALogo.jpg" alt="HOSA Future Health Professionals" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">HOSA Future Health Professionals</div>
                        <div>
                            Works to promote career opportunities for students in the health industry and improve health care services to all who need it.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:up] md:[--placement:left] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://shrineofstjude.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/StJude.png" alt="The National Shrine of St Jude" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">The National Shrine of St Jude</div>
                        <div>
                            Provide those in need with guidance, support, and prayer to inspire and encourage them the their hardships.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:up] md:[--placement:right] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://afcea-tidewater.org/" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/AFCEA-Tidewater.png" alt="The Tidewater Chapter" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">The Tidewater Chapter</div>
                        <div>
                            Consists of over 300 military, government, civilian, industry and academia leader in the Joint Base Langley-Eustis and Ft Monroe areas. We have fostered extensive community relations, scholarships, science, and teaching tools and STEM-related endeavors.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:up] md:[--placement:right] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.cancer.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/AmericanCancer.png" alt="The American Cancer Society" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">The American Cancer Society</div>
                        <div>
                            A nationwide voluntary health organization dedicated to eliminating cancer. Established in 1913, the society is organized into six geographical regions of both medical and lay volunteers operating in more the 250 Regional offices throughout the United States.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:up] md:[--placement:left] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.comfortcases.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/ComfortCase.jpg" alt="Comfort Case" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">Comfort Case</div>
                        <div>
                            Inspiring communities to bring dignity and hope to youth in foster care.
                        </div>
                    </div>
                </div>
            </div>
            <div className='hs-tooltip [--trigger:hover] [--placement:up] md:[--placement:left] flex items-center'>
                <div className='hs-tooltip-toggle'>
                    <a href="https://www.autism-society.org" target="_blank" className='block min-h-44 content-center'>
                        <Image src="/images/community-logos/AutismSociety.jpg" alt="Autism Society" width={270} height={50} />
                    </a>
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs border border-gray-100 rounded-lg shadow-md bg-[#002060] text-white p-3 text-center" role="tooltip">
                        <div className="text-xl font-bold mb-2">Autism Society</div>
                        <div>
                            The mission of the National Autism Association is to respond to the most urgent needs of the autism community, providing real help and hope so that all affected can reach their full potential.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default CommunitySupport