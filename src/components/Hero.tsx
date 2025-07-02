
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Abhishek Panchal
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Product and growth specialist with a proven track record of driving full-scale product development, 
          performance marketing, and process optimization
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm">Product Management</Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">Growth Marketing</Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">Performance Marketing</Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">Cross-functional Leadership</Badge>
        </div>
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">50%+</div>
              <div className="text-sm text-gray-600">SOPs Implemented</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">35%</div>
              <div className="text-sm text-gray-600">CAC Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">30K+</div>
              <div className="text-sm text-gray-600">Leads Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">₹45L+</div>
              <div className="text-sm text-gray-600">Revenue Impact</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
