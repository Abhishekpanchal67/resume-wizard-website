
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Academic foundation in technology and engineering
        </p>
      </div>

      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold text-gray-900 mb-2">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
            Bachelor of Engineering (Information Technology)
          </CardTitle>
          <p className="text-lg font-semibold text-blue-600">
            Ramrao Adik Institute of Technology (University of Mumbai)
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <Badge variant="outline" className="flex items-center w-fit">
                <Calendar className="w-4 h-4 mr-1" />
                July 2017 - May 2022
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">CGPA: 7.31</p>
              <p className="text-sm text-gray-500">First Class</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
