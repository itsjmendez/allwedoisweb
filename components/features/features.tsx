import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Languages,
  CodeXml,
  Megaphone,
  Eye,
  HeartHandshake,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

const features = [
  {
    title: 'Multicultural',
    href: '/services/multicultural-marketing',
    description: 'Resonate with your Spanish-speaking customers.',
    catchyLabel: 'Looking to reach Spanish-speaking audiences?',
    icon: Languages,
  },
  {
    title: 'Development',
    href: '/services/web-services',
    description: 'Upgrade your online presence.',
    catchyLabel: 'Not happy with your website? ',
    icon: CodeXml,
  },
  {
    title: 'Digital',
    href: '/services/digital-marketing',
    description: 'Manage your narrative online and earn loyalty.',
    catchyLabel: 'Not getting enough reach?',
    icon: Megaphone,
  },
  {
    title: 'Branding',
    href: '/services/branding',
    description: 'Make your brand unique.',
    catchyLabel: 'Need help telling your story?',
    icon: Eye,
  },
  {
    title: 'Lifecycle',
    href: '/services/lifecycle',
    description: 'Win back customers with CRM optimization.',
    catchyLabel: 'Need to boost revenue with your CRM?',
    icon: HeartHandshake,
  },
  {
    title: 'AOR',
    href: '/services/aor',
    description: 'Grow together with your agency of record.',
    catchyLabel: 'Need a team to grow your business?',
    icon: TrendingUp,
  },
];

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-white">
      <div className="container">
        <div className="flex flex-col md:items-center justify-center space-y-4 md:text-center">
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[rgb(0,87,255)]">
              Services
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Elevate Your Brand
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our full spectrum of services empowers your business to thrive in
              the digital landscape. Whether it&apos;s multicultural marketing
              or end-to-end agency solutions, we deliver the tools and expertise
              you need to succeed.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-4 bg-[rgb(0,87,255)] text-primary hover:bg-primary/90 hover:text-primary-foreground w-fit"
          >
            <Link href={'#'}>Explore Our Services</Link>
          </Button>
        </div>
        <div className="mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white bg-opacity-20 border overflow-hidden">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 bg-secondaryBackground flex flex-col h-full"
                >
                  <div className="flex-grow space-y-4">
                    <Icon className="h-10 w-10 text-[rgb(0,87,255)]" />
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.catchyLabel}
                    </p>
                    <p className="text-gray-300">{feature.description}</p>
                    <Link
                      href={feature.href}
                      className="flex items-center text-[rgb(0,87,255)] text-sm w-fit"
                    >
                      Learn More{' '}
                      <ArrowUpRight
                        size={16}
                        className="text-[rgb(0,87,255)]"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
