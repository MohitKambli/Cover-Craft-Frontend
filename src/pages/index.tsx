import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import JobDescriptionInput from "../components/JobDescriptionInput";
import CoverLetterOutput from "../components/CoverLetterOutput";
import { FaSpinner } from 'react-icons/fa';

export default function Home() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (file: File | null) => {
    setResume(file);
  };

  const generateCoverLetter = async () => {
    if (!resume || !jobDescription.trim()) {
      alert("Please upload your resume and provide a job description.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("job_description", jobDescription);

      const response = await fetch("https://cover-craft-backend.vercel.app/generate-cover-letter", {
        method: "POST",
        body: formData,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to generate cover letter.");
      }

      const data = await response.json();
      setCoverLetter(data.cover_letter || "No cover letter was generated.");
    } catch (error) {
      console.error("Error generating cover letter:", error);
      setCoverLetter("An error occurred while generating the cover letter.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">CoverCraft</h1>

        <ResumeUpload onFileChange={handleFileChange} />
        <JobDescriptionInput setJobDescription={setJobDescription} disabled={loading} />

        <button
          onClick={generateCoverLetter}
          className={`w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 transition ease-in-out duration-300 flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin mr-2" /> : 'Generate Cover Letter'}
        </button>

        <CoverLetterOutput coverLetter={coverLetter} />
      </div>
    </div>
  );
}
