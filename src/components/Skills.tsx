
export const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Product Development", "PDLC", "Roadmap Creation", "BRD/PRD", "Wireframing", "User Journey Mapping", "UAT/QA", "Web Development", "Cross-functional Coordination"]
    },
    {
      title: "Growth & Marketing",
      skills: ["Go-To-Market Strategy", "User Acquisition", "Retention", "Revenue Generation", "Content Creation", "Facebook Ads", "Marketing Automation", "Google Ads", "SEO"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Google Analytics", "Search Console", "PostMaster", "JIRA", "Freshdesk", "SQL", "Whimsical", "Figma", "Postman", "Hubspot", "Looker Studio", "Mixpanel", "MicroStrategy"]
    }
  ];

  return (
    <section className="py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
        <div className="w-16 h-1 bg-gray-900 mb-8"></div>
      </div>
      
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="text-gray-700 py-2">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
