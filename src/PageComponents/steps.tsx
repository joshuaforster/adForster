export default function Steps() {
  return (
    <div className="overflow-hidden dark:bg-gray-900 bg-white py-12 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">ONE TO ONE LEARNING LIKE NO OTHER</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-white">
              SHAPING THE NEXT GENERATION OF PERSONAL TRAINING COURSES
            </p>
            <p className="mt-6 text-base leading-7 dark:text-white text-gray-600">
              At Integrity, we take pride in giving the best possible experience by preparing our students to enter the fitness industry confidently and ready to thrive. Our team brings the course to life with plenty of professional experience and real, applicable tips and tricks that they have picked up over the years.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-white">
              We look forward to helping you shape a new career path.
            </p>
            <div className="mt-10 flex">
              <a
                style={{ backgroundColor: '#CE1A1B' }}
                href="www.google.com"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join our team <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="images/harryparis.png"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover border dark:border-white"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="images/IMG_1456.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover border dark:border-white"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="images/harry.png"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover border dark:border-white"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="images/IMG_1462.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover border dark:border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

