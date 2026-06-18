import { useState } from "react"
import axios from "axios"

const RegistrationForm = () => {

  const [form, setForm] = useState({

    name: "",

    email: "",

    phone: ""

  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (

    e: React.FormEvent

  ) => {

    e.preventDefault()

    setLoading(true)

    try {

      const response = await axios.post(

        "https://workshop-landing-page-7y8e.onrender.com/api/enquiry",

        form

      )

      alert(response.data.message)

      setForm({

        name: "",

        email: "",

        phone: ""

      })

    }

    catch (error) {

      alert("Something went wrong")

    }

    finally {

      setLoading(false)

    }

  }

  return (

    <section

      id="register"

      className="py-16 bg-white"

    >

      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">

          Register Now

        </h2>

        <form

          onSubmit={handleSubmit}

          className="space-y-6"

        >

          <input

            required

            type="text"

            placeholder="Full Name"

            value={form.name}

            className="w-full p-4 border rounded-xl"

            onChange={(e) =>

              setForm({

                ...form,

                name: e.target.value

              })

            }

          />

          <input

            required

            type="email"

            placeholder="Email"

            value={form.email}

            className="w-full p-4 border rounded-xl"

            onChange={(e) =>

              setForm({

                ...form,

                email: e.target.value

              })

            }

          />

          <input

            required

            type="tel"

            placeholder="Phone Number"

            value={form.phone}

            className="w-full p-4 border rounded-xl"

            onChange={(e) =>

              setForm({

                ...form,

                phone: e.target.value

              })

            }

          />

          <button

            className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition"

          >

            {loading ? "Submitting..." : "Register"}

          </button>

        </form>

      </div>

    </section>

  )

}

export default RegistrationForm