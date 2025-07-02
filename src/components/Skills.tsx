
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Settings } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: <Briefcase className="w-5 h-5" />,
      skills: ["Product Development", "PDLC", "Roadmap Creation", "BRD/PRD", "Wireframing", "User Journey Mapping", "UAT/QA", "Web Development", "Cross-functional Coordination"]
    },
    {
      title: "Growth & Marketing",
      icon: <Settings className="w-5 h-5" />,
      skills: ["Go-To-Market Strategy", "User Acquisition", "Retention", "Revenue Generation", "Content Creation", "Facebook Ads", "Marketing Automation", "Google Ads", "SEO"]
    },
    {
      title: "Tools & Technologies",
      icon: <Code className="w-5 h-5" />,
      skills: ["Google Analytics", "Search Console", "PostMaster", "JIRA", "Freshdesk", "SQL", "Whimsical", "Figma", "Postman", "Hubspot", "Looker Studio", "Mixpanel", "MicroStrategy"]
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive toolkit for driving product growth and business success
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                <div className="p-2 bg-blue-100 rounded-lg mr-3 text-blue-600">
                  {category.icon}
                </div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-sm hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
