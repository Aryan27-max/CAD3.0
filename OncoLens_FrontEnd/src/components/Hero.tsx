import  { Database, Activity, Microscope } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Cancer Research Platform
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              OncoLens leverages advanced AI algorithms to accelerate cancer research, 
              improve diagnosis accuracy, and develop personalized treatment strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn btn-primary">Get Started</a>
              <a href="#" className="btn btn-outline">Learn More</a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Database className="h-6 w-6 text-primary-600" />
                <span className="font-medium">Genomic Analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Activity className="h-6 w-6 text-primary-600" />
                <span className="font-medium">Mutation Tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Microscope className="h-6 w-6 text-primary-600" />
                <span className="font-medium">Drug Testing</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576670262660-05cf76d53da3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBtaWNyb3Njb3BlfGVufDB8fHx8MTc0MjYzMjg2MXww&ixlib=rb-4.0.3" 
              alt="Cancer research scientist using microscope" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="font-medium text-sm">Processing 24.5M genomic sequences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 