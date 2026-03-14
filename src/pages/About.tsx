import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, ShieldCheck, Users } from 'lucide-react';

export const About: React.FC = () => {
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
            About FinSettle India
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering individuals to overcome debt and reclaim their financial independence through legal and ethical solutions.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                FinSettle India is a premier financial consultancy firm specializing in debt settlement and loan restructuring. We understand the immense stress that comes with unmanageable debt, and we are here to provide a professional bridge between you and your lenders.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our team consists of experienced financial consultants, legal experts, and skilled negotiators who have successfully helped thousands of Indians settle their credit card debts and personal loans. We are dedicated to protecting our clients from harassment and helping them find a sustainable path to debt-free living.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Users size={20} />
                  </div>
                  <span className="font-bold text-primary">5000+ Clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-bold text-primary">100% Legal</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136364-798a730bb361?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
                className="rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="font-medium">Years of Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-2xl text-primary/80 font-medium italic leading-relaxed">
              "To provide legal and ethical debt settlement solutions that help individuals regain financial freedom and protect them from the psychological burden of debt."
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Trust FinSettle India?</h2>
            <p className="text-gray-600 text-lg">
              We pride ourselves on transparency, ethics, and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Experienced Consultants',
                desc: 'Our team has deep knowledge of banking laws and negotiation tactics.'
              },
              {
                title: 'Transparent Process',
                desc: 'No hidden fees or false promises. We keep you informed at every step.'
              },
              {
                title: 'Confidential Handling',
                desc: 'Your financial data and personal information are 100% secure with us.'
              },
              {
                title: 'Strong Negotiation',
                desc: 'We have established relationships and credibility with major banks.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
