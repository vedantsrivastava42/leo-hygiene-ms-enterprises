import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import './ContactSection.css'

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_wgzqczj'
      const templateId = 'template_4b1ugjd'
      const publicKey = 'UMyuKFJyjt6XZN5iW'
      
      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization || 'Not provided',
        message: formData.message || 'No message provided',
        time: new Date().toLocaleString(),
        to_email: 'leo.msenterprises@gmail.com, kumar.atul706@gmail.com'
      }
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      // Reset form
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        message: ''
      })
      
      alert('Thank you for your inquiry! We will contact you soon.')
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.')
    }
  }

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+91 9128106245',
      action: 'tel:+919128106245'
    },
    {
      icon: <Phone size={24} />,
      title: 'Alternate Phone',
      details: '+91 9430065284',
      action: 'tel:+919430065284'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'leo.msenterprises@gmail.com',
      action: 'mailto:leo.msenterprises@gmail.com'
    },
    {
      icon: <Mail size={24} />,
      title: 'Alternate Email',
      details: 'kumar.atul706@gmail.com',
      action: 'mailto:kumar.atul706@gmail.com'
    }
  ]

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to partner with us? Contact us for a customized quote
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <div className="form-header">
              <div className="form-icon">
                <MessageCircle size={32} />
              </div>
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Your organization name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@organization.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 9128106245"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your requirements, quantity needed, and any specific preferences..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info-container"
          >
            <div className="contact-info-header">
              <h3>Contact Information</h3>
              <p>We're here to help you with all your hygiene solution needs</p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-info-item"
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.action ? (
                      <a href={info.action} className="contact-link">
                        {info.details}
                      </a>
                    ) : (
                      <span>{info.details}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="cta-buttons">
              <a href="tel:+919128106245" className="btn btn-primary">
                <Phone size={20} />
                Call Now
              </a>
              <a href="https://wa.me/919128106245" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
