
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

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
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Recognition for outstanding performance and leadership
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <Card key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-bold text-gray-900">
                <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                  {index === 0 ? <Star className="w-5 h-5 text-yellow-600" /> : <Award className="w-5 h-5 text-yellow-600" />}
                </div>
                {award.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
