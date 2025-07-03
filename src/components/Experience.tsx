
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
        "Implemented SOP processes across 15+ domains, improving efficiency and meeting business goals",
        "Executed digital campaigns (Meta/Google), reducing CAC by 35% and acquiring 30,000+ leads",
        "Ran email, WhatsApp, and SEO campaigns, driving 385K clicks and 23.6M impressions"
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
        "Managed the entire sales life cycle, from engaging with a large volume of well-qualified leads to final conversion"
      ]
    },
    {
      title: "Business Development Executive",
      company: "USHaan Integrated Solutions Private Limited",
      duration: "Sept 2020 - June 2022",
      location: "Mumbai, Maharashtra",
      achievements: [
        "Researched and documented data for over 3,000 retail shops across Mumbai",
        "Conducted 1,000+ product demonstrations across Mumbai and Ahmedabad",
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
        "Achieved total revenue of ₹1.5 million within the first 9 months through combined service offerings and client success"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Work Experience</h2>
        <div className="w-16 h-1 bg-gray-900 mb-8"></div>
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-8 pb-8">
            <div className="relative">
              <div className="absolute -left-10 w-4 h-4 bg-gray-900 rounded-full"></div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-gray-700 leading-relaxed">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
