import React, { useState } from "react";
import { Button } from "@mui/material";

type VoteConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ConflictResolutionForm: React.FC = () => {
  const [choice, setChoice] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the submission logic, possibly sending the data to a server
    console.log({ choice, explanation });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded shadow p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">
          Has the conflict been resolved?
        </h1>
        <p className="mb-4">
          Here, your expertise comes to the forefront as you meticulously assess
          and decide upon resolutions in disputes between clients and
          freelancers. Your mission involves a comprehensive examination of each
          case, considering all relevant details and perspectives. The goal is
          to provide transparent and just outcomes, ensuring that fairness
          prevails in every resolution.
        </p>
        <div className="flex items-center justify-center my-4 space-x-6">
          <Button
            type="button"
            variant="outlined"
            className={`px-4 py-2 rounded border ${
              choice === "freelancer"
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setChoice("freelancer")}
          >
            Freelancer is right
          </Button>
          <Button
            type="button"
            variant="outlined"
            className={`ml-4 px-4 py-2 rounded border ${
              choice === "client"
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setChoice("client")}
          >
            Client is right
          </Button>
        </div>
        <div className="mb-4">
          <label htmlFor="explanation" className="block text-sm font-bold mb-2">
            Explain why
          </label>
          <textarea
            id="explanation"
            rows={4}
            className="w-full p-2 border rounded"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </div>
        <Button
          className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition-colors"
          onClick={() => {
            // handleSubmit;
            console.log("Vote submitted!");
            setIsModalOpen(true);
          }}
          variant="contained"
        >
          Vote
        </Button>
      </div>
      <VoteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ConflictResolutionForm;

const VoteConfirmationModal: React.FC<VoteConfirmationModalProps> = ({
    isOpen,
    onClose,
  }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <p className="text-gray-700 mb-4">You have voted for the issue:</p>
            <h2 className="text-xl font-bold mb-4">Logo was not as asked</h2>
            <div className="items-center px-4 py-3">
              <Button
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => onClose()}
                variant="contained"
                href="/create"
              >
                Pay fee
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
