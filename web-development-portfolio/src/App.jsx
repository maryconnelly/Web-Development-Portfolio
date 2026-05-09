import Navbar from './components/Navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-[#FAFAF7]">
        <h1 className="text-5xl font-bold mb-4 text-[#2C2C2C]">Hi, I'm Mary</h1>
        <p className="text-xl text-[#3D7A5E]">A Web Developer & Designer</p>
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-[#F0EFE9]">
        <h2 className="text-3xl font-bold mb-4 text-[#2C2C2C]">About</h2>
        <p className="text-[#2C2C2C] max-w-xl opacity-70">A little bit about me — my background, skills, and what I love to build.</p>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-[#FAFAF7]">
        <h2 className="text-3xl font-bold mb-4 text-[#2C2C2C]">Projects</h2>
        <p className="text-[#2C2C2C] max-w-xl opacity-70">A showcase of things I've built.</p>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-[#F0EFE9]">
        <h2 className="text-3xl font-bold mb-4 text-[#2C2C2C]">Contact</h2>
        <p className="text-[#2C2C2C] max-w-xl opacity-70">Let's get in touch.</p>
        <div className="flex gap-8 mt-8">
          <a href="https://github.com/maryconnelly" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] hover:text-[#3D7A5E] transition-colors">
            <FaGithub size={36} />
          </a>
          <a href="https://linkedin.com/in/mary-connelly-omaha" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] hover:text-[#3D7A5E] transition-colors">
            <FaLinkedin size={36} />
          </a>
          <a href="mailto:maryconnelly14@gmail.com" className="text-[#2C2C2C] hover:text-[#3D7A5E] transition-colors">
            <MdEmail size={36} />
          </a>
        </div>
      </section>
    </>
  )
}

export default App
