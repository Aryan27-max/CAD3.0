import  { FileText, Server, Clock, Layers } from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-8 w-8 text-primary-600" />,
    title: 'Early Diagnosis',
    description: 'AI-powered image recognition to identify cancer patterns at early stages.'
  },
  {
    icon: <Server className="h-8 w-8 text-primary-600" />,
    title: 'Genomic Analysis',
    description: 'Advanced sequencing analysis to identify genetic markers and mutations.'
  },
  {
    icon: <Layers className="h-8 w-8 text-primary-600" />,
    title: 'Drug Response',
    description: 'Predict patient-specific responses to various treatment options.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary-600" />,
    title: 'Drug Discovery',
    description: 'Accelerate drug development through AI-driven molecular simulations.'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Research Tools</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OncoLens provides a comprehensive suite of tools for cancer researchers 
            and healthcare providers to advance cancer research and treatment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxjYW5jZXIlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBtaWNyb3Njb3BlfGVufDB8fHx8MTc0MjYzMjg2MXww&ixlib=rb-4.0.3" 
            alt="Cancer vaccine research" 
            className="mx-auto rounded-lg shadow-lg max-w-4xl w-full object-cover h-80"
          />
        </div>
      </div>
    </section>
  );
}
 