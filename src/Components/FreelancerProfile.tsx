import { useState } from "react";
// You can place this component where you need the modal to be triggered
import React from "react";
import { Button } from "@mui/material";
import {
  // usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { SMARTCONTRACT_ADDRESS } from "../consts";

type SupportFeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FreelancerProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex space-x-4 items-center">
              <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Profile Image Placeholder */}
                <span className="text-gray-400 text-2xl">👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Freelancer Name</h2>
                <p className="text-gray-600">Logo designer</p>
                <p className="text-yellow-400">⭐ 5 (200 reviews)</p>
              </div>
            </div>
            <div className="my-4">
              <h3 className="font-bold text-lg mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {/* Skill Tags */}
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                  Website Design
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                  Backend Developer
                </span>
                {/* Repeat tags as needed */}
              </div>
            </div>
            <p className="text-gray-800 my-4">
              My name is Steve Soto and for me everything starts with a great
              looking logo. I take much pride in creating Complete Brands and I
              think it shows in my work. My prices are a bit higher than others
              here on upwork but that's because I feel like I provide quality
              work and uniqueness in all my projects.
            </p>
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Choose him and pay
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-48 w-64 bg-gray-200 rounded-lg">
            <span className="text-gray-500 font-bold">CHAT</span>
          </div>
        </div>
      </div>
      <SupportFeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default FreelancerProfile;

const SupportFeeModal: React.FC<SupportFeeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [serviceId, setServiceId] = useState(0);
  // const { config } = usePrepareContractWrite({
  //   address: SMARTCONTRACT_ADDRESS,
  //   abi: [
  //     {
  //       name: "depositFunds",
  //       type: "function",
  //       stateMutability: "payable",
  //       inputs: [
  //         { internalType: "uint32", name: "serviceId", type: "uint32" },
  //         { internalType: "address", name: "seller", type: "address" },
  //       ],
  //       args: [serviceId],
  //       enabled: Boolean(serviceId),
  //     },
  //   ],
  //   functionName: "depositFunds",
  //   args: [serviceId],
  //   enabled: Boolean(serviceId),
  // });

  // const { data, write } = useContractWrite(config);

  // const { isLoading, isSuccess } = useWaitForTransaction({
  //   hash: data?.hash,
  // });

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Pay for customer support
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              This money is for solving any possible issue. You will receive
              this money back if no issue happens.
            </p>
          </div>
          <div className="flex justify-between items-center text-lg mt-4 px-7 py-3">
            <span>Support fee</span>
            <span>15 USDC</span>
          </div>
          <div className="items-center px-4 py-3">
            {/* {isLoading && <span>Waiting for transaction to be mined...</span>}
            {isSuccess && (
              <Button
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => {
                  setServiceId(serviceId + 1);
                  write?.();
                  onClose();
                }}
                variant="contained"
                href="/chat"
              >
                Pay fee
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
