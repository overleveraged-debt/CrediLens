import { cn } from "../lib/utils";
import {
  FileText,
  Zap,
  Shield,
  Download,
  BarChart3,
  Clock,
  Check,
  Users,
} from "lucide-react";

export function InteractiveFeatures() {
  const features = [
    {
      title: "Smart PDF Reading",
      description:
        "Upload any bank statement format - PDFs, images, scanned docs. Our AI reads them all.",
      icon: <FileText />,
    },
    {
      title: "Instant Analysis",
      description:
        "Get salary patterns, EMI tracking, and financial insights in seconds, not hours.",
      icon: <Zap />,
    },
    {
      title: "Bank-Grade Security",
      description:
        "Your data is encrypted and processed securely. We never store sensitive information.",
      icon: <Shield />,
    },
    {
      title: "Export Ready Reports",
      description:
        "Generate banker-ready summaries and detailed CSV exports with one click.",
      icon: <Download />,
    },
    {
      title: "Financial Insights",
      description: "Track income patterns, expense categories, and cash flow trends automatically.",
      icon: <BarChart3 />,
    },
    {
      title: "Lightning Fast",
      description:
        "Process months of statements in under 30 seconds. No more manual data entry.",
      icon: <Clock />,
    },
    {
      title: "99.9% Accuracy",
      description:
        "Our AI achieves near-perfect accuracy in transaction extraction and categorization.",
      icon: <Check />,
    },
    {
      title: "Built for Finance Professionals",
      description: "Designed specifically for Indian financial professionals and DSAs.",
      icon: <Users />,
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
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white/60">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
