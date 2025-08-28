import React, { useState, useEffect } from 'react';
import Label from './Label';
import { FaUpload } from 'react-icons/fa';

const VideoUpload = ({ label, name, value, onChange, required = false, reset }) => {
  const [preview, setPreview] = useState(value || '');
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    setPreview('');
    setFileName('');
  }, [reset]); // Reset when the `reset` prop changes

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoURL = URL.createObjectURL(file);
    setPreview(videoURL);
    setFileName(file.name);
    onChange(name, file); // Pass file back to parent
  };

  return (
    <div className="">
      {/* Top Label */}
      {label && <Label name={name} label={label} required={required} />}

      {/* Custom Upload Field */}
      <label
        htmlFor={name}
        className="flex items-center gap-3 cursor-pointer w-full h-[50px] px-4 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] text-[12px] hover:border-[#666]"
      >
        <FaUpload className="text-[#ccc] font-[13px]" />
        <span className='block text-[15px] text-[var(--admin-primary)] tracking-[0.8px] font-roboto'>
          {fileName || 'Upload Video'}
        </span>
        <input
          type="file"
          accept="video/*"
          id={name}
          name={name}
          required={required}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Video Preview */}
      {preview && (
        <div className="mt-3">
          <video
            src={preview}
            controls
            className="w-64 h-40 border border-gray-500 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
