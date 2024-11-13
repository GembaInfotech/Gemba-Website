import React, { useState } from 'react';

const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    alert(`Selected file: ${event.target.files[0].name}`);
  };

  return (
    <div className="mt-0">
      {/* Hidden file input */}
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        id="cvUpload"
        className="hidden"
      />
      {/* Trigger for file input */}
      <label
        htmlFor="cvUpload"
        className="mt-2 text-blue-500 cursor-pointer hover:underline font-medium"
      >
        📄 Upload your CV 
      </label>
      {/* Display selected file name */}
      {selectedFile && (
        <p className="mt-2 text-blue-500">
          Selected file: <span className="  text-sm ">{selectedFile.name}</span>
        </p>
      )}
    </div>
  );
};

export default UploadCV;
