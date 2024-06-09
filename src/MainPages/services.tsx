

import { CheckIcon } from '@heroicons/react/20/solid';

const Services: React.FC = () => {

  return (
    <section className='dark:bg-gray-900'>
        <div className="mx-auto max-w-7xl py-12 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-customRed">Pricing</h2>
        <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Pricing plans for teams of&nbsp;all&nbsp;sizes
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
        We offer both monthly and full term payment options
      </p>
      <div className="mt-16 flex justify-center">
        <fieldset aria-label="Payment frequency">
          <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-gray-700">
            <button className="bg-customRed text-white cursor-pointer rounded-full px-2.5 py-1">Monthly</button>
            <button className="text-gray-500 dark:text-gray-400 cursor-pointer rounded-full px-2.5 py-1">Annually</button>
          </div>
        </fieldset>
      </div>
      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div className="ring-1 ring-gray-200 dark:ring-gray-700 rounded-3xl p-8 xl:p-10">
          <div className="flex items-center justify-between gap-x-4">
            <h3 id="tier-freelancer" className="text-gray-900 dark:text-white text-lg font-semibold leading-8">
              Freelancer
            </h3>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            The essentials to provide your best work for clients.
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$15</span>
            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/month</span>
          </p>
          <a
            href="www.google.com"
            aria-describedby="tier-freelancer"
            className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-customRed ring-1 ring-inset ring-customRed hover:ring-customRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customRed"
          >
            Buy plan
          </a>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              5 products
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Up to 1,000 subscribers
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Basic analytics
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              48-hour support response time
            </li>
          </ul>
        </div>
        <div className="ring-2 ring-customRed rounded-3xl p-8 xl:p-10">
          <div className="flex items-center justify-between gap-x-4">
            <h3 id="tier-startup" className="text-customRed text-lg font-semibold leading-8">
              Startup
            </h3>
            <p className="rounded-full bg-customRed/10 px-2.5 py-1 text-xs font-semibold leading-5 text-customRed">
              Most popular
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            A plan that scales with your rapidly growing business.
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$30</span>
            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/month</span>
          </p>
          <a
            href="www.google.com"
            aria-describedby="tier-startup"
            className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 bg-customRed text-white shadow-sm hover:bg-customRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customRed"
          >
            Buy plan
          </a>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              25 products
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Up to 10,000 subscribers
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Advanced analytics
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              24-hour support response time
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Marketing automations
            </li>
          </ul>
        </div>
        <div className="ring-1 ring-gray-200 dark:ring-gray-700 rounded-3xl p-8 xl:p-10">
          <div className="flex items-center justify-between gap-x-4">
            <h3 id="tier-enterprise" className="text-gray-900 dark:text-white text-lg font-semibold leading-8">
              Enterprise
            </h3>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Dedicated support and infrastructure for your company.
          </p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$60</span>
            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/month</span>
          </p>
          <a
            href="www.google.com"
            aria-describedby="tier-enterprise"
            className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-customRed ring-1 ring-inset ring-customRed hover:ring-customRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customRed"
          >
            Buy plan
          </a>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10">
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Unlimited products
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Unlimited subscribers
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Advanced analytics
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              1-hour, dedicated support response time
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-customRed" aria-hidden="true" />
              Custom reporting tools
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  )
};

export default Services;