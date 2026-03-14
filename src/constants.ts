import { 
  ShieldCheck, 
  Scale, 
  Lock, 
  Zap, 
  Globe, 
  CreditCard, 
  HandCoins, 
  MessageSquareWarning, 
  Combine,
  FileText,
  Search,
  Handshake,
  CheckCircle2
} from 'lucide-react';
import { NavLink, Service, Step, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'loan-payment',
    title: 'Loan Payment Issues',
    description: 'Helping customers who are unable to pay personal loans, business loans, or EMI payments.',
    icon: HandCoins,
    details: [
      'Loan settlement negotiation',
      'EMI restructuring guidance',
      'Bank negotiation support'
    ],
    ctaText: 'Get Help Now'
  },
  {
    id: 'credit-card',
    title: 'Credit Card Loan Issues',
    description: 'Helping customers struggling with high credit card bills and penalties.',
    icon: CreditCard,
    details: [
      'Credit card settlement',
      'Interest waiver negotiation',
      'Payment restructuring'
    ],
    ctaText: 'Resolve Credit Card Debt'
  },
  {
    id: 'harassment',
    title: 'Recovery Agents Harassment',
    description: 'Protect customers from illegal harassment by recovery agents.',
    icon: MessageSquareWarning,
    details: [
      'Legal guidance',
      'Complaint support',
      'Bank negotiation'
    ],
    ctaText: 'Report Harassment'
  },
  {
    id: 'consolidation',
    title: 'Loan Consolidation',
    description: 'Combine multiple loans into one manageable payment for better financial planning.',
    icon: Combine,
    details: [
      'Lower EMI',
      'Single payment',
      'Better financial planning'
    ],
    ctaText: 'Consolidate My Loans'
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Submit Application',
    description: 'Fill out our simple online application form with your loan details.',
    icon: FileText
  },
  {
    number: 2,
    title: 'Case Review',
    description: 'Our financial experts review your case and provide a free consultation.',
    icon: Search
  },
  {
    number: 3,
    title: 'Negotiation With Bank',
    description: 'We negotiate with your lenders to reach a mutually agreeable settlement.',
    icon: Handshake
  },
  {
    number: 4,
    title: 'Settlement & Closure',
    description: 'Bank approves the settlement, you pay the amount, and close the debt.',
    icon: CheckCircle2
  }
];

export const WHY_CHOOSE_US = [
  { text: 'Expert Debt Negotiators', icon: ShieldCheck },
  { text: 'Legal & Safe Loan Settlement', icon: Scale },
  { text: '100% Confidential Process', icon: Lock },
  { text: 'Fast Case Evaluation', icon: Zap },
  { text: 'PAN India Support', icon: Globe },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    text: 'Thanks to this team, my ₹8 lakh credit card debt was settled for a fraction of the amount. Highly recommended!',
    amount: '₹8 Lakh Settled'
  },
  {
    id: '2',
    name: 'Priya Verma',
    text: 'The harassment from recovery agents stopped immediately after I joined FinSettle. They handled everything professionally.',
    amount: 'EMI Restructured'
  },
  {
    id: '3',
    name: 'Amit Patel',
    text: 'I was drowning in multiple loans. Their consolidation strategy helped me manage my finances much better.',
    amount: '₹12 Lakh Consolidated'
  }
];
