import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';
import './collab.css'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

const Collab = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [agreed, setAgreed] = useState(false)

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Coolabration" prevLocation={prevLocation} />
      <div className="pb-10">
      <h1 className=" text-base text-lightText mb-2 pb-14">
          <span className="text-primeColor font-semibold text-3xl text-center pt-10 text-center justify-center">To work with us</span>{" "} <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
        </h1>
      <section className="container pt-3 mb-3">
        <div className='row justify-content-center'>
          <div className="row pt-5 mt-30">
            <div className="customer-card col-lg-4 col-sm-6 mb-30 pb-20">
              <a className="card" href="#">
                <div className="diamour box-shadow rounded-circle mx-auto" style={{ width: '90px', height: '90px', marginTop: '-45px' }}></div>
                <div className="card-body text-center pb-1">
                  <h3 className="card-title pt-1" style={{ color: '#01321F' }}>Be YOURSELF</h3>
                  <p className="card-text text-sm" style={{ color: '#01321F' }}>We work with people who are themselves, people who bind other people to them through their character. We need people on our side who work for our values.</p>
                </div>
              </a>
            </div>
            <div className="customer-card col-lg-4 col-sm-6 mb-30 pb-20">
              <a className="card" href="#">
                <div className="exhange box-shadow rounded-circle mx-auto" style={{ width: '90px', height: '90px', marginTop: '-45px' }}></div>
                <div className="card-body text-center pb-4">
                  <h3 className="card-title pt-1" style={{ color: '#01321F' }}>VALUES</h3>
                  <p className="card-text text-sm" style={{ color: '#01321F' }}>Our values are based on honesty, humanity, openness and respect. We not only meet our customers with these values, but also our employees, producers and everyone who works with ZODIAQUE. You don't get far alone, together you can move mountains.</p>
                </div>
              </a>
            </div>
            <div className="customer-card col-lg-4 col-sm-6 mb-30 pb-10 ">
              <a className="card" href="#">
                <div className="refund box-shadow rounded-circle mx-auto" style={{ width: '90px', height: '90px', marginTop: '-45px' }}></div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1" style={{ color: '#01321F' }}>POSSIBILITIES</h3>
                  <p className="card-text text-sm" style={{ color: '#01321F' }}>With us you have opportunities to discover the world, people, cultures and unique products. Working with ZODIAQUE means more than being part of a team, influencer or brand ambassador.</p>
                </div>
              </a>
            </div>
            <div className='col-lg-2'></div>
          
           
          </div>
        </div>
      </section>

      {/*  */}

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Lets Collab With us </h2>
        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>


        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collab;