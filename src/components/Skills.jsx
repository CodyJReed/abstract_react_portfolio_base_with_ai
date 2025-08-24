import { Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
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
        
        {/* Skill Filter */}
        <div className="mb-8">
          <RadioGroup value={selectedCategory} onChange={setSelectedCategory}>
            <div className="flex flex-wrap justify-center gap-4">
              <Radio value="all">
                {({ checked }) => (
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                    checked 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}>
                    All Skills
                  </span>
                )}
              </Radio>
              {skillCategories.map((category) => (
                <Radio key={category.category} value={category.category.toLowerCase()}>
                  {({ checked }) => (
                    <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                      checked 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}>
                      {category.category}
                    </span>
                  )}
                </Radio>
              ))}
            </div>
          </RadioGroup>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories
            .filter(category => selectedCategory === 'all' || category.category.toLowerCase() === selectedCategory)
            .map((category, index) => (
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