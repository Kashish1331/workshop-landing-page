import { motion } from "framer-motion"

const Hero = () => {

  return (

<section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6">

<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

className="text-center max-w-4xl"

>

<p className="mb-4 text-yellow-300 font-semibold">

🚀 Summer 2026 Batch

</p>

<h1 className="text-4xl md:text-6xl font-bold mb-6">

AI & Robotics Summer Workshop

</h1>

<p className="text-lg mb-8">

Learn AI, coding and robotics through hands-on projects.

</p>

<div className="flex flex-wrap gap-4 justify-center">

<button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">

Enroll Now

</button>

<button className="border border-white px-8 py-4 rounded-xl">

Learn More

</button>

</div>

</motion.div>

</section>

  )
}

export default Hero