"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface formData {
  firstName: string,
  lastName: string,
  email: string,
  title: string,
  company: string,
  companyUrl: string,
  phone: string,
  preferredContact: string,
  interest: [],
  message: string
}

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: formData) => {
    alert(JSON.stringify(data));
  }

  return (
    <main>
      <div className='flex justify-center'>
          <p className='pageTitle mb-2'>Contact Us</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <form className='md:col-span-2'>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-10">
              <h2 className="text-xl font-semibold leading-7">Teaming Inquiry</h2>
              <p className="mt-1 text-base leading-6 text-gray-600">Please provide the information below to explore a teaming relationship with 3DiF.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="firstName" className="block text-lg font-medium leading-6">
                    First Name*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("firstName")}
                      id="firstName"
                      autoComplete="givenName"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="lastName" className="block text-lg font-medium leading-6">
                    Last Name*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("lastName")}
                      id="lastName"
                      autoComplete="familyName"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="email" className="block text-lg font-medium leading-6">
                    Email*
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="title" className="block text-lg font-medium leading-6">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="title"
                      {...register("title")}
                      autoComplete="title"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="company" className="block text-lg font-medium leading-6">
                    Company
                  </label>
                  <div className="mt-2">
                    <input
                      id="company"
                      {...register("company")}
                      autoComplete="company"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="companyUrl" className="block text-lg font-medium leading-6">
                    Company URL
                  </label>
                  <div className="mt-2">
                    <input
                      id="companyUrl"
                      {...register("companyUrl")}
                      autoComplete="companyUrl"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="phone" className="block text-lg font-medium leading-6">
                    Phone Number*
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      {...register("phone")}
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="preferredContact" className="block text-lg font-medium leading-6">
                    Preferred method of contact
                  </label>
                  <div className="mt-2">
                    <select
                      id="preferredContact"
                      {...register("preferredContact")}
                      autoComplete="preferredContact"
                      data-hs-select='{
                        "toggleTag": "<button type=\"button\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative px-4 pe-9 flex text-nowrap cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-lg focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:leading-6",
                        "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                        "optionClasses": "py-2 px-4 w-full text-lg cursor-pointer hover:bg-[#002060] rounded-lg focus:outline-none focus:bg-[#002060] hover:text-white focus:text-white",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-[#D4B251]\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                        "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                      }' className="hidden"
                    >
                      <option>Text</option>
                      <option>Phone</option>
                      <option>Email</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label htmlFor="interest" className="block text-lg font-medium leading-6">
                    Interest
                  </label>
                  <div className="mt-2">
                    <select multiple 
                      id="interest"
                      {...register("interest")}
                      autoComplete="interest"
                      data-hs-select='{
                        "placeholder": "Select multiple options...",
                        "toggleTag": "<button type=\"button\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative px-4 pe-9 flex text-nowrap cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-lg focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#002060] sm:leading-6",
                        "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                        "optionClasses": "py-2 px-4 w-full text-lg cursor-pointer hover:bg-[#002060] rounded-lg focus:outline-none focus:bg-[#002060] hover:text-white focus:text-white",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-[#D4B251]\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                        "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                      }' 
                      className="hidden"
                    >
                      <option value="">Choose</option>
                      <option>General Inquiry</option>
                      <option>VA SDVOSB-CVE</option>
                      <option>SBA Certified 8a</option>
                      {/*<option>SBA Certified HUBZone</option>*/}
                      <option>SBA Certified WOSB</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="message" className="block text-lg font-medium leading-6">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#002060] text-lg sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-x-6">
            <div className='italic mb-6'>
              Prior to submission, please review that all information has been entered correctly.
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#002060] px-20 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#D4B251] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className='md:col-span-1'>
          <div className="text-xl font-semibold leading-7">
            General Contact Information
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              Principal Main Office
            </div>
            <div className='mt-1'>
              Harbour Centre<br/>
              2 Eaton Street, Suite 704<br/>
              Hampton, VA 23669-4055
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              Hours Of Operations - EST
            </div>
            <div className='mt-1'>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Monday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Tuesday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Wednesday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Thursday<br/>
              8:30 - 5:00pm&nbsp;&nbsp;&nbsp;Friday
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              Phone Number
            </div>
            <div className='mt-1'>
              571.341.5060
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              Email
            </div>
            <div className='mt-1'>
              info@3dif.co
            </div>
          </div>
          <div className='my-3'>
            <div className='text-[#002060] font-bold'>
              After Hours Email
            </div>
            <div className='mt-1'>
              inform@3dif.co
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactUs