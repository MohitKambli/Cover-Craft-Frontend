import { useState } from "react";

const ResumeUpload = ({ onFileChange }: { onFileChange: (file: File | null) => void }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file?.name || null);
    onFileChange(file);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {fileName && <p className="mt-2 text-sm text-green-600">Uploaded: {fileName}</p>}
    </div>
  );
};

export default ResumeUpload;
