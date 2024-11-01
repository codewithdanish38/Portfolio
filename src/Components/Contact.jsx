import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Navbar from '../Components/Navbar';
import axios from 'axios';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      company: data.company,
      email: data.email,
      "first-name": data["first-name"],
      "last-name": data["last-name"],
      message: data.message,
      phone: data.phone,
    };

    try {
      await axios.post("https://getform.io/f/byvvvjma", userinfo);
      alert("Your message has been sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="pl-20"></div>
      <div>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
            <p className="mt-2 text-lg text-gray-600">Let’s make Technologies.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} action="https://getform.io/f/byvvvjma" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <input
                  id="first-name"
                  {...register("first-name", { required: "First name is required" })}
                  type="text"
                  autoComplete="given-name"
                  className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm focus:ring-2 sm:text-sm"
                />
                {errors["first-name"] && <span>{errors["first-name"].message}</span>}
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <input
                  id="last-name"
                  {...register("last-name", { required: "Last name is required" })}
                  type="text"
                  autoComplete="family-name"
                  className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm focus:ring-2 sm:text-sm"
                />
                {errors["last-name"] && <span>{errors["last-name"].message}</span>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                  Company
                </label>
                <input
                  id="company"
                  {...register("company", { required: "Company name is required" })}
                  type="text"
                  className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm focus:ring-2 sm:text-sm"
                />
                {errors.company && <span>{errors.company.message}</span>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  autoComplete="email"
                  className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm focus:ring-2 sm:text-sm"
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
                  Phone number
                </label>
                <input
                  id="phone-number"
                  {...register("phone", { required: "Phone number is required" })}
                  type="tel"
                  autoComplete="tel"
                  className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm focus:ring-2 sm:text-sm"
                />
                {errors.phone && <span>{errors.phone.message}</span>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm focus:ring-2 sm:text-sm"
                />
                {errors.message && <span>{errors.message.message}</span>}
              </div>
              
              <div className="flex items-center gap-4 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="rounded bg-gray-200 shadow-sm focus:ring-2"
                />
                <label className="text-sm text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <Link to='/'>
        <button className="btn btn-secondary ml-40">Home</button>
      </Link>
    </div>
  );
}
