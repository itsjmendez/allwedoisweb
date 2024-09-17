import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-foreground">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 md:text-center mb-10">
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[rgb(0,87,255)]">
              Benefits
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience tailored solutions that drive growth, improve
              efficiency, and future-proof your business with the perfect blend
              of marketing and technology. We ensure measurable results and
              long-term success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-border border">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4 md:flex items-center transition-colors bg-background"
            >
              <Image
                width={200}
                height={200}
                src={benefit.imgSrc}
                alt={benefit.imgAlt}
                className="object-cover mx-auto grayscale contrast-125 brightness-50"
              />
              <div className="border border-dashed rounded-2xl p-2 relative bg-secondaryBackground">
                <h3 className="md:text-xl font-bold mb-2 flex items-center">
                  {benefit.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
                  {benefit.description}
                </p>
                <CheckCircle className="absolute w-4 h-4 right-2 top-2 text-green-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button
            asChild
            size="lg"
            className="mt-4 bg-[rgb(0,87,255)] text-primary hover:bg-primary/90 hover:text-primary-foreground"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: 'Innovative Solutions',
    description:
      'Cutting-edge strategies tailored to your unique business challenges.',
    imgSrc: '/images/benefits/innovative-solutions.png',
    imgAlt: 'Innovative Solutions',
  },
  {
    title: 'Targeted Campaigns',
    description:
      'Precision-focused marketing that reaches your ideal audience.',
    imgSrc: '/images/benefits/targeted-campaigns.png',
    imgAlt: 'Targeted Campaigns',
  },
  {
    title: 'Expert Team',
    description: 'Seasoned professionals with diverse industry experience.',
    imgSrc: '/images/benefits/expert-team.png',
    imgAlt: 'Expert Team',
  },
  {
    title: 'Creative Excellence',
    description: 'Stunning designs and compelling content that captivate.',
    imgSrc: '/images/benefits/creative-excellence.png',
    imgAlt: 'Creative Excellence',
  },
  {
    title: 'Data-Driven Approach',
    description: 'Insights-backed decisions for optimal performance.',
    imgSrc: '/images/benefits/data-driven-approach.png',
    imgAlt: 'Data-Driven Approach',
  },
  {
    title: 'Scalable Technology',
    description: 'Robust solutions that grow with your business needs.',
    imgSrc: '/images/benefits/scalable-technology.png',
    imgAlt: 'Scalable Technology',
  },
];
