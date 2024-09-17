import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function Component() {
  const processes = [
    {
      title: 'Assessment',
      description:
        'We thoroughly analyze your current situation and goals, identifying key areas for improvement and growth opportunities.',
      details: [
        'Current Analysis',
        'Goal Setting',
        'Opportunity Identification',
      ],
    },
    {
      title: 'Recommendation',
      description:
        'Our experts devise a tailored strategy for your success, outlining specific actions and timelines to achieve your objectives.',
      details: ['Strategy Development', 'Action Planning', 'Timeline Creation'],
    },
    {
      title: 'Implementation',
      description:
        'We execute the plan with precision and constant optimization, ensuring that every step moves you closer to your desired outcomes.',
      details: ['Execution', 'Monitoring', 'Optimization'],
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 md:text-center mb-10">
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[rgb(0,87,255)]">
              Process
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              The Journey
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a proven three-step approach to drive your success.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
          {processes.map((process, index) => (
            <div
              key={index}
              className="relative overflow-hidden border bg-background"
            >
              <div className="absolute top-0 left-0 w-8 h-8 bg-[rgb(0,87,255)] flex items-center justify-center font-bold border-r border-b z-10">
                {index + 1}
              </div>
              <div className="h-[300px] rounded-md transition-colors relative">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-[auto,1fr,auto]">
                  <div className="col-span-2 border-b border-dashed p-2">
                    <h3 className="text-lg font-bold text-center">
                      {process.title}
                    </h3>
                  </div>
                  <div className="row-span-2 border-r border-dashed p-2 bg-secondaryBackground">
                    <p className="text-sm text-muted-foreground mt-2">
                      {process.description}
                    </p>
                  </div>
                  <div className="p-2">
                    <h4 className="font-semibold text-sm mb-2">
                      Key Components:
                    </h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside font-mono">
                      {process.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-2 border-t border-dashed p-2">
                    <p className="text-xs text-muted-foreground italic">
                      Step {index + 1} of our proven process
                    </p>
                  </div>
                </div>
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
              Take the First Step <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
