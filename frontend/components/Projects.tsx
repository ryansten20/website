'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'

import congoImg from './images/congo-removebg-preview.png'

type Project = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image?: string // tailwind gradient classes
  imageSrc?: StaticImageData // local static image import
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform (Congo)',
    description:
      'A full-stack e-commerce solution with user authentication, order and product management. Built with React, Laravel, and SQLite.',
      technologies: ['React', 'Laravel', 'SQLite'],
    github: 'https://github.com/ryansten20/congo',
    demo: 'https://example.com',
    imageSrc: congoImg,
    imageAlt: 'Congo e-commerce platform screenshot',
    imageWidth: 250,
    imageHeight: 180,
  },
  {
    title: 'This Website',
    description:
      'This website is a portfolio of my work and projects. Also, a place to practice API calls, React, and TypeScript.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Resend API', 'Cursor AI', 'Vercel', 'GitHub'],
    github: 'https://github.com/ryansten20/website',
    demo: 'https://ryanstenersen.com',
    image: 'bg-gradient-to-br from-purple-400 to-pink-600',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'bg-gradient-to-br from-blue-400 to-cyan-600',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Analytics platform for social media metrics with data visualization, reporting, and insights dashboard.',
    technologies: ['Next.js', 'Python', 'D3.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'bg-gradient-to-br from-orange-400 to-red-600',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 relative flex items-center justify-center">
                {project.imageSrc ? (
                  <Image
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  width={project.imageWidth ?? 320}
                  height={project.imageHeight ?? 180}
                  className="object-contain"
                  priority={index === 0}
                />
                ) : (
                  <div className={`absolute inset-0 ${project.image ?? ''}`} />
                )}
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

