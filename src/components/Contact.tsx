
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16">
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-4">Let's Connect</CardTitle>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to drive growth and build exceptional products together? 
            Let's discuss how we can create value for your organization.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('mailto:abhishekpanchal7@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              abhishekpanchal7@gmail.com
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('tel:+919667749075')}
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 9667749075
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
