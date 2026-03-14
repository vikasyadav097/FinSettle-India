import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export const ApplyNow: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully! Our experts will contact you within 24 hours.');
  };

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
            Apply for Debt Settlement
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Take the first step towards a debt-free life. Fill out the form below and our experts will get in touch.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-8">Lead Generation Form</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="yourname@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">City</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="e.g. Mumbai"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Loan Type</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                        <option>Personal Loan</option>
                        <option>Credit Card</option>
                        <option>Business Loan</option>
                        <option>Multiple Loans</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Total Loan Amount (Approx)</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="e.g. ₹5,00,000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Bank Name(s)</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      placeholder="e.g. HDFC, SBI, ICICI"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Brief Message (Optional)</label>
                    <textarea 
                      rows={3} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      placeholder="Tell us about your situation..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="btn btn-secondary w-full py-4 text-lg shadow-lg shadow-secondary/20">
                      Submit Application
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
                      <Clock size={16} /> Our experts will contact you within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-xl font-bold text-primary mb-6">Why Apply Now?</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">100% Confidential</p>
                      <p className="text-sm text-gray-600">Your data is safe and never shared with banks without your consent.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Expert Guidance</p>
                      <p className="text-sm text-gray-600">Get advice from the best debt negotiators in India.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Stop Harassment</p>
                      <p className="text-sm text-gray-600">Immediate support to stop illegal recovery agent calls.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary p-8 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">Need Help?</h4>
                <p className="text-gray-400 mb-6">Call our helpline for immediate assistance.</p>
                <p className="text-2xl font-bold text-secondary">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
