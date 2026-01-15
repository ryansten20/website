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
              I'm a full time student at the University of Idaho studying Computer Science
              with a passion for software development. I'm currently in my final year of study, graduating in May 2026,
              and I'm looking for an internship before graduation.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Currently, I'm working on a project for my Senior Capstone Course, where we are using a DMX controller(stage lighting controller) to control a light show using an Arduino Uno
              that wirelessly transmits to a receiver that controls the lights. This project is a collaboration with my partner. There are over 100 sets of glasses
              that each have a receiver attached to them. The end goal is to use glasses connected to the receiver to see the light show in real time.
              These glasses are used by the University of Idaho's marching band to put on halftime shows for around 11,000 people at home football games. 
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm trying to expand my knowledge in all areas of computer science, including software development, hardware development, cybersecurity, and artificial intelligence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm a quick learner and I'm always looking to learn new things and expand my knowledge. I started coding in high school during a Web Design course mostly
              using HTML, CSS, and JavaScript. When I'm not focused on school or work, I am an avid Pokemon collector. I run an eBay store on the side selling
              Pokemon cards. Eventually, I would like to find a bridge between computer science and Pokemon. I also enjoy playing games, watching UFC and NFL seeing new places,
              and spending time with friends and family.
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

