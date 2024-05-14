import React from 'react';
import { Container, Image, Group, SimpleGrid, Center, Title, Grid } from '@mantine/core';

import Layout from '../components/Layout';
import classes from './capabilities.module.css';

export default function capabilities() {
  return (
    <Layout>
        <Container>
            <div className={classes.topBar}>
                <span className={classes.topLeftImage}>
                    <Image src="./3DiF-RightTri.png" />
                </span>
                <div className={classes.topRightBar}>
                    <div className={classes.capabilitiesTopCerts}>
                        <Group>
                            <Image src="./certs/SDB_Self_Certified.png" />
                            <Image className="white-border-1" src="./certs/HUBZone_Certified.png" />
                            <Image className="white-border-1" src="./certs/8a_Certified.png" />
                            <Image className="white-border-1" src="./certs/WOSB_Certified.png" />
                            <Image className="sdvosb" src="./SDVOSB-CVE-white-circle.png" />
                        </Group>
                    </div>
                    <div className={classes.capabilitiesTopBarContact}>
                        <p>CAGE Code: 6E8B8<br />
                            D&amp;B: 968291000<br />
                            www.3dif.co<br />
                            info@3dif.co
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${classes.topBarLine} row`}>
                <div className="col-xs-12 col-sm-5 col-md-4">
                    <p><span className={classes.bigD}>D</span>epth | <span className={classes.bigD}>D</span>iligence | <span className={classes.bigD}>D</span>evotion</p>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-8">
                    <center className=""><i><span className={classes.bigD}>&nbsp;</span>Dedicated to Serving our Federal, Civilian, &amp; Commercial Customers since 2016</i></center>
                </div>
            </div>
            <div className='row'>
                <Center>
                    <Title order={3} className='sectionTitle mb-2'>Overview</Title>
                </Center>
                <p><Image className='float-start me-3 mt-2' w={400} src="./handshake.jpg" />3DiF is a professional service and technology human capital integrator. We started providing human capital and professional services in 2016. We are headquartered in Reston, Virginia. 3DiF is an established, resilient, agile SDVOSB-CVE, WOSB, SDB, HUBZone, 8(a) provider of human capital, administrative, training, and technology services to government end clients. We focus on our clients by pioneering top-quality performers, and we champion honesty, authenticity, identity, accountability, and transparency with our employees and customers. To date, our foundational and grass-root economic growth focuses on human dignity in the marketplace, employees, stakeholders, clients, partners, and vendors. Within the last five years, our clients' list includes the Department of Veteran's Affairs, Department of Education, Department of the Interior, and Department of Homeland Security.</p>
            </div>
            <div className='row'>
                <Center>
                    <Title order={3} className='sectionTitle mb-2'>Services Provided from 2016 to Present</Title>
                </Center>
                <SimpleGrid cols={{ base: 1, md: 2 }}>
                    <div>
                        <p>
                            <b>Human Capital — 541612</b>
                            <i>(Subcontractor)</i><br/>
                            <i>Personnel, Payroll and Benefits Operational Support</i>
                        </p>
                        <ul>
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
                        <ul>
                            <li>Strategic Planning</li>
                            <li>Administrative Support</li>
                            <li>Logistics Support</li>
                            <li>Document Management</li>
                            <li>Recruiting and Hiring</li>
                        </ul>
                        <p>
                            <b>Court Reporting — 561492</b>
                        </p>
                        <ul>
                            <li>Virtual Court Reporting Services</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            <b>VAR Partner - Training Solutions - 611420/611430</b><br/>
                            <i>Live virtual instructor led; Self-paced on-demand; Private on-site</i>
                        </p>
                        <ul>
                            <li>DoD directives 8570/8140 Certification Training</li>
                            <li>NIST NICE Certification Training</li>
                            <li>Business Skills and Process Improvement</li>
                            <li><b>Brands/Products:</b> Adobe, Agile, AWS, Cisco, Citrix, CompTIA, DevOps, EC-Council, ITIL, ISC2, ISACA, Leadership & Prof. Dev., Microsoft Office, Microsoft Technical, PMI, Scrum, Tableau, VMWare</li>
                            <li><b>Training by Job Roles:</b> Business Analysis, Cloud, Cybersecurity, Data & Analytics, DevOps, Human Resources, Networking, Programming, Project Management, Service Desk, Service Management, Virtualization</li>
                        </ul>
                    </div>
                </SimpleGrid>
            </div>
            <div className='row'>
                <Center>
                    <Title order={3} className='sectionTitle mb-2'>Who We Work With</Title>
                </Center>
                <SimpleGrid cols={{ base: 1, md: 2 }}>
                    <div>
                        <p>
                            <b>Clients</b>
                        </p>
                        <ul>
                            <li className='mb-1'><Image src="./client-logos/dept-veterans-affairs.png" className={classes.clientImage} />Department of Veterans Affairs</li>
                            <li className='mb-1'><Image src="./client-logos/bureau-land-management.png" className={classes.clientImage} />Bureau of Land Management</li>
                            <li className='mb-1'><Image src="./client-logos/dept-education.png" className={classes.clientImage} />Department of Education (sub)</li>
                            <li className='mb-1'><Image src="./client-logos/dept-homeland-security.png" className={classes.clientImage} />Department of Homeland Security (sub)</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            <b>Professional Community Involvement</b>
                        </p>
                        <ul>
                            <li>AFCEA - Tidewater Chapter</li>
                            <li>AFCEA Tidewater Integrated Combat Symposium</li>
                            <li>Sponsor STEM</li>
                        </ul>
                    </div>
                </SimpleGrid>
            </div>
            <div className='row'>
                <Center>
                    <Title order={3} className='sectionTitle mb-2'>Testimonials</Title>
                </Center>
                <Grid cols={{ base: 1, md: 3 }}>
                    <Grid.Col span="auto">
                        <Title order={4} className='mb-2'>From Clients:</Title>
                        <ul>
                            <li>3DiF is easy to work with...</li>
                            <li>3DiF employees are accountable and productive...</li>
                            <li>We love working with 3DiF</li>
                            <li>We value our shared joint servant / transformation company ETHOS...</li>
                        </ul>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image src="./fleur_de_lis.jpg" />
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <Title order={4} className='mb-2'>From Employees:</Title>
                        <ul>
                            <li>My co-workers &amp; the nurturing manner in which the company handles its employees.</li>
                            <li>The opportunity to upskill and grow</li>
                            <li>How valued the Employees are in the company</li>
                            <li>Becoming a better version of self...</li>
                        </ul>
                    </Grid.Col>
                </Grid>
                <p><b>A team is not a group of people who work together. A team is a group of people who trust each other.</b> - <i>Simon Sinek</i></p>
            </div>
            <div className={classes.capabilitiesBottom}>
                <Center><Image src="./3dif-big.jpg" /></Center>
                <p>A professional services &amp; technology human capital integrator.</p>
                <Center>
                    <Image className={classes.capabilitiesBottomImage} src="./certs/SDB_Self_Certified.png" />
                    <Image className={classes.capabilitiesBottomImage} src="./certs/HUBZone_Certified.png" />
                    <Image className={classes.capabilitiesBottomImage} src="./certs/8a_Certified.png" />
                    <Image className={classes.capabilitiesBottomImage} src="./certs/WOSB_Certified.png" />
                    <Image className={classes.capabilitiesBottomImageLast} src="./SDVOSB-CVE.png" />
                </Center>
            </div>
        </Container>
    </Layout>
  )
};
