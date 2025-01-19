const JobDescriptionInput = ({ setJobDescription, disabled }: { setJobDescription: (value: string) => void, disabled: boolean }) => {
    return (
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Job Description</label>
        <textarea
          onChange={(e) => setJobDescription(e.target.value)}
          rows={6}
          className="mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-3 transition duration-300 ease-in-out"
          placeholder="Paste the job description here..."
          disabled={disabled}
        ></textarea>
      </div>
    );
  };
  
  export default JobDescriptionInput;
  