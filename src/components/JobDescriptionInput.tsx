import { useState } from "react";

const JobDescriptionInput = ({ setJobDescription }: { setJobDescription: (value: string) => void }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Job Description</label>
      <textarea
        onChange={(e) => setJobDescription(e.target.value)}
        rows={5}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      ></textarea>
    </div>
  );
};

export default JobDescriptionInput;
