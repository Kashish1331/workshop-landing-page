const Timeline = () => {

  const weeks = [

    {
      week: "Week 1",
      title: "AI Basics"
    },

    {
      week: "Week 2",
      title: "Programming Logic"
    },

    {
      week: "Week 3",
      title: "Robotics"
    },

    {
      week: "Week 4",
      title: "Final Project"
    }

  ]

  return (

    <section className="py-16">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">

          4 Week Learning Journey

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {weeks.map((item) => (

            <div

              key={item.week}

              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition"

            >

              <p className="text-blue-600 font-semibold">

                {item.week}

              </p>

              <h3 className="text-2xl font-bold mt-4">

                {item.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default Timeline