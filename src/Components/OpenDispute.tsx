import React from 'react';

type OpenDisputeProps = {
  title: string;
  // Add other properties as needed, such as IDs, dates, etc.
};

const OpenDispute: React.FC<OpenDisputeProps> = ({ title }) => {
  return (
    <button className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4" ref={undefined}>
      <div className="bg-gray-200 h-32 w-full mb-4"></div> {/* Placeholder for an image */}
      <div className="font-bold text-xl mb-2">{title}</div>
    </button>
  );
};

export default OpenDispute;
