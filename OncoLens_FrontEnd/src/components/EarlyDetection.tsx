import React, { useState } from 'react';

const EarlyDetection = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/analyze-image`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Error while analyzing image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Tumor Image Detection</h2>
      <input type="file" onChange={handleImageChange} className="mb-4" />
      <button onClick={handleSubmit} className="bg-purple-600 text-white px-4 py-2 rounded">
        {loading ? 'Detecting...' : 'Upload & Analyze'}
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

export default EarlyDetection;
