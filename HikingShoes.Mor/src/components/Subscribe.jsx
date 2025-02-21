import React from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

 function Subscribe() {
  return (<div className="relative isolate overflow-hidden bg-stone-950 py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
          <p className="mt-4 text-lg text-gray-300">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
            dolore.
          </p>
        </div>
        <div className="flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-stone-950 shadow-xs hover:bg-stone-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

export default Subscribe;