import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SiteMap = () => {
  return (
    <main>
        <div className='flex justify-center'>
            <p className='pageTitle mb-2'>Site Map</p>
        </div>
        <div className='flex justify-center text-xl'>
            <ul>
                <li>
                    <Link href="/">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Home
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Why Us
                    </Link>
                </li>
                <li>
                    <Link href="/capabilities">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Capabilities
                    </Link>
                </li>
                <li>
                    <Link href="/careers">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Careers
                    </Link>
                </li>
                <li>
                    <Link href="/clients">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Clients
                    </Link>
                </li>
                <li>
                    <Link href="/communitysupport">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Community Support
                    </Link>
                </li>
                <li>
                    <Link href="/contactus">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="/pastandpresentperformance">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Past and Present Performance
                    </Link>
                </li>
                <li>
                    <Link href="/privacypolicy">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/sitemap">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Site Map
                    </Link>
                </li>
                <li>
                    <Link href="/termsofuse">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> Terms of Use
                    </Link>
                </li>
                <li>
                    <Link href="/whatwedo">
                        <Image src="/images/fleur_de_lis.jpg" alt="Fleur de Lis" width={24} height={10} className='inline' /> What We Do
                    </Link>
                </li>
            </ul>
        </div>
    </main>
  )
}

export default SiteMap