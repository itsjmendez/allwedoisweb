import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  return (
    <section className="py-16 md:py-24 lg:py-32 ">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold md:text-center mb-12">
          Frequently asked{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070f3] to-[#00cfff]">
            questions
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-start">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
