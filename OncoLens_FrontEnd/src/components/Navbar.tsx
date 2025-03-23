// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-gray-200 p-4 shadow-md">
      <Link to="/" className="font-semibold hover:text-blue-600">Home</Link>
      <Link to="/early-detection" className="hover:text-blue-600">Early Detection</Link>
      <Link to="/genomic-analysis" className="hover:text-blue-600">Genomic Analysis</Link>
      <Link to="/drug-response" className="hover:text-blue-600">Drug Response</Link>
    </nav>
  );
};

export default Navbar;
