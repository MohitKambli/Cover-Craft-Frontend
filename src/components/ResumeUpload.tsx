import { useState } from "react";

const ResumeUpload = ({ onFileChange }: { onFileChange: (file: File | null) => void }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file?.name || null);
    onFileChange(file);
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-800 mb-2">Upload Resume</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-2 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-300 ease-in-out"
      />
      {fileName && <p className="mt-2 text-sm text-green-600">Uploaded: {fileName}</p>}
    </div>
  );
};

export default ResumeUpload;
