import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Award, Shield } from 'lucide-react'
import './AboutSection.css'

const AboutSection: React.FC = () => {
  const milestones = [
    {
      icon: <Building2 size={40} />,
      number: '30+',
      label: 'Institutions Served',
      description: 'Schools, offices, and organizations trust our products'
    },
    {
      icon: <Users size={40} />,
      number: '100,000+',
      label: 'Liters Supplied',
      description: 'Premium hygiene products delivered nationwide'
    },
    {
      icon: <Award size={40} />,
      number: '20+',
      label: 'Years Experience',
      description: 'Serving communities since 2001'
    },
    {
      icon: <Shield size={40} />,
      number: '100%',
      label: 'Quality Assured',
      description: 'Every product meets highest standards'
    }
  ]

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">About MS Enterprises</h2>
          <p className="section-subtitle">
            Your trusted partner in premium hygiene solutions
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>Our Story</h3>
            <p>
              Since 2001, MS Enterprises has been at the forefront of providing 
              premium hygiene solutions to schools, offices, and organizations. 
              Our LEO brand represents our commitment to quality, 
              reliability, and excellence in every product we deliver.
            </p>
            <p>
              We understand that hygiene is not just about cleanliness—it's about 
              creating safe, healthy environments where people can thrive. That's 
              why we've dedicated over two decades to developing and supplying 
              products that meet the highest standards of quality and effectiveness.
            </p>
            <p>
              Our vision is simple: to be the most trusted partner for institutions 
              seeking reliable, premium hygiene solutions. We believe that every 
              school, office, and organization deserves access to products that 
              protect and care for their communities.
            </p>
            <p>
              <strong>Owned and Managed by Mr. Atul Kumar</strong>, MS Enterprises 
              continues to uphold the highest standards of quality and service, 
              ensuring that every client receives personalized attention and 
              exceptional products tailored to their specific needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="milestones-grid"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="milestone-card"
              >
                <div className="milestone-icon">
                  {milestone.icon}
                </div>
                <div className="milestone-number">{milestone.number}</div>
                <div className="milestone-label">{milestone.label}</div>
                <div className="milestone-description">{milestone.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
