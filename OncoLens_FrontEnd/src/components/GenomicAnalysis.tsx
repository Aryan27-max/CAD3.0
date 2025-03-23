import React, { useState } from 'react';

const GenomicAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please upload a VCF or FASTA file");

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/analyze-mutations`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Error analyzing mutations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Genomic Mutation Analysis</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleSubmit} className="bg-indigo-600 text-white px-4 py-2 rounded">
        {loading ? 'Analyzing...' : 'Upload & Analyze'}
      </button>
      {result && (
        <div className="mt-4">
          <h3 className="font-medium">Result:</h3>
          <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GenomicAnalysis;
