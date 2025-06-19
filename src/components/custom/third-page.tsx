import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  IconLayoutDashboard,
  IconShoppingCart,
  IconUserCheck,
  IconSchool,
} from "@tabler/icons-react";
import { SparklesText } from "../magicui/sparkles-text";

const solutions = [
  {
    title: "eCommerce App & Website",
    description:
      "Custom-built online stores with payment integration, admin panel, and mobile-first UX design.",
    icon: <IconShoppingCart className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Online Learning Platform",
    description:
      "Feature-rich portals for courses, video uploads, tests, and student tracking.",
    icon: <IconSchool className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Hiring & Recruitment Systems",
    description:
      "Resume tracking, automated shortlisting, candidate pipelines — built for staffing firms.",
    icon: <IconUserCheck className="h-6 w-6 text-yellow-600" />,
  },
  {
    title: "Admin Dashboards & CRMs",
    description:
      "Scalable internal tools to manage leads, sales, employees, and more.",
    icon: <IconLayoutDashboard className="h-6 w-6 text-purple-600" />,
  },
];

const ThirdPage = () => {
  return (
    <div className="w-full min-h-screen py-20 px-4 md:px-12">
      <div className="text-center mb-16">
        <SparklesText className="text-4xl font-bold tracking-tight">
          What We Can Build For You
        </SparklesText>
        <p className="mt-4 text-sm text-primary/50 max-w-2xl mx-auto">
          Technisoul crafts modern digital solutions tailored for startups,
          SMEs, and growing enterprises.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 relative z-10">
          {solutions.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div>{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">
            Have an idea in mind?
          </h3>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
