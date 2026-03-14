import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Specialized Services
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive financial assistance and debt settlement solutions designed for your peace of mind.
          </p>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                {service.id === 'harassment' && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                    <div className="flex items-center gap-3 text-red-700 font-bold mb-2">
                      <AlertTriangle size={20} />
                      Important Message
                    </div>
                    <p className="text-red-600 font-medium">
                      "Recovery agents cannot harass or threaten you. It is illegal and we can help you stop it today."
                    </p>
                  </div>
                )}

                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-primary uppercase tracking-wider text-sm">What we offer:</h4>
                  {service.details?.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={20} className="text-accent shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/apply" className="btn btn-primary">
                  {service.ctaText}
                </Link>
              </div>
              
              <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="absolute -inset-4 bg-gray-100 rounded-3xl -z-10"></div>
                <img 
                  src={`https://images.unsplash.com/photo-${
                    service.id === 'loan-payment' ? '1554224155-6726b3ff858f' :
                    service.id === 'credit-card' ? '1563013544-824ae1b704d3' :
                    service.id === 'harassment' ? '1589829545856-d10d557cf95f' :
                    '1450101499163-c8848c66ca85'
                  }?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`} 
                  alt={service.title} 
                  className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Not sure which service you need?</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Our experts can analyze your financial situation and recommend the best path forward for you.
          </p>
          <Link to="/contact" className="btn btn-outline px-12">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
