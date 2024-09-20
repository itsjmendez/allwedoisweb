'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  MessageCircleQuestion,
  Search,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '../ui/button';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is a Multicultural Marketing Strategy?',
    answer:
      'Multicultural marketing focuses on tailoring messages to diverse audiences by considering their cultural backgrounds, values, and preferences. We help brands connect with various demographic groups through culturally relevant campaigns.',
    category: 'Marketing Strategies',
  },
  {
    question: 'How do you approach web development for businesses?',
    answer:
      'We build scalable, responsive websites tailored to your business needs. Our approach includes user experience (UX) design, front-end and back-end development, and performance optimization to ensure your site is fast, secure, and visually appealing.',
    category: 'Web Development',
  },
  {
    question: 'What is digital marketing, and how can it benefit my business?',
    answer:
      'Digital marketing involves promoting your business online through strategies such as SEO, social media marketing, email campaigns, and paid ads. It helps increase brand visibility, attract potential customers, and boost sales.',
    category: 'Digital Marketing',
  },
  {
    question: 'How does your branding process work?',
    answer:
      'Our branding process starts with understanding your business, target audience, and goals. We then create a unique brand identity, including logos, color schemes, and messaging that resonates with your customers and sets you apart from competitors.',
    category: 'Branding',
  },
  {
    question: 'What is lifecycle marketing?',
    answer:
      'Lifecycle marketing focuses on engaging customers at every stage of their journey—from awareness to purchase and beyond. We help businesses create strategies to nurture leads, convert them into customers, and retain them long-term.',
    category: 'Marketing Strategies',
  },
  {
    question:
      'What is an Agency of Record (AOR), and how can it benefit my business?',
    answer:
      'An Agency of Record (AOR) is a long-term partnership where we manage all aspects of your marketing, from strategy to execution. This ensures consistency in your brand’s message and allows for more efficient and integrated marketing efforts.',
    category: 'Marketing Strategies',
  },
  {
    question: 'How do you integrate multicultural marketing into campaigns?',
    answer:
      'We incorporate cultural insights, language, and authentic storytelling to ensure your message resonates with diverse audiences. Our team understands various cultures and adapts campaigns to engage effectively with specific communities.',
    category: 'Marketing Strategies',
  },
  {
    question: 'Can you help with both branding and rebranding?',
    answer:
      'Yes, we assist with both creating new brands and revitalizing existing ones. Our team evaluates your brand’s current standing, identifies areas for improvement, and implements strategies that align with your vision and audience.',
    category: 'Branding',
  },
  {
    question:
      'What industries do you specialize in for web development and marketing?',
    answer:
      'We work across a wide range of industries, tailoring our solutions to meet the unique needs of each. Our expertise allows us to adapt to any sector, ensuring seamless user experiences and impactful marketing strategies that align with your business goals.',
    category: 'Web Development',
  },
  {
    question: 'Do you offer ongoing support after launching a website?',
    answer:
      'Yes, we offer post-launch support, including website maintenance, security updates, performance monitoring, and enhancements. Our goal is to ensure your website continues to operate smoothly and meets your business objectives.',
    category: 'Web Development',
  },
  {
    question: 'What platforms do you specialize in for digital marketing?',
    answer:
      'We specialize in various platforms, including Google Ads, Facebook, Instagram, LinkedIn, TikTok, and email marketing tools like Mailchimp. We tailor our approach based on where your target audience is most active.',
    category: 'Digital Marketing',
  },
  {
    question: 'How do you measure the success of digital marketing campaigns?',
    answer:
      'We use key performance indicators (KPIs) such as website traffic, conversion rates, return on investment (ROI), and engagement metrics. We provide regular reports to track progress and adjust strategies as needed.',
    category: 'Digital Marketing',
  },
  {
    question: 'Can you help with both online and offline branding?',
    answer:
      'Absolutely. We create cohesive branding strategies that work across digital and physical spaces, ensuring your brand’s presence is strong both online and offline.',
    category: 'Branding',
  },
  {
    question: 'What tools and technologies do you use for web development?',
    answer:
      'We utilize a range of website design technologies tailored to your project requirements. Our preferred tools include Framer and Webflow, known for their advanced capabilities. For more complex projects, we also employ React.js frameworks and other cutting-edge technologies to deliver high-performance, scalable solutions.',
    category: 'Web Development',
  },
  {
    question: 'How do you determine pricing for your services?',
    answer:
      'We determine pricing based on a thorough analysis of your project’s scope, complexity, and specific requirements. After assessing your needs, we provide a detailed estimate. Once you approve the value and scope, we proceed with the project.',
    category: 'Pricing & Process',
  },
  {
    question:
      'What is the process for starting a new project with your agency?',
    answer:
      'Our process begins with a detailed analysis of your project to understand your objectives and requirements. We then create a customized estimate based on this analysis. Once you are satisfied with the proposed value and scope, we will initiate the project and work closely with you to achieve your goals.',
    category: 'Pricing & Process',
  },
  {
    question: 'Are there any additional costs I should be aware of?',
    answer:
      'Our estimates cover the agreed-upon scope of work. However, if additional requirements or changes arise during the project, we will discuss any potential adjustments to the cost with you before proceeding. Transparency is key to ensuring you are fully informed throughout the process.',
    category: 'Pricing & Process',
  },
  {
    question: 'Do you offer payment plans or financing options?',
    answer:
      'We offer flexible payment plans tailored to the needs of your project. Payment terms are outlined in the project proposal and can be adjusted based on your preferences and budget. Please discuss your payment needs with us, and we’ll work to accommodate them.',
    category: 'Pricing & Process',
  },
  {
    question:
      'What sets your agency apart from other digital marketing agencies?',
    answer: 'We are just too good at what we do.',
    category: 'Other',
  },
];

