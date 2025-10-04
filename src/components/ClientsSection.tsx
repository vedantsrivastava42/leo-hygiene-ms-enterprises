import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import './ClientsSection.css'

// Import client logos
import bdPublicSchool from '../assets/BD Public School.png'
import holidayRoyal from '../assets/Holiday Royal.png'
import internationals from '../assets/Internationals.png'
import ishaanInternationals from '../assets/Ishaan Internationals.png'
import mahavirCancer from '../assets/Mahavir Cancer Sansthan.png'

const ClientsSection: React.FC = () => {
  const clients = [
    {
      name: 'BD Public School',
      logo: bdPublicSchool,
      type: 'Educational Institution'
    },
    {
      name: 'Holiday Royal',
      logo: holidayRoyal,
      type: 'Hospitality & Tourism'
    },
    {
      name: 'Internationals',
      logo: internationals,
      type: 'Educational Institution'
    },
    {
      name: 'Ishaan Internationals',
      logo: ishaanInternationals,
      type: 'Educational Institution'
    },
    {
      name: 'Mahavir Cancer Sansthan',
      logo: mahavirCancer,
      type: 'Healthcare Institution'
    }
  ]

  const testimonials = [
    {
      text: "LEO products have been instrumental in maintaining high hygiene standards across our campus. The quality and reliability are unmatched.",
      author: "Principal",
      organization: "BD Public School",
      rating: 5
    },
    {
      text: "We've been using LEO hygiene solutions for over 5 years. Their products are effective, safe, and perfect for our hospitality needs.",
      author: "Facilities Manager",
      organization: "Holiday Royal",
      rating: 5
    },
    {
      text: "The team at MS Enterprises understands our requirements perfectly. Their products help us maintain a clean, safe environment for our students.",
      author: "Administration Head",
      organization: "Internationals",
      rating: 5
    }
  ]

  return (
    <section id="clients" className="clients-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Trusted by Leading Institutions</h2>
          <p className="section-subtitle">
            We serve schools, offices, and organizations nationwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="clients-grid"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="client-card"
            >
              <div className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-type">{client.type}</p>
                <div className="served-badge">We Served</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="testimonials-section"
        >
          <h3 className="testimonials-title">What Our Clients Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="testimonial-card"
              >
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.organization}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection
