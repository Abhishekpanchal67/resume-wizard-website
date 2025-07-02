
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Abhishek Panchal</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Mail className="w-4 h-4 mr-2" />
              abhishekpanchal7@gmail.com
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4 mr-2" />
              +91 9667749075
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
