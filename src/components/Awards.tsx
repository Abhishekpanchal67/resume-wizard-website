
export const Awards = () => {
  const awards = [
    {
      title: "Eyed Star Award",
      description: "Honored with the 'Eyed Star' Award for delivering high-impact results with limited resources."
    },
    {
      title: "One Person Army Award",
      description: "Recognized as the 'One Person Army' in the Eyed Annual Awards for exceptional individual contribution and ownership across multiple functions."
    }
  ];

  return (
    <section className="py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
        <div className="w-16 h-1 bg-gray-900 mb-8"></div>
      </div>

      <div className="space-y-8">
        {awards.map((award, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-8">
            <div className="relative">
              <div className="absolute -left-10 w-4 h-4 bg-gray-900 rounded-full"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-700 leading-relaxed">{award.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
