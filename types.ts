import { ReactNode } from 'react';

export interface Stat {
  label: string;
  value: string;
  sub?: string;
}

export interface ExpertiseCard {
  id: number;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  stats: string[];
  buttonText: string;
  imageAlt: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  isFeatured?: boolean;
  badge?: string;
  link?: string;
}

export interface WorkMethod {
  title: string;
  icon: string;
  description: string;
}

export interface FeaturedCaseStudy {
  id: number;
  category: string;
  headline: string;
  valueStatement: string;
  stats: {
    value: string;
    label: string;
    context: string;
  }[];
  ctaText: string;
  ctaLink: string;
  imageAlt: string;
  backgroundColor: 'white' | 'light';
  imageUrl?: string;
}

export interface MoreExpertiseCard {
  id: number;
  icon: string;
  headline: string;
  description: string;
  tags: string[];
  miniStat: string;
}