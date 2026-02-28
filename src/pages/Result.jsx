import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Loader } from '../components/Loader';
import { ResultCard } from '../components/ResultCard';
import { getDesign } from '../services/api';

export const Result = () => {
  const { id } = useParams();
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesign = async () => {
      if (!id) return;
      try {
        const data = await getDesign(id);
        setDesign(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDesign();
  }, [id]);

  if (loading) return <Loader message="Synthesizing PCB Design..." />;
  if (!design) return <div className="loader-container text-zinc-400">Design Not Found</div>;

  return (
    <div className="result-page">
      <div className="result-container">
        <div className="result-header">
          <div>
            <Link to="/design" className="back-link">
              <ArrowLeft className="w-4 h-4" /> Back to Generator
            </Link>
            <h1 className="result-title">Design Result: <span className="result-title-accent">{design.data.topology} Regulator</span></h1>
          </div>
          <button className="btn-download">
            <Download className="w-4 h-4" /> Download KiCad Project
          </button>
        </div>
        <ResultCard design={design} />
      </div>
    </div>
  );
};
