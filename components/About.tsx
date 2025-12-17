'use client'

import { motion } from 'framer-motion'
import { Code, Coffee, Rocket } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that follows best practices.',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Efficient development process with focus on quality and speed.',
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description: 'Passionate about finding elegant solutions to complex challenges.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">A Little About Myself</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating
              innovative solutions and bringing ideas to life through code. With
              expertise in modern web technologies, I specialize in building
              responsive, performant applications that deliver exceptional user
              experiences.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community. I believe in continuous learning and staying
              up-to-date with the latest industry trends.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My goal is to work on challenging projects that push the boundaries
              of what's possible and make a positive impact through technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-primary-600 font-bold text-2xl"
              >
                {i}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors"
              >
                <div className="inline-flex p-4 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

