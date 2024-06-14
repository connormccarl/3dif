import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-white rounded-lg shadow-md my-6">
        <div data-hs-carousel='{
            "loadingClasses": "opacity-0"
          }' className="relative">
          <div className="hs-carousel relative overflow-hidden w-full min-h-[500px] md:min-h-80 bg-white rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              <div className="hs-carousel-slide">
                <div className="justify-center h-full grid grid-cols-1 sm:grid-cols-6">
                  <div className="col-span-4">
                    <img src="/images/carousel/carousel1.jpg" />
                  </div>
                  <div className="col-span-2 py-2 px-4">
                    <p className="text-3xl mb-2">Why 3DiF</p>
                    <p className="text-center">Inspiring Life / Game Changers through Vision, Alignment &amp; Execution.<br/>&quot;Our Word is Our Bond&quot;</p>
                  </div>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="justify-center h-full grid grid-cols-1 sm:grid-cols-6">
                  <div className="col-span-4">
                    <img src="/images/carousel/carousel2.jpg" />
                  </div>
                  <div className="col-span-2 py-2 px-4">
                    <p className="text-3xl mb-2">Why We Serve</p>
                    <ul className="list-square list-outside ml-5">
                      <li>Be game changers with a servant&apos;s heart</li>
                      <li>Be Accountable for Self, Process, Team, Stakeholders, Clients, Employees, Community, and Country</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="justify-center h-full grid grid-cols-1 sm:grid-cols-6">
                  <div className="col-span-4">
                    <img src="/images/carousel/carousel3.jpg" />
                  </div>
                  <div className="col-span-2 py-2 px-4">
                    <p className="text-3xl mb-2">What We Serve</p>
                    <p className="font-bold">Our Core Capabilities Today</p>
                    <ul className="list-square list-outside ml-5">
                      <li>Human Capital Service</li>
                      <li>Administrative &amp; Back Office Support</li>
                      <li>Training</li>
                      <li>IT Support</li>
                      <li>Project Management</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hs-carousel-slide">
                <div className="justify-center h-full grid grid-cols-1 sm:grid-cols-6">
                  <div className="col-span-4">
                    <img src="/images/carousel/carousel4.jpg" />
                  </div>
                  <div className="col-span-2 py-2 px-4">
                    <p className="text-3xl mb-2">Who We Serve</p>
                    <ul className="list-square list-outside ml-5">
                      <li>Top 100 Prime Contractors</li>
                      <li>Federal and Civilian Agencies</li>
                      <li>Mid to Large Size Businesses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-[#002060] hover:text-[#D4B251] rounded-s-lg">
            <span className="text-2xl" aria-hidden="true">
              <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-[#002060] hover:text-[#D4B251] rounded-e-lg">
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>

          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
            <span className="hs-carousel-active:bg-[#002060] hs-carousel-active:border-[#002060] size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-[#002060] hs-carousel-active:border-[#002060] size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-[#002060] hs-carousel-active:border-[#002060] size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            <span className="hs-carousel-active:bg-[#002060] hs-carousel-active:border-[#002060] size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
        <div className="flex flex-row gap-5">
          <Image src="/images/certs/HUBZone_Certified.png" alt="" width={100} height={50}  />
          <Image src="/images/certs/8a_Certified.png" alt="" width={100} height={50}  />
        </div>
        <div className="flex flex-row gap-5 items-center">
          <Image src="/images/certs/WOSB_Certified.png" alt="" width={100} height={50}  />
          <Image src="/images/SDVOSB-CVE.png" alt="" width={100} height={50} className='max-h-24' />
        </div>
      </div>
    </main>
  );
}
