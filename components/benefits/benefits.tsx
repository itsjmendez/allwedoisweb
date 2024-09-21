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
            size="sm"
            className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] py-2 bg-[rgb(0,87,255)] rounded-md text-white font-light transition duration-200 ease-linear tracking-normal"
          >
            <a
              href="mailto:hello@allwedoisweb.com?subject=Inquiry&body=Hi%2C%0D%0A%0D%0A%5BTell%20us%20about%20your%20vision%20here%5D%0D%0A%0D%0A%5BDetails%20that%20could%20help%20us%20understand%20more%5D%0D%0A1.%20What%27s%20your%20top%20objective%3F%0D%0A2.%20When%20do%20you%20want%20it%20completed%3F%0D%0A3.%20What%27s%20your%20estimated%20investment%20budget%3F%0D%0A%0D%0AThe%20more%20details%20you%20can%20provide%2C%20the%20better%20we%20can%20understand%20your%20needs%20and%20see%20if%20we%27re%20a%20good%20fit.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get started by sending an inquiry email"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
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
