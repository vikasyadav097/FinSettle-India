import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                FS
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                FinSettle <span className="text-secondary">India</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              India's leading debt settlement and financial assistance company. We help you regain financial freedom through legal and ethical negotiation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/apply" className="text-gray-400 hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>info@finsettleindia.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-secondary shrink-0" />
                <span>123, Financial District, BKC, Mumbai, Maharashtra 400051</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="bg-white/5 p-6 rounded-xl mb-8">
            <h5 className="text-sm font-bold uppercase tracking-wider text-secondary mb-2">Disclaimer</h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              We are not a bank or NBFC. We provide financial consultation and settlement assistance. We do not guarantee specific settlement amounts as they depend on individual bank policies and negotiation outcomes. FinSettle India is a legal debt advisory firm helping individuals manage and settle their debts ethically.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>Copyright © 2026 FinSettle India. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="#" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
