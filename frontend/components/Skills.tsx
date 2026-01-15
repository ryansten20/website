'use client'

import { motion } from 'framer-motion'

type SkillLevel = 'Comfortable' | 'Familiar' | 'Learning'

const skillLevelOrder: SkillLevel[] = ['Comfortable', 'Familiar', 'Learning']

const levelMeta: Record<SkillLevel, { dotClass: string; textClass: string }> = {
  Comfortable: { dotClass: 'bg-primary-600', textClass: 'text-primary-700' },
  Familiar: { dotClass: 'bg-primary-500', textClass: 'text-primary-700' },
  Learning: { dotClass: 'bg-primary-300', textClass: 'text-primary-700' },
}

const skillCategories = [
  {
    category: 'Frontend',
    skills: {
      Comfortable: ['React', 'C++', 'CSS', 'HTML', 'C'],
      Familiar: ['SQL', 'Python'],
      Learning: ['Java', 'PHP', 'Ruby'],
    } satisfies Record<SkillLevel, string[]>,
  },
  {
    category: 'Backend',
    skills: {
      Comfortable: ['Laravel', 'SQLite', 'MySQL'],
      Familiar: ['Flask', 'REST APIs'],
      Learning: ['Node.js', 'Express', 'Next.js'],
    } satisfies Record<SkillLevel, string[]>,
  },
  {
    category: 'Tools & Others',
    skills: {
      Comfortable: ['ChatGPT', 'GitHub', 'VS Code', 'Terminal', 'Anaconda'],
      Familiar: ['AWS', 'Docker'],
      Learning: ['PostgreSQL', 'MongoDB'],
    } satisfies Record<SkillLevel, string[]>,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                {category.category}
              </h3>

              <div className="space-y-5">
                {skillLevelOrder.map((level, levelIndex) => {
                  const skills = category.skills[level]
                  if (!skills.length) return null

                  return (
                    <div key={level}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`h-2 w-2 rounded-full ${levelMeta[level].dotClass}`} />
                        <p className={`text-sm font-semibold ${levelMeta[level].textClass}`}>
                          {level}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay:
                                categoryIndex * 0.1 +
                                levelIndex * 0.05 +
                                skillIndex * 0.03,
                              duration: 0.4,
                            }}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

