import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconDeviceMobileCode,
  IconChartLine,
  IconUsers,
  IconArrowWaveRightUp,
  IconLayoutDashboard,
  IconCircleCheck,
} from "@tabler/icons-react";
import Image from "next/image";

const Skeleton = ({ src }: { src: string }) => (
  <div className="flex relative flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={src} alt="image" fill className="object-fill rounded-md" />
  </div>
);

const items = [
  {
    title: "Software Development",
    description: "Custom web and mobile app solutions tailored to your needs.",
    header: <Skeleton src="/se.jpg" />,
    icon: <IconDeviceMobileCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Digital Marketing",
    description: "SEO, social media, and PPC campaigns that drive results.",
    header: <Skeleton src="/dm.jpg" />,
    icon: <IconChartLine className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "IT Recruitment",
    description: "Find and hire top tech talent for your organization.",
    header: <Skeleton src="/itr.jpg" />,
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Reason you should choose us",
    description:
      "We help startups, SMEs, and enterprises grow 2X faster with smart tech + marketing.",
    header: (
      <div className="flex flex-col justify-center items-start space-y-2 px-6 py-4 h-full">
        <div className="flex items-center space-x-2">
          <IconCircleCheck className="text-green-500 w-5 h-5" />
          <span>95% Client Retention</span>
        </div>
        <div className="flex items-center space-x-2">
          <IconCircleCheck className="text-green-500 w-5 h-5" />
          <span>4 Weeks Avg Delivery Time</span>
        </div>
        <div className="flex items-center space-x-2">
          <IconCircleCheck className="text-green-500 w-5 h-5" />
          <span>50+ Skilled Professionals</span>
        </div>
      </div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UI/UX & Admin Panels",
    description: "User-friendly interfaces and powerful admin dashboards.",
    header: <Skeleton src="/uiux.jpg" />,
    icon: <IconLayoutDashboard className="h-4 w-4 text-neutral-500" />,
  },
];

const SecondPage = () => {
  return (
    <div
      id="service"
      className="w-full min-h-screen flex flex-col items-center px-4 py-16"
    >
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          End-to-End Digital, Tech & Talent Solutions to Accelerate Your
          Business
        </p>
      </div>
      <BentoGrid className="max-w-5xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default SecondPage;
