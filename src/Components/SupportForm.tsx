import React, { useState, FormEvent } from 'react';
import { Button } from "@mui/material";

type IssueOption = 'milestone' | 'changeIdea' | 'incomplete';

const SupportForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<IssueOption | ''>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Implement your submit logic here
    console.log(selectedOption);
    // You would typically send `selectedOption` to your server or state management
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">What problem are you facing?</h2>
        
        <fieldset className="mb-6">
          <legend className="text-lg font-semibold mb-2">Suggestions:</legend>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="issue"
                value="milestone"
                checked={selectedOption === 'milestone'}
                onChange={() => setSelectedOption('milestone')}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Freelancer didn't respect the milestone</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="issue"
                value="changeIdea"
                checked={selectedOption === 'changeIdea'}
                onChange={() => setSelectedOption('changeIdea')}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Client changed idea after the job was done</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="issue"
                value="incomplete"
                checked={selectedOption === 'incomplete'}
                onChange={() => setSelectedOption('incomplete')}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">The delivery is incomplete</span>
            </label>
          </div>
        </fieldset>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            placeholder="The logo was not as asked"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
          <textarea
            id="reason"
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Describe your issue or reason for requesting support"
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          href='/OpenDisputeGrid'
          target='_blank'
        >
          Request support
        </Button>
      </form>
    </div>
  );
};

export default SupportForm;
