import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHY_CHOOSE_US, SERVICES, STEPS, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#D4AF37_0%,transparent_50%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 border border-secondary/30">
                Trusted Debt Settlement Experts
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Struggling With Loan or Credit Card Debt? <span className="text-secondary">We Help You Settle It Legally</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                We negotiate with banks and financial institutions to reduce your loan burden and help you become debt-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="btn btn-secondary text-lg">
                  Apply for Settlement
                </Link>
                <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">
                  Free Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573163281538-50703941e167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Financial Consultation" 
                  className="relative rounded-2xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[200px]">
                  <p className="text-primary font-bold text-2xl mb-1">95%</p>
                  <p className="text-gray-600 text-sm">Success rate in bank negotiations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <item.icon size={20} />
                </div>
                <span className="font-semibold text-primary">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Specialized Services</h2>
            <p className="text-gray-600 text-lg">
              We offer comprehensive debt management solutions tailored to your specific financial situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="text-secondary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple 4-Step Process</h2>
            <p className="text-gray-400 text-lg">
              Getting debt-free is easier than you think. Here is how we work for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-lg shadow-secondary/20">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Step {step.number}: {step.title}</h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Real stories from people who regained their financial freedom with our help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-primary">{t.name}</h4>
                    <p className="text-accent text-sm font-semibold">{t.amount}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-secondary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Take Control of Your Financial Future Today</h2>
              <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
                Don't let debt define your life. Our experts are ready to help you settle your loans and start fresh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply" className="btn bg-primary text-white hover:bg-primary/90 text-lg px-10">
                  Apply Now
                </Link>
                <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-10">
                  Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
