const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate developer with a love for creating meaningful digital experiences. 
                With expertise in modern web technologies, I bring ideas to life through clean code 
                and intuitive design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                  5+ Years Experience
                </div>
                <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                  50+ Projects Completed
                </div>
                <div className="bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                  Open Source Contributor
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">What I Do</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Frontend Development (React, Vue, Angular)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Backend Development (Node.js, Python, Java)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    UI/UX Design & Prototyping
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Database Design & Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 