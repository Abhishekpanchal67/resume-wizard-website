
export const Hero = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
              Product & Growth
              <br />
              <span className="text-gray-500">Specialist</span>
            </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Driving full-scale product development, performance marketing, and process optimization 
            with proven success in launching scalable features and generating high-revenue growth.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50%+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">SOPs Implemented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">35%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">CAC Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">30K+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">₹45L+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Revenue Impact</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Product Management</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Growth Marketing</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Performance Marketing</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Cross-functional Leadership</span>
          </div>
        </div>
      </div>
    </section>
  );
};
