const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Sass"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Java", "Express", "Django", "Spring Boot"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center dark:text-white">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 