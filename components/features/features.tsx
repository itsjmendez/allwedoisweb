import Link from 'next/link';
import {
  Languages,
  CodeXml,
  Megaphone,
  Eye,
  HeartHandshake,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Multicultural',
      href: '/services/multicultural-marketing',
      description: 'Resonate with your Spanish-speaking customers.',
      catchyLabel: 'Looking to reach Spanish-speaking audiences?',
      icon: Languages,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Development',
      href: '/services/web-services',
      description: 'Upgrade your online presence.',
      catchyLabel: 'Not happy with your website? ',
      icon: CodeXml,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Digital',
      href: '/services/digital-marketing',
      description: 'Manage your narrative online and earn loyalty.',
      catchyLabel: 'Not getting enough reach?',
      icon: Megaphone,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Branding',
      href: '/services/branding',
      description: 'Make your brand unique.',
      catchyLabel: 'Need help telling your story?',
      icon: Eye,
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Lifecycle',
      href: '/services/lifecycle',
      description: 'Win back customers with CRM optimization.',
      catchyLabel: 'Need to boost revenue with your CRM?',
      icon: HeartHandshake,
      color: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'AOR',
      href: '/services/aor',
      description: 'Grow together with your agency of record.',
      catchyLabel: 'Need a team to grow your business?',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="md:text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl mb-4">
            Our solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              achieving your goals.
            </span>
          </h2>
          <p className="md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
    <div
      className={`relative p-0.5 overflow-hidden rounded-lg bg-gradient-to-br ${feature.color} shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative p-6 rounded-lg bg-gray-900 h-full flex flex-col justify-between transition-all duration-300 ease-in-out hover:bg-opacity-90 dark:hover:bg-opacity-90">
        <div>
          <feature.icon className="h-12 w-12 mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300" />
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {feature.description}
          </p>
        </div>
        <Link
          href={feature.href}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
