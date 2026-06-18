import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WorkshopDetails from "./components/WorkshopDetails"
import Timeline from "./components/Timeline"
import LearningOutcomes from "./components/LearningOutcomes"
import FAQ from "./components/FAQ"
import RegistrationForm from "./components/RegistrationForm"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-slate-50">

      <Navbar />

      <main className="pt-20">

        <Hero />

        <WorkshopDetails />

        <Timeline />

        <LearningOutcomes />

        <FAQ />

        <RegistrationForm />

      </main>

      <Footer />

    </div>
  )
}

export default App