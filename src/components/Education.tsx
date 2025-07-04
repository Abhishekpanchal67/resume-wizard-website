
export const Education = () => {
  return (
    <section className="py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
        <div className="w-16 h-1 bg-white mb-8"></div>
      </div>

      <div className="border-l-2 border-white/20 pl-8">
        <div className="relative">
          <div className="absolute -left-10 w-4 h-4 bg-white rounded-full"></div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Bachelor of Engineering (Information Technology)
            </h3>
            <p className="text-lg text-gray-300 font-medium mb-2">
              Ramrao Adik Institute of Technology (University of Mumbai)
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-400 mb-2 sm:mb-0">July 2017 - May 2022</p>
              <div className="text-right">
                <p className="text-lg font-semibold text-white">CGPA: 7.31</p>
                <p className="text-sm text-gray-400">First Class</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
