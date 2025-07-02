
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export const Summary = () => {
  return (
    <section className="py-16">
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
            <User className="w-6 h-6 mr-3 text-blue-600" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed text-lg">
            Product and growth specialist with a proven track record of driving full-scale product development, 
            performance marketing, and process optimization. Proven success in launching scalable features, reducing 
            CAC, and generating high-revenue growth. Experienced in managing cross-functional teams, coordinating 
            with IT, BIU, and marketing stakeholders, and executing data-driven product strategies. Strong command of 
            campaign management, SOP implementation, and competitive benchmarking. Adept at leveraging tools like 
            SQL, Figma, and marketing automation platforms to improve customer experience and business outcomes.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
