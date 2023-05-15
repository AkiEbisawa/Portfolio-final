import { useState } from 'react'
import './App.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



function App() {

  const [downloadPDF, setDownloadPDF] = useState(false);


  const handleClick = () => {
    const contactSection = document.querySelector('#Contact');
    const contactSectionPosition = contactSection.offsetTop;

    setTimeout(() => {
      window.scrollTo({
        top: contactSectionPosition,
        behavior: 'smooth'
      });
    }, 500); // 500 milliseconds

  };

  const handleMenu = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    const sectionPosition = section.offsetTop;

    setTimeout(() => {
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }, 500); // 500 milliseconds
  };

  const handleInfo = () => {
    window.location.hash = 'Contact';
  };

  const handleLocation = (event, ) => {
    event.preventDefault();

    window.location.hash = '';
  }

  const handleDownloadPDF = () => {
    const input = document.getElementById('resume');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  };
  

  return (
    <>
      <header className='text-gray-700 border-b bg-white border-gray-200 fixed top-0  w-full'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href='#' className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3 text-blue-900'>Aki Ebisawa</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href='#home' onClick={(event) => handleMenu(event, '#home')} className='mr-5 hover:text-blue-900 duration-300'>Home</a>
            <a href='#About' onClick={(event) => handleMenu(event, '#About')} className='mr-5 hover:text-blue-900 duration-300'>About</a>
            <a href='#Portfolio' onClick={(event) => handleMenu(event, '#Portfolio')} className='mr-5 hover:text-blue-900 duration-300'>Portfolio</a>
            <a href='#Skills' onClick={(event) => handleMenu(event, '#Skills')} className='mr-5 hover:text-blue-900 duration-300'>Skills</a>
            <a href='#Contact' onClick={(event) => handleMenu(event, '#Contact')} className='mr-5 hover:text-blue-900 duration-300'>Contact</a>
            <a href='Resume.pdf' download="Resume.pdf">
              <button className='text-white bg-blue-900 py-1 px-3 border-0 rounded hover:bg-blue-800 sm:text-sm'>Resume</button>
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <section className='text-gray-700 mt-16' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4 Regarn'>
              Hi!
              <br />
              I'm Aki
              <br />
              <h1 className='text-blue-900'>Web Developer</h1>
            </h1>
            <p className='mb-8 leading-relaxed text-lg'>
              Web developer based in Vancouver</p>
            <div className='lg:text-start'>
              <button 
                onClick={handleClick}
                className='text-white bg-blue-900 py-2 px-6 border-0 rounded text-lg hover:bg-blue-800'
              >Download Resume</button>
            </div>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="../public/img/Avator.jpg" alt=''/>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className='text-gray-700 border-t border-gray-200' id='About'>
        <div className='container ps-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-20 text-blue-900'>ABOUT ME</h1>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 lg:max-w-lg w-5/6 lg:mr-10'>
                <img src="../public/img/portrait.jpg" alt='me'/>
              </div>
                <p className='md:w-1/2 flex-grow lg:pr-24 md:pr-16 sm:m-10 md:text-left'>
                Hi! I'm Aki,I'm a web developer. And I use my past experience to ideate new features, implement wireframes, web design, and create high-performance software applications. I always try to write reusable and efficient code that anyone can understand. I especially enjoy the process of writing code and having fun with the website as it is being built. Currently, I'm focusing on UIUX design.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className='text-gray-700 border-t border-bray-200' id='Portfolio'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-blue-900 text-2xl sm:text-3xl font-medium mb-5'>PORTFOLIO</h1>
            <p>This is my current and previous projects :)</p>
          </div>
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='border border-2 border-blue-900 rounded-lg p-8'>
              <p className='text-sm'>HTML,JavaScript,CSS</p>
                <div className='flex items-center mb-3'>
                  <h2 className='text-gray-900 text-xl font-medium'>
                     Quiz app
                  </h2>
                </div>
                <div>
                  <p>Quiz web app.
                    You can chalenge and test your knowledge here.
                     This app is for entertainment
                  </p>
                  <div className='flex flex-row mt-2'>
                    <a href='https://github.com/AkiEbisawa/Quiz' className='mr-3 hover:pointer' >
                      <IconContext.Provider value={{size:"25px", color:"#1E3A8A"}}>
                      <FaGithub />
                      </IconContext.Provider>
                    </a>
                    <a href='https://gleeful-hummingbird-76f7fe.netlify.app/index.html' className='hover:pointer'>
                      <IconContext.Provider value={{size:"25px", color:"#1E3A8A"}}>
                        <FaGlobe />
                      </IconContext.Provider>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='border border-2 border-blue-900 rounded-lg p-8'>
              <p className='text-sm'>React,Redux,css</p>
                <div className='flex items-center mb-3'>
                  <h2 className='text-gray-900 text-xl font-medium'>
                    Borad App
                  </h2>
                </div>
                <div>
                  <p>To Do List web app.
                    You can add and delete your ToDo.
                    Help you prioritize your work and personal tasks
                  </p>
                  <div className='flex flex-row mt-2'>
                    <a href='https://github.com/AkiEbisawa/React-final' className='mr-3 hover:pointer'>
                      <IconContext.Provider value={{size:"25px", color:"#1E3A8A"}}>
                      <FaGithub />
                      </IconContext.Provider>
                    </a>
                    <a href='https://jovial-crisp-80284a.netlify.app/' className='hover:pointer'>
                      <IconContext.Provider value={{size:"25px", color:"#1E3A8A"}}>
                        <FaGlobe />
                      </IconContext.Provider>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='border border-2 border-blue-900 rounded-lg p-8'>
                <p className='text-sm ml-2'>React,Tailwind css,MongoDB</p>
                <div className='flex items-center mb-3'>
                  <h2 className='text-gray-900 text-xl font-medium ml-2'>
                    Whistleblow App
                  </h2>
                </div>
                <div>
                  <p className='mb-2'>
                    Full Stack web app.
                    This app assists individuals in whistleblowing for their rights.
                  </p>
                  <div className='flex flex-row'>
                    <a href='https://github.com/ryoosukesaito/Frontend-whistleblowing' className='mr-3 hover:pointer'>
                      <IconContext.Provider value={{size:"25px", color:"#1E3A8A"}}>
                      <FaGithub />
                      </IconContext.Provider>
                    </a>
                    <a href='https://frontend-whistleblowing.vercel.app/' className='hover:pointer'>
                      <IconContext.Provider value={{size:"25px", color:"#1E3A8A"}}>
                        <FaGlobe />
                      </IconContext.Provider>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Skills */}
      <section className='border-t border-gray-200' id='Skills'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex-grow mb-16  text-center'>
            <h1 className='text-2xl sm:text-3xl text-blue-900 font-medium mb-10'>SKILLS</h1>
            <div className='flex flex-wrap justify-center sm:px-24 sm:m-5'>
              <h2 className='mr-5'>HTML</h2>
              <h2 className='mr-5'>CSS</h2>
              <h2 className='mr-5'>React</h2>
              <h2 className='mr-5'>JavaScript</h2>
              <h2 className='mr-5'>Node.js</h2>
              <h2 className='mr-5'>Figma</h2>
              <h2 className='mr-5'>MySQL</h2>
              <h2 className='mr-5'>Sass</h2>
              <h2 className='mr-5'>Tailwind CSS</h2>
              <h2>Git</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className='text-gray-700 border-t border-gray-200' id='Contact'>
        <div className='container px-5 py-10 mx-auto'>
          <div className='flex-grow mb-16 text-center mt-10'>
            <h1 className='text-2xl sm:text-3xl text-blue-900 font-medium mb-5'>CONTACT ME</h1>
            <p className='mb-10'>Click Email or phone to contact me.</p>
            <div className='flex flex-row justify-center'>
              <div className='px-5 text-start'>
                <h2 className='mb-5 text-lg'>Email :</h2>
                <h2 className='text-lg'>Phone :</h2>
              </div>
              <div className='flex flex-col text-start'>
                <a href='mailto:akihthal0708pk@gmail.com' className='mb-5 text-lg hover:text-gray-900'>akihthal0708pk@gmail.com</a>
                <a href='tel:2363353337' className='text-lg hover:text-gray-900'>236-335-3337</a>
              </div>
            </div>
            <div className='flex flex-row justify-center mt-10'>
              <a href='https://github.com/AkiEbisawa' className='mx-3 hover:pointer'>
                <IconContext.Provider value={{size:'35px', color:"#1E3A8A"}}>
                  <FaGithub />
                </IconContext.Provider>
              </a>
              <a href='https://www.linkedin.com/in/aki-ebisawa-275666227' className='mx-3 hover:pointer'>
                <IconContext.Provider value={{size:"35px", color:"#1E3A8A"}}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              <a href='https://www.instagram.com/e_aki78/' className='mx-3 hover:pointer'>
                <IconContext.Provider value={{size:"35px", color:"#1E3A8A"}}>
                  <FaInstagram />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
