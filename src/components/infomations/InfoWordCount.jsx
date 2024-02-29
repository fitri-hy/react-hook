import React, { useState, useEffect } from 'react';

const InfoWordCount = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('data/DataWordCount.txt')
      .then(response => response.text())
      .then(data => setData(data));
  }, []);

  return (
    <div className="text-gray-600 bg-white p-4">
        <pre style={{ whiteSpace: 'pre-wrap' }}>{data}</pre>
    </div>

  );
};

export default InfoWordCount;
