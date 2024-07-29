import React from 'react'

const AboutUs = () => {
  return (
    <main>
      <div className='flex justify-center mb-6 text-center'>
        <div>
            <p className='pageTitle'>About Us</p>
            <span className='text-[#002060] font-bold italic'>3DiF Human Capital Integrator, Professional, Technical and Training Services dedicated to supporting federal and prime contractors.</span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
        <div className='md:col-span-2'>
          <div className='italic text-center text-base mb-5'>
            Our Foundation is built on Managing Self, Emotion, Faith, Hope & Love - Human Dignity in the Marketplace.
          </div>
          <div className='italic mb-2'>
            The founders dedicate 3DiF to grow by way of Biblical Principles through the practices of these virtues:
          </div>
          <p>
            <b><span className="bigD">D</span><span className='text-[#002060]'>epth:</span></b> We believe in holding ourselves accountable first. <br/><i>....&quot;After we overcome, Joy comes in the morning.&quot;</i>
          </p>
          <p>
            <b><span className="bigD">D</span><span className='text-[#002060]'>iligence:</span></b> We believe that changing the way we think changes the way we see.  Through perseverance we overcome conflicts and develop the emotional intelligence necessary to develop responsible, unbiased solutions worthy of our clients&apos; expectations.<br/><i>.....&quot;Iron sharpens Iron.&quot;</i>
          </p>
          <p>
            <b><span className="bigD">D</span><span className='text-[#002060]'>evotion:</span></b> We believe in building a rewarding and stimulating work environment for our employees, who desire to become better versions of themselves.  In this way, we devote ourselves to providing the best client service possible in the marketplace.<br/><i>....&quot;Ask then Seek, Knock, and You may Find.&quot;</i>
          </p>
        </div>
        <div className='md:col-span-4 md:border-l-2 border-[#C5B358] md:pl-4'>
          <p>
            3DiF is a resilient, purpose-driven, trust-based emerging Small Business with the following Set-Aside certifications:  SDVOSB-CVE, SBA-Certified WOSB, {/*SBA-Certified HUBZone,*/} 8(a) SBA-Certified, and SDB.  We focus on delivering top-quality performance and we champion brutal honesty, authenticity, identity, accountability, and transparency in the service of our clients. We hold ourselves accountable and we respect the virtues of valuing self, people, process, technology, and teamwork.
          </p>
          <p className='mt-2'>
            We are proven United States of America military service veterans, agile and transformational business leaders, innovators, solution providers, project and task managers and teams who strive to conform to our clients&apos; requirements effectively, efficiently, and succinctly on every engagement.
          </p>
          <p id="purpose" className='text-2xl mt-3 mb-2 text-[#002060] font-bold'>Purpose</p>
          <p>
            We look forward to your partnership in support of joining 3DiF&apos;s mission of reimagining a quantum work culture that is stimulating and rewarding through managing self, hope, faith, and love for purposed-trust-based employees, stakeholders, and clients in Human Capital, Technology, Administration, and Training.
          </p>
          <p className='text-2xl mt-3 mb-2 text-[#002060] font-bold'>Mission</p>
          <p>
            Nurture, develop and grow future purpose-, performance-,and trust-based employees and stakeholders who embrace the process of becoming the very best version of themselves to grow professionally in their careers across Human Capital, Technology, Administration, and Training to create a stimulating and rewarding working environment.
          </p>
          <p className='text-2xl mt-3 mb-2 text-[#002060] font-bold'>Vision</p>
          <p>
            3DiF&apos;s vision is to pioneer a reimagined work culture that is stimulating and rewarding through managing self, hope, faith, and love for multi-faceted, multi-generational and multi-dimensional, purposed-trust-based employees, stakeholders, and clients.
          </p>
        </div>
      </div>
    </main>
  )
}

export default AboutUs