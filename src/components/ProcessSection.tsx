import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Package, Truck, Headphones } from 'lucide-react'
import './ProcessSection.css'

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircle size={48} />,
      title: 'Order / Inquiry',
      description: 'Contact us with your requirements. Our team will understand your specific needs and provide customized solutions.',
      details: [
        'Initial consultation',
        'Requirement assessment',
        'Custom quote preparation',
        'Product recommendations'
      ]
    },
    {
      icon: <Package size={48} />,
      title: 'Production / Packaging',
      description: 'We manufacture and package your products according to your specifications, ensuring quality and consistency.',
      details: [
        'Quality-controlled production',
        'Custom packaging options',
        'Batch testing & quality assurance',
        'Proper labeling & documentation'
      ]
    },
    {
      icon: <Truck size={48} />,
      title: 'Delivery & Support',
      description: 'Timely delivery to your location with ongoing support to ensure your complete satisfaction.',
      details: [
        'Scheduled delivery',
        'Installation support',
        'Training & guidance',
        'Ongoing maintenance'
      ]
    }
  ]

  return (
    <section id="process" className="process-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            Our streamlined process ensures quality service from inquiry to delivery
          </p>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="process-step"
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <div className="step-icon">
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="support-section"
        >
          <div className="support-card">
            <div className="support-icon">
              <Headphones size={40} />
            </div>
            <div className="support-content">
              <h3>24/7 Customer Support</h3>
              <p>
                We are always ready to assist you with any questions 
                or concerns. We believe in building long-term relationships with our clients.
              </p>
              <div className="support-features">
                <div className="support-feature">
                  <span className="feature-icon">✓</span>
                  <span>Quick response time</span>
                </div>
                <div className="support-feature">
                  <span className="feature-icon">✓</span>
                  <span>Product training</span>
                </div>
                <div className="support-feature">
                  <span className="feature-icon">✓</span>
                  <span>Delivery support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
