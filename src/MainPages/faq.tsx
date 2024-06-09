import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Do you offer flexible payment options?",
    answer: "Yes, we tailor your price to your learning needs so you can study at your own pace.",
  },
  {
    question: "Are your courses accredited?",
    answer: "Yes, we are accredited by Active iQ, whose courses are recognised internationally.",
  },
  {
    question: "Will I be insured to give training & nutrition advice once I finish the course?",
    answer: "Yes, the combined diploma will allow you to get public liability & professional indemnity insurance to cover training and nutrition advice.",
  },
  {
    question: "Can I complete the course while I'm already working or going to university/college?",
    answer: "Yes, the majority of the course is online with a minimum of two in-person weekends. However, we take pride in our 1-1 tuition and workshops, so we encourage as much in-person learning as you reasonably can.",
  },
  {
    question: "How are your qualifications taught?",
    answer: "The theoretical side can be covered mostly online by watching webinars and participating in video conferencing with tutors and guest experts. 1-1 tuition for both the theoretical and practical side of the course is available, as well as full practical workshops.",
  },
  {
    question: "If I don't like the course, can I get a refund?",
    answer: "The deposit for level 2 and level 3 is non-refundable. Any other fees are refundable during the 14-day statutory period.",
  },
  {
    question: "What is the non-refundable deposit?",
    answer: "£499 – this is for the fees we pay for your learning resources and registration.",
  },
  {
    question: "How will I be assessed on the course?",
    answer: "Level 2 and level 3 are assessed in person at an assessment day. Theory exams have multiple-choice tests which you can take online.",
  },
  {
    question: "How long does the course take to complete?",
    answer: "You can study at your own pace and we typically expect learners to become fully qualified within 9-14 months of enrolment. We have seen some pass in under 6 months but the maximum time allowed is 36 months.",
  },
  {
    question: "What if I'm ill or go on holiday?",
    answer: "Not a problem, all learning is done at your own pace. All of the webinars are online so you won’t miss anything.",
  },
  {
    question: "What if I already have a Level 2 Fitness Instructor qualification?",
    answer: "Just show us proof of your certification and we can invoice you individually. Email harry@integrityfitness.education with your subject Level 2 verification.",
  },
  {
    question: "What is CIMSPA?",
    answer: "CIMSPA stands for the Chartered Institute for the Management of Sport and Physical Activity. It is the professional development body for the UK’s sport and physical activity sector. Active IQ qualifications are recognised by CIMSPA.",
  },
  {
    question: "What is CPD?",
    answer: "Continuing Professional Development. Sometimes referred to as CEUs in the USA.",
  },
  {
    question: "Are your qualifications internationally recognised?",
    answer: "The Active IQ Level 2 & 3 qualifications are recognised in the UK and in other international countries. We recommend you speak to your country’s specific awarding body to get the most up-to-date answer.",
  },
  {
    question: "How old do I need to be to do the course?",
    answer: "You need to be 16 years of age or older.",
  },
  {
    question: "How long do I have to complete the qualification?",
    answer: "You need to complete your certification within 36 months from your start date.",
  },
  {
    question: "What is Active IQ?",
    answer: "Active IQ is an awarding organisation for the active leisure, learning, and wellbeing sectors. It is recognised and regulated by Ofqual, Qualifications Wales, and CCEA. Active IQ works with a network of approved training organisations (like us) to deliver its qualifications.",
  },
  {
    question: "What happens if I don't pass an exam?",
    answer: "You’re allowed up to 3 attempts at every unit, with fees applied depending on your choice of course.",
  },
]

export default function FAQ() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-700">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-700">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className={`flex w-full items-start justify-between text-left ${open ? 'text-customRed' : 'text-gray-900 dark:text-white'}`}>
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}