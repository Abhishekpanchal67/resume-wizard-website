
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Photo and Name */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/db01d657-0636-4f0c-bff4-3b3fadc904fc.png" 
                alt="Abhishek Panchal" 
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/10"
              />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center lg:text-left">
              Abhishek Panchal
            </h1>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-white/5 p-3"
                onClick={() => window.open('mailto:abhishekpanchal7@gmail.com')}
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-white/5 p-3"
                onClick={() => window.open('tel:+919667749075')}
              >
                <Phone className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/5 p-3"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Product & Growth
                <br />
                <span className="text-gray-400">Specialist</span>
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
              Driving full-scale product development, performance marketing, and process optimization 
              with proven success in launching scalable features and generating high-revenue growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">50%+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">SOPs Implemented</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">35%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">CAC Reduction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">30K+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Leads Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">₹45L+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Revenue Impact</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20">Product Management</span>
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20">Growth Marketing</span>
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20">Performance Marketing</span>
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20">Cross-functional Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
