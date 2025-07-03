
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <div className="w-16 h-1 bg-white mb-8"></div>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          Ready to drive growth and build exceptional products together? 
          Let's discuss how we can create value for your organization.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="flex items-center justify-center px-6 py-3 text-white border-white/20 hover:bg-white/5 bg-transparent"
          onClick={() => window.open('mailto:abhishekpanchal7@gmail.com')}
        >
          <Mail className="w-5 h-5 mr-2" />
          abhishekpanchal7@gmail.com
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="flex items-center justify-center px-6 py-3 text-white border-white/20 hover:bg-white/5 bg-transparent"
          onClick={() => window.open('tel:+919667749075')}
        >
          <Phone className="w-5 h-5 mr-2" />
          +91 9667749075
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="flex items-center justify-center px-6 py-3 text-white border-white/20 hover:bg-white/5 bg-transparent"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn Profile
        </Button>
      </div>
    </section>
  );
};
