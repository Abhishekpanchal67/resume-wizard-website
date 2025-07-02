
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Growth Manager 1 - Product",
      company: "FlexiReliance Retail",
      duration: "Nov 2022 - Present",
      location: "Mumbai, Maharashtra",
      achievements: [
        "Led product roadmaps (BRD/PRD), collaborated with cross-functional teams to deliver features on time",
        "Acted as product custodian, monitoring platform performance and flagging gaps to senior management",
        "Ensured 50%+ were followed across QA, deployment, and daily operations",
        "Worked with IT to resolve system issues from the field in a time-bound manner",
        "Implemented SOP processes across 15+ domains, improving efficiency and meeting business goals",
        "Executed digital campaigns (Meta/Google), reducing CAC by 35% and acquiring 30,000+ leads",
        "Ran email, WhatsApp, and SEO campaigns, driving 385K clicks and 23.6M impressions",
        "Leveraged SQL for advanced analytics and A/B testing to optimize conversion rates",
        "Partnered with BIU and analytics to identify new customer segments and cross-sell potential",
        "Conducted competitor benchmarking and trained teams on new product features and flows",
        "Managed development and DevOps workflows using JIRA, ensuring timely sprint execution and cross-functional alignment"
      ]
    },
    {
      title: "Sales Business Development Associate",
      company: "Scaler",
      duration: "June 2022 - Nov 2022",
      location: "Bangalore, Karnataka",
      achievements: [
        "Reached out to prospects and guided them through the existing tech landscape",
        "Achieved a monthly revenue of ₹2 Lacs",
        "Managed the entire sales life cycle, from engaging with a large volume of well-qualified leads to final conversion, resulting in enrollment in the program",
        "Counseled experienced professionals via call and email, advising on courses that would best support their career progression and supporting the optimal option"
      ]
    },
    {
      title: "Business Development Executive",
      company: "USHaan Integrated Solutions Private Limited",
      duration: "Sept 2020 - June 2022",
      location: "Mumbai, Maharashtra",
      achievements: [
        "Researched and documented data for over 3,000 retail shops across Mumbai to identify digital transformation opportunities",
        "Assisted local retailers in adopting software solutions to bring their businesses online and improve operational efficiency",
        "Conducted 1,000+ product demonstrations across Mumbai and Ahmedabad, showcasing platform capabilities and benefits to potential clients",
        "Successfully onboarded 180+ stores, contributing to a total revenue impact of ₹45 lakhs",
        "Successfully onboarded 180+ stores, contributing to a total revenue impact of ₹45 lakhs"
      ]
    },
    {
      title: "Founder",
      company: "Toppg Productions",
      duration: "April 2020 - Dec 2021",
      location: "Mumbai, Maharashtra",
      achievements: [
        "Single-handedly built and managed the company's website, overseeing both product development and content creation",
        "Led digital strategy and execution for both internal and client projects, including brands like Nykan, Bira 91, and D-SHOCK",
        "Managed end-to-end influencer marketing campaigns by partnering with content creators and collaborating directly with brand teams",
        "Managed end-to-end digital marketing for clients, including performance marketing, influencer outreach, and content strategy",
        "Helped clients launch and scale online storefronts, ensuring smooth setup and optimized customer experience",
        "Achieved total revenue of ₹1.5 million within the first 9 months through combined service offerings and client success"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A track record of driving growth and delivering results across different industries
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="flex items-center text-xl font-bold text-gray-900 mb-2">
                    <Briefcase className="w-5 h-5 mr-3 text-blue-600" />
                    {exp.title}
                  </CardTitle>
                  <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                  <Badge variant="outline" className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.duration}
                  </Badge>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
