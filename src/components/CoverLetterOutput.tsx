const CoverLetterOutput = ({ coverLetter }: { coverLetter: string }) => {
    return (
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Generated Cover Letter</label>
        <textarea
          value={coverLetter}
          readOnly
          rows={10}
          className="mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm bg-gray-50 sm:text-lg p-3 focus:ring-0"
        ></textarea>
      </div>
    );
  };
  
  export default CoverLetterOutput;
  