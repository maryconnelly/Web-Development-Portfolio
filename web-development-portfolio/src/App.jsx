import Navbar from './components/Navbar'
import profilePhoto from './assets/profile.jpg'
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

const experience = [
  { id: 1, year: '2023 – Present', role: 'Job Title', company: 'Company Name', description: 'Brief description of your responsibilities and achievements.' },
  { id: 2, year: '2021 – 2023', role: 'Job Title', company: 'Company Name', description: 'Brief description of your responsibilities and achievements.' },
  { id: 3, year: '2019 – 2021', role: 'Job Title', company: 'Company Name', description: 'Brief description of your responsibilities and achievements.' },
  { id: 4, year: '2014 – 2019', role: 'Teacher/Team Leader', company: 'Elkhorn Public Schools', description: 'Designed and delivered curriculum for ELA, Reading, and World/US History, translating complex concepts into clear, engaging content. Managed dozens of formative and summative projects and evaluations simultaneously, tracked progress, and iterated based on results and feedback — building strong skills in structured problem-solving and communication.' },
]

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center px-8 bg-[#FAFAF7]">
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <img src={profilePhoto} alt="Mary Connelly" className="w-48 h-48 rounded-full object-cover shrink-0" />
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-4 text-[#2C2C2C]">Hi, I'm Mary</h1>
            <p className="text-xl text-[#3D7A5E]">A Web Developer & Designer</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 bg-[#F0EFE9]">
        <h2 className="text-3xl font-bold mb-4 text-[#2C2C2C] text-center">About</h2>
        <p className="text-[#2C2C2C] opacity-70 text-center max-w-xl mx-auto mb-16">A little bit about me — my background, skills, and what I love to build.</p>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#3D7A5E] opacity-30" />

          {experience.map((item) => (
            <div key={item.id} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute left-[11px] top-1 w-3 h-3 rounded-full bg-[#3D7A5E]" />
              <span className="text-sm text-[#3D7A5E] font-medium">{item.year}</span>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mt-1">{item.role}</h3>
              <p className="text-sm font-medium text-[#2C2C2C] opacity-60">{item.company}</p>
              <p className="text-sm text-[#2C2C2C] opacity-60 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
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