const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isAllExpanded, setIsAllExpanded] = useState<boolean>(false);

  const categories = useMemo(() => {
    const cats = [
      'All',
      ...Array.from(new Set(faqData.map((item) => item.category))),
    ];
    return cats.sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredFAQs = useMemo(() => {
    return faqData.filter(
      (faq) =>
        (selectedCategory === 'All' || faq.category === selectedCategory) &&
        (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedCategory]);

  const toggleAccordion = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index.toString())
        ? prev.filter((i) => i !== index.toString())
        : [...prev, index.toString()]
    );
  };

  const toggleAllAccordions = () => {
    if (isAllExpanded) {
      setExpandedItems([]);
    } else {
      setExpandedItems(filteredFAQs.map((_, index) => index.toString()));
    }
    setIsAllExpanded(!isAllExpanded);
  };

  useEffect(() => {
    setExpandedItems([]);
    setIsAllExpanded(false);
  }, [searchTerm, selectedCategory]);

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

        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative mb-4">
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
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                className="text-xs md:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <Button
              onClick={toggleAllAccordions}
              variant="outline"
              className="text-sm"
            >
              {isAllExpanded ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  Collapse All
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Expand All
                </>
              )}
            </Button>
          </div>
          <Accordion
            type="multiple"
            value={expandedItems}
            onValueChange={setExpandedItems}
            className="w-full space-y-4"
          >
            {filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={index.toString()}
                className="bg-white dark:bg-secondaryBackground"
              >
                <AccordionTrigger
                  onClick={() => toggleAccordion(index)}
                  className="text-start text-sm md:text-base px-6 py-4 text-gray-900 dark:text-white dark:hover:bg-[rgb(0,87,255)]"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-blue-500 mb-1">
                      {faq.category}
                    </span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {filteredFAQs.length === 0 && (
          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            No matching questions found. Please try a different search term or
            category.
          </p>
        )}
      </div>
      <div className="mt-4 text-center">
        <Button
          asChild
          size="sm"
          className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] py-2 bg-[rgb(0,87,255)] rounded-md text-white font-light transition duration-200 ease-linear tracking-normal"
        >
          <a
            href="mailto:example@example.com?subject=Inquiry&body=Hi%2C%0D%0A%0D%0A%5BTell%20us%20about%20your%20vision%20here%5D%0D%0A%0D%0A%5BDetails%20that%20could%20help%20us%20understand%20more%5D%0D%0A1.%20What%27s%20your%20top%20objective%3F%0D%0A2.%20When%20do%20you%20want%20it%20completed%3F%0D%0A3.%20What%27s%20your%20estimated%20investment%20budget%3F%0D%0A%0D%0AThe%20more%20details%20you%20can%20provide%2C%20the%20better%20we%20can%20understand%20your%20needs%20and%20see%20if%20we%27re%20a%20good%20fit.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get started by sending an inquiry email"
          >
            Ask a Question
            <MessageCircleQuestion className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FAQSection;
