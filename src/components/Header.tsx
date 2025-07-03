
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold text-white tracking-tight">
            {/* Name removed from header */}
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => window.open('mailto:abhishekpanchal7@gmail.com')}
            >
              <Mail className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => window.open('tel:+919667749075')}
            >
              <Phone className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-white/5"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
