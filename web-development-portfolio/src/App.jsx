import Navbar from './components/Navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const projects = [
  { id: 1, title: 'Project One', description: 'Short description of the project.', link: '#' },
  { id: 2, title: 'Project Two', description: 'Short description of the project.', link: '#' },
  { id: 3, title: 'Project Three', description: 'Short description of the project.', link: '#' },
  { id: 4, title: 'Project Four', description: 'Short description of the project.', link: '#' },
  { id: 5, title: 'Project Five', description: 'Short description of the project.', link: '#' },
  { id: 6, title: 'Project Six', description: 'Short description of the project.', link: '#' },
]

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

      <section id="projects" className="py-24 px-8 bg-[#FAFAF7]">
        <h2 className="text-3xl font-bold mb-4 text-[#2C2C2C] text-center">Projects</h2>
        <p className="text-[#2C2C2C] opacity-70 text-center mb-12">A showcase of things I've built.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <a key={project.id} href={project.link} className="group rounded-xl overflow-hidden border border-[#e0dfd8] hover:shadow-lg transition-shadow bg-[#F0EFE9]">
              <div className="w-full h-48 bg-[#d9d8d1]" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-[#2C2C2C] group-hover:text-[#3D7A5E] transition-colors">{project.title}</h3>
                <p className="text-sm text-[#2C2C2C] opacity-60 mt-1">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
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
