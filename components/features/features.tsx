import Link from 'next/link';
import {
  Languages,
  CodeXml,
  Megaphone,
  Eye,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react';

export default function Features() {
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
      description: 'Upgrade your site into a customer conversion engine.',
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
      description: 'Make your brand unique with storytelling and design.',
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
      description:
        'We grow together by working together as your agency of record.',
      catchyLabel: 'Need a team to grow your business?',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br">
      <div className="container">
        <div className="md:text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Our solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070f3] to-[#00cfff]">
              Achieving Your Goals
            </span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto">
            Our team can support your marketing needs across all fronts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: any }) {
  return (
    <div className="relative p-0.5 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)]">
      <div className="relative p-6 rounded-lg transition-all duration-300 ease-in-out flex flex-col gap-4 justify-between">
        <div>
          <feature.icon className="h-10 w-10" />
        </div>
        <h3 className="text-xl font-semibold">{feature.title}</h3>
        <p>{feature.description}</p>
        <Link href={feature.href} className="flex items-center">
          Learn more <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
