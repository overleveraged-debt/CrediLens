import { cn } from "../lib/utils";
import {
  IconFileText,
  IconBolt,
  IconShield,
  IconDownload,
  IconChartBar,
  IconClock,
  IconCheck,
  IconUsers,
} from "@tabler/icons-react";

export function InteractiveFeatures() {
  const features = [
    {
      title: "Smart PDF Reading",
      description:
        "Upload any bank statement format - PDFs, images, scanned docs. Our AI reads them all.",
      icon: <IconFileText />,
    },
    {
      title: "Instant Analysis",
      description:
        "Get salary patterns, EMI tracking, and financial insights in seconds, not hours.",
      icon: <IconBolt />,
    },
    {
      title: "Bank-Grade Security",
      description:
        "Your data is encrypted and processed securely. We never store sensitive information.",
      icon: <IconShield />,
    },
    {
      title: "Export Ready Reports",
      description:
        "Generate banker-ready summaries and detailed CSV exports with one click.",
      icon: <IconDownload />,
    },
    {
      title: "Financial Insights",
      description: "Track income patterns, expense categories, and cash flow trends automatically.",
      icon: <IconChartBar />,
    },
    {
      title: "Lightning Fast",
      description:
        "Process months of statements in under 30 seconds. No more manual data entry.",
      icon: <IconClock />,
    },
    {
      title: "99.9% Accuracy",
      description:
        "Our AI achieves near-perfect accuracy in transaction extraction and categorization.",
      icon: <IconCheck />,
    },
    {
      title: "Built for DSAs",
      description: "Designed specifically for Indian DSAs and financial professionals.",
      icon: <IconUsers />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
