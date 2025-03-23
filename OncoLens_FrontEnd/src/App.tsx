// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EarlyDetection from './components/EarlyDetection';
import GenomicAnalysis from './components/GenomicAnalysis';
import DrugResponse from './components/DrugResponse';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/early-detection" element={<EarlyDetection />} />
        <Route path="/genomic-analysis" element={<GenomicAnalysis />} />
        <Route path="/drug-response" element={<DrugResponse />} />
      </Routes>
    </div>
  );
}

export default App;
