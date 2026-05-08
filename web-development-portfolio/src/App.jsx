import Navbar from './components/Navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Mary</h1>
        <p className="text-xl text-gray-500">A Web Developer & Designer</p>
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-500 max-w-xl">A little bit about me — my background, skills, and what I love to build.</p>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center px-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-500 max-w-xl">A showcase of things I've built.</p>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-500 max-w-xl mb-8">Let's get in touch.</p>
        <div className="flex gap-8 mt-8">
          <a href="https://github.com/maryconnelly" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <FaGithub size={36} />
          </a>
          <a href="https://linkedin.com/in/mary-connelly-omaha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaLinkedin size={36} />
          </a>
          <a href="mailto:maryconnelly14@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors">
            <MdEmail size={36} />
          </a>
        </div>
      </section>
    </>
  )
}

export default App
