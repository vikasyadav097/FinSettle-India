import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  ctaText?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  amount: string;
}
