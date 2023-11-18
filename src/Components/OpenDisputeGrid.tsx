import React from 'react';
import OpenDispute from './OpenDispute';

// Example type for dispute data, can be expanded as needed
type Dispute = {
  id: number;
  title: string;
};

const OpenDisputesGrid: React.FC = () => {
  // This would be fetched from an API or passed down as props
  const disputes: Dispute[] = [
    { id: 1, title: 'Logo was not as asked' },
    { id: 2, title: 'Logo was not as asked' },
    { id: 3, title: 'Logo was not as asked' },
    { id: 4, title: 'Logo was not as asked' },
    // ... more disputes
  ];

  return (
    <div className="bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-6">Open Disputes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {disputes.map((dispute) => (
          <OpenDispute key={dispute.id} title={dispute.title} />
        ))}
      </div>
    </div>
  );
};

export default OpenDisputesGrid;
