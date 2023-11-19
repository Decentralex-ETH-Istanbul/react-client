import React, { useState, FormEvent } from "react";
import { Button } from "@mui/material";
import lighthouse from "@lighthouse-web3/sdk";
import { API_KEY } from "../consts";

enum IssueOption {
  Milestone = "milestone",
  ChangeIdea = "changeIdea",
  Incomplete = "incomplete",
}

type Option = {
  value: string;
  description: string;
};

const options: Option[] = [
  {
    value: IssueOption.Milestone,
    description: "Freelancer didn't respect the milestone",
  },
  {
    value: IssueOption.ChangeIdea,
    description: "Client changed idea after the job was done",
  },
  { value: IssueOption.Incomplete, description: "The delivery is incomplete" },
];

const SupportForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<IssueOption | "">(
    IssueOption.Milestone
  ); // or any default value;

  const [title, setTitle] = useState("");
  const [reason, setReason] = useState("");

  const option = options.find((opt) => opt.value === selectedOption);
  const selectedDescription = option ? option.description : "";

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const data = `dispute/${title}/${reason}/`;
    const response = await lighthouse.uploadText(data, API_KEY);
    console.log("lighthouse response", response);
    console.log(selectedOption);
    // You would typically send `selectedOption` to your server or state management
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6">
          What problem are you facing?
        </h2>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold mb-2">Suggestions:</legend>
          <div className="space-y-2">
            {options.map((option) => (
              <label className="flex items-center" key={option.value}>
                <input
                  type="radio"
                  name="issue"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() =>
                    setSelectedOption(option.value as IssueOption)
                  }
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{option.description}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            value={selectedDescription}
            id="title"
            placeholder="The logo was not as asked"
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700"
          >
            Reason
          </label>
          <textarea
            id="reason"
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Describe your issue or reason for requesting support"
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          href="/OpenDisputeGrid"
          target="_blank"
        >
          Request support
        </Button>
      </form>
    </div>
  );
};

export default SupportForm;
