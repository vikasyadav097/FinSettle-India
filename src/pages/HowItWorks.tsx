import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const HowItWorks: React.FC = () => {
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
            How It Works
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proven process for settling your debt and helping you regain financial freedom.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {STEPS.map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-secondary/10 rounded-2xl -z-10"></div>
                      <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                        <step.icon size={36} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        Step {step.number}: {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-sm aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
                      <img 
                        src={`https://images.unsplash.com/photo-${
                          index === 0 ? '1450101499163-c8848c66ca85' :
                          index === 1 ? '1551836022-d5d88e9218df' :
                          index === 2 ? '1573163281538-50703941e167' :
                          '1554224155-6726b3ff858f'
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                        alt={step.title}
                        className="w-full h-full object-cover rounded-2xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>

                {index < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 h-20 items-center justify-center text-secondary">
                    <ArrowDown size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">Typical Settlement Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { label: 'Application', time: 'Day 1' },
                { label: 'Consultation', time: 'Day 2-3' },
                { label: 'Case Setup', time: 'Week 1' },
                { label: 'Negotiation', time: 'Month 1-3' },
                { label: 'Closure', time: 'Month 4+' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-full h-2 bg-gray-100 rounded-full mb-4 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-sm"></div>
                  </div>
                  <p className="font-bold text-primary">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Ready to start your journey to financial freedom?</h2>
          <Link to="/apply" className="btn btn-secondary px-12 text-lg">
            Start Step 1 Now
          </Link>
        </div>
      </section>
    </div>
  );
};
