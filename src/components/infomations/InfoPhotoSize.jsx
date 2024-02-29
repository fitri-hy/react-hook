import React, { useState, useEffect } from 'react';

const InfoPhotoSize = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('data/DataPhotoSize.txt')
      .then(response => response.text())
      .then(data => setData(data));
  }, []);

  return (
    <div className="text-gray-600 bg-white p-4">
        <pre style={{ whiteSpace: 'pre-wrap' }}>{data}</pre>
    </div>

  );
};

export default InfoPhotoSize;
