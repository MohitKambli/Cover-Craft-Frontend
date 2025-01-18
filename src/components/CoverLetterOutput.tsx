const CoverLetterOutput = ({ coverLetter }: { coverLetter: string }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Generated Cover Letter</label>
        <textarea
          value={coverLetter}
          readOnly
          rows={10}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm"
        ></textarea>
      </div>
    );
  };
  
  export default CoverLetterOutput;
  