const people = [
  {
    name: 'Harry Mathews',
    role: 'Co-Founder / CEO',
    imageUrl:
      'images/HARRY-GYM-FLOOR-5-20220124-IFE-TGGNCC046-scaled-pjn1oliqhg8ce89xzv3dus6kv38b3in7bqxpwi9ls8.jpg.webp',
    bio: 'After completing the combined level 2 & 3 Personal Training Diploma, Harry began his career as a self-employed PT at The Gym Group in Norwich. After building his client base and improving his service by specialising in exercise referral. Over the next 5 years, he worked with hundreds of students, finding the same passion for helping people that first attracted him to personal training. He’s now built a team of like-minded individuals around him to continue this passion under a unified company: Integrity Fitness Education.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Paris Mathews',
    role: 'Co-Founder / CEO',
    imageUrl:
      'images/PARIS-GYM-FLOOR-2-20220124-IFE-TGGNCC041-scaled-pjn1efvimwbsxx12az1ieug9s7aix9bm9h5u7vbr0o.jpg.webp',
    bio: 'Paris qualified as a personal trainer and started working in the same gym as Harry. She made a good impression by helping plenty of clients alongside her continued professional development (gaining certificates in spinning and supporting pre and post-natal populations). Harry saw the potential for her to be a great teacher and she exceeded expectations with how she brought the course alive for all of her learners. She’s more motivated than ever to bring the best possible experience here at IFE.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

const values = [
  {
    name: 'Be world-class',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Share everything you know',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Always learning',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Be supportive',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Take responsibility',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Enjoy downtime',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Happy Clients', value: '500+' },
  { label: 'Certified Trainers', value: '20+' },
]

export default function About() {

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 pb-32 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2 lg:sticky lg:top-20 self-start">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Integrity Fitness Education (IFE) was founded with a mission to deliver exceptional personal training education. Our team is composed of passionate and experienced trainers who are dedicated to helping others achieve their fitness goals. By specialising in areas such as exercise referral and pre and post-natal fitness, we ensure our courses are comprehensive and relevant. At IFE, we believe in building a supportive and inspiring community where both trainers and clients can thrive.
          </p>
        </div>
        <ul className="-mt-12 space-y-12 divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt={person.name} />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">{person.bio}</p>
                <ul  className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.xUrl} className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                      <span className="sr-only">X</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our mission</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600 dark:text-gray-300">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
                Eleifend egestas fringilla sapien.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed
                  amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius
                  sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                  Mattis mauris semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-10">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                  auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                  ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src="images/Continued-Professional-Development-scaled-e1658320543551-ps1kp6cgfqbznyoi6bh9024w9j82283i286lnkpa2o.jpeg"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 border-t border-gray-300 dark:border-white pt-12">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            At Integrity Fitness Education, we adhere to core values that guide everything we do.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900 dark:text-white">{value.name}</dt>
              <dd className="mt-1 text-gray-600 dark:text-gray-300">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}