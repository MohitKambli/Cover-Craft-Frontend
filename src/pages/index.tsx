import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import JobDescriptionInput from "../components/JobDescriptionInput";
import CoverLetterOutput from "../components/CoverLetterOutput";

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

      const response = await fetch("http://127.0.0.1:5000/generate-cover-letter", {
        method: "POST",
        body: formData,
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
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">CoverCraft</h1>

        <ResumeUpload onFileChange={handleFileChange} />
        <JobDescriptionInput setJobDescription={setJobDescription} />

        <button
          onClick={generateCoverLetter}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mb-4"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Cover Letter"}
        </button>

        <CoverLetterOutput coverLetter={coverLetter} />
      </div>
    </div>
  );
}
