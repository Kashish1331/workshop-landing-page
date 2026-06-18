import { useState } from "react"

const FAQ = () => {

  const faqs = [

    {

      question: "Do students need prior coding experience?",

      answer: "No, this workshop is beginner friendly."

    },

    {

      question: "Will recordings be shared?",

      answer: "Yes, all sessions will be recorded."

    },

    {

      question: "Will students receive a certificate?",

      answer: "Yes, a completion certificate will be provided."

    }

  ]

  const [open, setOpen] = useState<number | null>(null)

  return (

    <section id="faq" className="py-16">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">

          Frequently Asked Questions

        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div

              key={index}

              className="bg-white rounded-2xl shadow"

            >

              <button

                onClick={() =>

                  setOpen(open === index ? null : index)

                }

                className="w-full text-left p-6 font-semibold"

              >

                {faq.question}

              </button>

              {open === index && (

                <p className="px-6 pb-6 text-gray-600">

                  {faq.answer}

                </p>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default FAQ