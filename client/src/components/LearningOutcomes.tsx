const LearningOutcomes = () => {

  const outcomes = [

    "Understand AI fundamentals",

    "Learn programming logic",

    "Build beginner robotics projects",

    "Develop problem-solving skills",

    "Create a mini AI project"

  ]

  return (

    <section className="py-16 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">

          Learning Outcomes

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {outcomes.map((item, index) => (

            <div

              key={index}

              className="bg-slate-50 p-6 rounded-2xl shadow"

            >

              ✅ {item}

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default LearningOutcomes