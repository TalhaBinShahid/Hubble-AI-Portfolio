import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'HRXpert',
      category: 'AI Recruitment Platform',
      description: 'AI-powered recruitment automation platform managing candidate applications, resume scoring, and automated interview workflows.',
      longDescription: 'HRXpert revolutionizes the hiring process with intelligent automation. The platform uses advanced NLP for resume parsing and scoring, automated scheduling systems, and AI-driven interview workflows that reduce time-to-hire by 60%.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      tags: ['NLP', 'Automation', 'NestJS', 'React'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'VizdomAI',
      category: 'Computer Vision Solution',
      description: 'Industrial computer vision solution for defect detection and analysis with real-time processing capabilities.',
      longDescription: 'VizdomAI brings advanced computer vision to manufacturing. Using custom-trained models, it detects defects with 99.2% accuracy in real-time, providing instant feedback and detailed analytics dashboards for quality control.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
      tags: ['Computer Vision', 'PyTorch', 'FastAPI', 'Real-time'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI Voice Assistant',
      category: 'Intelligent Agent',
      description: 'Multi-lingual AI voice assistant for customer support with natural conversation capabilities and context awareness.',
      longDescription: 'An enterprise-grade voice assistant that handles customer queries across 15 languages. Features include sentiment analysis, context retention, and seamless handoff to human agents when needed.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
      tags: ['NLP', 'Voice AI', 'Multi-lingual', 'Agent'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Analytics Dashboard',
      category: 'Real-time Platform',
      description: 'Real-time analytics and visualization platform for business intelligence with AI-powered insights.',
      longDescription: 'A comprehensive analytics platform that processes millions of events per day, providing real-time insights with predictive analytics and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Analytics', 'Real-time', 'React', 'MongoDB'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Document AI',
      category: 'Document Processing',
      description: 'Intelligent document processing system with OCR, classification, and automated data extraction.',
      longDescription: 'Transform unstructured documents into structured data. Handles invoices, contracts, forms with 95% accuracy, reducing manual processing time by 80%.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      tags: ['OCR', 'NLP', 'Automation', 'Enterprise'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Workflow Automation',
      category: 'Business Automation',
      description: 'No-code workflow automation platform enabling businesses to build custom AI-powered workflows.',
      longDescription: 'Empower teams to create custom automation workflows without coding. Features drag-and-drop interface, AI integrations, and enterprise-grade security.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['No-code', 'Automation', 'Workflows', 'SaaS'],
      color: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section id="portfolio" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven track record of delivering production-grade AI solutions across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-cyan-400 mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative h-64">
              <img 
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${projects[selectedProject].color} opacity-30`}></div>
            </div>

            <div className="p-8">
              <div className="text-sm text-cyan-400 mb-2">{projects[selectedProject].category}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{projects[selectedProject].title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">{projects[selectedProject].longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  <ExternalLink className="w-5 h-5" />
                  View Project
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-cyan-500/50 rounded-full font-semibold hover:bg-cyan-500/10 transition-all">
                  <Github className="w-5 h-5" />
                  Source Code
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

