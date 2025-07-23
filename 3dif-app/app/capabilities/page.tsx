import React from 'react';
import Image from 'next/image';

import styles from './page.module.css';

export default function Capabilities() {
  return (
    <main>
        <div className='bg-[#002060] md:h-28 mt-1 rounded-lg h-[40px]'>
            <span className='float-left h-full'>
                <Image src="/images/3DiF-RightTri.png" alt="" width={310} height={115} className='h-full w-auto' />
            </span>
            <div className='md:pt-1'>
                <div className='flex-row float-start gap-2 flex'>
                        <Image className="hidden lg:flex" src="/images/certs/SDB_Self_Certified.png" alt="" width={75} height={40} />
                        {/*<Image src="/images/certs/HUBZone_Certified.png" alt="" width={75} height={90}  />*/}
                        <Image className="hidden lg:flex" src="/images/certs/8a_Certified.png" alt="" width={75} height={90}  />
                        <Image className="hidden lg:flex" src="/images/certs/WOSB_Certified.png" alt="" width={75} height={90}  />
                        <Image className="hidden lg:flex" src="/images/SDVOSB-CVE-white-circle.png" alt="" width={100} height={80}  />
                        <Image className="align-top h-9 pt-1 md:pt-0" src="/images/awards/gsa.png" alt="" width={150} height={45}  />
                </div>
                <div className='float-end text-white text-sm pr-2'>
                    <p>CAGE Code: 6E8B8<br />
                        D&amp;B: 968291000<br />
                        <span className='hidden md:block'>
                            www.3dif.co<br />
                            info@3dif.co
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 -mt-2'>
            <div className="md:col-span-3">
                <p><span className="bigD">D</span><span className='text-[#002060]'>epth</span> | <span className="bigD">D</span><span className='text-[#002060]'>iligence</span> | <span className="bigD">D</span><span className='text-[#002060]'>evotion</span></p>
            </div>
            <div className="md:col-span-9 -mt-2 md:-mt-1">
                <div className="flex justify-center text-center"><i><span className="bigD">&nbsp;</span>Dedicated to Serving our Federal Government &amp; Prime Contractors</i></div>
                <div className="flex justify-center text-center text-[#002060] font-bold -mt-3"><i><span className="bigD">&nbsp;</span>Human Capital Operation Services Integrator</i></div>
            </div>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Overview</p>
            </div>
            <div><Image className='float-start me-3 mt-1'src="/images/handshake.jpg" alt="" width={400} height={160}  /><b>Why 3DiF and The Benefit— Empowering People. Delivering Results. Advancing Missions.</b><br/>
            At 3DiF, our mission is to deliver exceptional results through an unwavering commitment rooted in <b>depth</b>—self-reflection and intentional growth; <b>diligence</b>—ethical action guided by emotional intelligence; and <b>devotion</b>—purpose-driven resilience for the success of all professional relationships. These values are consistently reflected in our thoughts, words, and actions.
            <br/>
            <div className='my-4'>
                <b>By selecting 3DiF, you benefit from and not limited to:</b>
                <ul className='list-square list-inside ms-6'>
                    <li>A commitment to cultivating a workplace and partnership culture grounded in self-awareness, trust, inclusion, accountability, and a no-nonsense approach to growth and performance excellence.</li>
                    <li>A values-driven team that brings agility, flexibility, authenticity, transparency, and a passion for helping end client—delivering results with efficiency, integrity, and a clear focus on achieving your goals.</li>
                    <li>A responsive, collaborative, and easy-to-work-with leadership team.</li>
                </ul>
            </div>
            <b>Overview: </b> 3DiF is a certified 8(a), Woman-Owned Small Business (WOSB), Service-Disabled Veteran-Owned Small Business (SDVOSB), and Small Disadvantaged Business (SDB), proudly headquartered in downtown Hampton, Virginia.<br/>
            As a lean, mission-focused, high-performance government contracting small business grounded in strong work ethic, 3DiF brings over seven years of experience delivering targeted, holistic, and eco-conscious professionals in federal human capital operation support, administrative support, program management, talent acquisition, and technology services. We serve federal civilian agencies primarily as a subcontractor under teaming agreements and also as a prime, providing services to agencies including the Department of Homeland Security (DHS), Internal Revenue Service (IRS), Department of Education (DoED), and Department of the Interior (DOI).
            </div>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Core Competencies</p>
            </div>
            <div>
                <ul className='list-square list-inside ms-6'>
                    <li>Human Capital Operation Support Services</li>
                    <li>Talent Acquisition including Hiring &amp; Recruiting</li>
                    <li>Administrative, Technical and Technology Enabled Support Services</li>
                    <li>Back Office, Customer Service, Program Management Support Services</li>
                </ul>
            </div>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Differentiators—Our Employees&apos; Success Defines Our Purpose!</p>
            </div>
            <p>
                <ul className='list-square list-inside ms-6'>
                    <li><b>Certified across multiple SBA and VA socio-economic programs</b> — 8(a), WOSB, SDVOSB, and SDB — with a proven track record of delivering results efficiently while fostering a compliant, strong, mission-aligned relationships.</li>
                    <li><b>Demonstrated success and a strong, values-driven partnership</b> supporting mission objectives with agility, reliability, transparency, authenticity, accountability, flexibility, proactive risk assessment, compliance, and measurable outcomes.</li>
                    <li><b>Eco-conscious, people-first service model</b> that prioritizes sustainability, employee engagement, and client satisfaction.</li>
                    <li><b>Our mutually aligned partnership with our employees drives excellence and success through its Five Pillars:— . Self-Reflection. Process. Technology. Communication. Continuous Improvement.</b></li>
                    <li><b>Aligned Purpose-Driven People are our greatest asset.</b> Through a culture grounded in relationship-building, proactive and transparent communication, continuous learning, and personal growth, we elevate performance while cultivating a workplace that values respect, kindness, leadership, teamwork, and a shared commitment to quality and on-time mission delivery.</li>
                </ul>
            </p>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Services Provided from 2016 to Present</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <p>
                        <b>541612 – Human Capital Services (Primary)</b>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li>Payroll Support</li>
                        <li>Benefits Support</li>
                        <li>Personnel Action Support</li>
                        <li>Employee Onboarding/Orientation</li>
                        <li>Customer Support Call Center</li>
                        <li>New Hire, Orientation, Training Support</li>
                        <li>Recruiting &amp; Hiring</li>
                        <li>Workflow Development and Quality Control</li>
                    </ul>
                </div>
                <div>
                    <p>
                        <b>NAIC Codes</b>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li><b>541612 Human Capital (P)</b></li>
                        <li>541611 Administrative Management</li>
                        <li>561110 Office Administrative Services</li>
                        <li>561410 Documentation Services</li>
                        <li>561499 Business Support Services</li>
                        <li>519190 Other Information Services</li>
                        <li>541519 Other Computer Related Services</li>
                        <li>541618 Other Management Services</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <p>
                        <b>541611 – Management &amp; Administrative</b><br/>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li>Project and Program Management</li>
                        <li>Strategic Planning</li>
                        <li>Administrative Support</li>
                        <li>Logistics Support</li>
                        <li>Document Management</li>
                        <li>Clerical</li>
                        <li>Data Analyst</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Who We Work With</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <p>
                        <b>Clients</b>
                    </p>
                    <ul className='ms-7'>
                        <li className='mb-1'><Image src="/images/client-logos/dept-veterans-affairs.png" className={styles.clientImage} alt="" width={100} height={50}  />Department of Veterans Affairs</li>
                        <li className='mb-1'><Image src="/images/client-logos/bureau-land-management.png" className={styles.clientImage} alt="" width={100} height={50}  />Bureau of Land Management</li>
                        <li className='mb-1'><Image src="/images/client-logos/dept-education.png" className={styles.clientImage} alt="" width={100} height={50}  />Department of Education (sub)</li>
                        <li className='mb-1'><Image src="/images/client-logos/dept-homeland-security.png" className={styles.clientImage} alt="" width={100} height={50}  />Department of Homeland Security (sub)</li>
                    </ul>
                </div>
                <div>
                    <p>
                        <b>Professional Community Involvement</b>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li>AFCEA - Tidewater Chapter</li>
                        <li>AFCEA Tidewater Integrated Combat Symposium</li>
                        <li>Sponsor STEM</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Testimonials</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='grid-span-auto'>
                    <p className='mb-2 font-bold'>Employees:</p>
                    <ul className='list-square list-inside ms-7'>
                        <li>“The company is super supportive and focused on my growth at the company.”</li>
                        <li>“I have very much enjoyed working for 3DiF this past year &amp; feel so thankful to be a part of the 3DiF family. It has been one of the most enjoyable work years that I have had &amp; love the team texts we receive throughout the year. It&apos;s very uplifting and always puts a smile on my face. I think team bonding &amp; communication is a very big part of a happy work life. Working remotely, you don&apos;t always get that, but with 3DiF it has been great keeping the team positive &amp; connected.”</li>
                    </ul>
                </div>
                <div className='grid-span-2'>
                    <Image src="/images/fleur_de_lis.jpg" alt="" width={200} height={50} className='mx-auto' />
                </div>
                <div className='grid-span-auto'>
                    <p className='mb-2 font-bold'>Our Government &amp; Prime Customers:</p>
                    <ul className='list-square list-inside ms-7'>
                        <li>“We love working with 3DiF.”</li>
                        <li>“Easy to work with. Leadership is readily available.”</li>
                        <li>“3DiF Employees are productive, accountable, adaptable and flexible.”</li>
                    </ul>
                </div>
            </div>
            <span className='mt-2 flex justify-center text-center'>
                <span>
                    <b>A team is not a group of people who work together. A team is a group of people who trust each other.</b> - <i>Simon Sinek</i>
                </span>
            </span>
        </div>
        <div className={styles.capabilitiesBottom}>
            <div className='flex justify-center'><Image src="/images/3dif-big.jpg" alt="" width={550} height={50}  /></div>
            <p className='my-3'>A professional services &amp; technology human capital integrator.</p>
            <div className='flex justify-center gap-2'>
                <Image className={styles.capabilitiesBottomImage} src="/images/certs/SDB_Self_Certified.png" alt="" width={100} height={50}  />
                {/*<Image className={styles.capabilitiesBottomImage} src="/images/certs/HUBZone_Certified.png" alt="" width={100} height={50}  />*/}
                <Image className={styles.capabilitiesBottomImage} src="/images/certs/8a_Certified.png" alt="" width={100} height={50}  />
                <Image className={styles.capabilitiesBottomImage} src="/images/certs/WOSB_Certified.png" alt="" width={100} height={50}  />
                <Image className={styles.capabilitiesBottomImageLast} src="/images/SDVOSB-CVE.png" alt="" width={100} height={50}  />
            </div>
        </div>
    </main>
  )
};
