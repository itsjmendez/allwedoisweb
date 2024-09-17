'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircleQuestion, Search } from 'lucide-react';
import { Button } from '../ui/button';

const faqData = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a wide range of digital marketing services including SEO, PPC, social media marketing, content creation, and web design. Our team specializes in creating customized strategies to meet your specific business needs.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'The timeline for results can vary depending on the specific service and your goals. Generally, you may start seeing initial results within 3-6 months, but sustainable, long-term results typically become more evident after 6-12 months of consistent effort.',
  },
  {
    question: 'Do you work with small businesses?',
    answer:
      'Yes, we work with businesses of all sizes, from startups to large corporations. We tailor our services to fit the unique needs and budgets of small businesses, helping them compete effectively in the digital landscape.',
  },
  {
    question: 'How do you measure the success of your campaigns?',
    answer:
      'We use a variety of metrics to measure success, including website traffic, conversion rates, engagement rates, and ROI. We provide regular reports and analytics to keep you informed about the performance of your campaigns and the progress towards your goals.',
  },
  {
    question: 'Can you help with multilingual marketing?',
    answer:
      'Absolutely! We have experience in multilingual and multicultural marketing. Our team can help you create and implement strategies to effectively reach diverse audiences in their preferred languages and with culturally relevant content.',
  },
];

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  React.useEffect(() => {
    const filtered = faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFAQs(filtered);
  }, [searchTerm]);

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 md:text-center mb-10">
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[rgb(0,87,255)]">
              FAQ
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find quick answers to common questions about our services and how
              we can help your business grow.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-secondaryBackground dark:border dark:text-white"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-secondaryBackground"
              >
                <AccordionTrigger className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white dark:hover:bg-[rgb(0,87,255)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {filteredFAQs.length === 0 && (
          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            No matching questions found. Please try a different search term.
          </p>
        )}
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
            Send Us A Question
            <MessageCircleQuestion className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FAQSection;
