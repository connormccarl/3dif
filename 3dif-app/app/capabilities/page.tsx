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
                <div className='flex-row float-start gap-2 hidden md:flex'>
                        <Image src="/images/certs/SDB_Self_Certified.png" alt="" width={75} height={40} />
                        {/*<Image src="/images/certs/HUBZone_Certified.png" alt="" width={75} height={90}  />*/}
                        <Image src="/images/certs/8a_Certified.png" alt="" width={75} height={90}  />
                        <Image src="/images/certs/WOSB_Certified.png" alt="" width={75} height={90}  />
                        <Image src="/images/SDVOSB-CVE-white-circle.png" alt="" width={100} height={80}  />
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
                <div className="flex justify-center text-center"><i><span className="bigD">&nbsp;</span>Dedicated to Serving our Federal, Civilian, &amp; Commercial Customers since 2016</i></div>
            </div>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Overview</p>
            </div>
            <p><Image className='float-start me-3 mt-1'src="/images/handshake.jpg" alt="" width={400} height={160}  />3DiF is a professional service and technology human capital integrator. We started providing human capital and professional services in 2016. We are headquartered in Reston, Virginia. 3DiF is an established, resilient, agile SDVOSB-CVE, WOSB, SDB, {/*HUBZone,*/} 8(a) provider of human capital, administrative, training, and technology services to government end clients. We focus on our clients by pioneering top-quality performers, and we champion honesty, authenticity, identity, accountability, and transparency with our employees and customers. To date, our foundational and grass-root economic growth focuses on human dignity in the marketplace, employees, stakeholders, clients, partners, and vendors. Within the last five years, our clients&apos; list includes the Department of Veteran&apos;s Affairs, Department of Education, Department of the Interior, and Department of Homeland Security.</p>
        </div>
        <div className=''>
            <div className='flex justify-center'>
                <p className='sectionTitle mb-2'>Services Provided from 2016 to Present</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <p>
                        <b>Human Capital — 541612</b>
                        <i>(Subcontractor)</i><br/>
                        <i>Personnel, Payroll and Benefits Operational Support</i>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li>Payroll Support</li>
                        <li>Benefits Support</li>
                        <li>Personnel Action Support</li>
                        <li>Employee Onboarding/Orientation</li>
                        <li>Customer Support Call Center</li>
                        <li>New Hire Support</li>
                        <li>Orientation Support</li>
                        <li>Workflow Development</li>
                    </ul>
                </div>
                <div>
                    <p>
                        <b>Administrative — 541611 / 561110</b>
                        <i>(Subcontractor)</i><br/>
                        <i>Project and Administrative Management</i>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li>Strategic Planning</li>
                        <li>Administrative Support</li>
                        <li>Logistics Support</li>
                        <li>Document Management</li>
                        <li>Recruiting and Hiring</li>
                    </ul>
                    <p className='mt-5'>
                        <b>Court Reporting — 561492</b>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li>Virtual Court Reporting Services</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <p>
                        <b>VAR Partner - Training Solutions - 611420/611430</b><br/>
                        <i>Live virtual instructor led; Self-paced on-demand; Private on-site</i>
                    </p>
                    <ul className='list-square list-inside ms-7'>
                        <li>DoD directives 8570/8140 Certification Training</li>
                        <li>NIST NICE Certification Training</li>
                        <li>Business Skills and Process Improvement</li>
                        <li><b>Brands/Products:</b> Adobe, Agile, AWS, Cisco, Citrix, CompTIA, DevOps, EC-Council, ITIL, ISC2, ISACA, Leadership & Prof. Dev., Microsoft Office, Microsoft Technical, PMI, Scrum, Tableau, VMWare</li>
                        <li><b>Training by Job Roles:</b> Business Analysis, Cloud, Cybersecurity, Data & Analytics, DevOps, Human Resources, Networking, Programming, Project Management, Service Desk, Service Management, Virtualization</li>
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
                    <p className='mb-2 font-bold'>From Clients:</p>
                    <ul className='list-square list-inside ms-7'>
                        <li>3DiF is easy to work with...</li>
                        <li>3DiF employees are accountable and productive...</li>
                        <li>We love working with 3DiF</li>
                        <li>We value our shared joint servant / transformation company ETHOS...</li>
                    </ul>
                </div>
                <div className='grid-span-2'>
                    <Image src="/images/fleur_de_lis.jpg" alt="" width={200} height={50} className='mx-auto' />
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
            <span className='mt-2 flex justify-center text-center'>
                <span>
                    <b>A team is not a div of people who work together. A team is a div of people who trust each other.</b> - <i>Simon Sinek</i>
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
