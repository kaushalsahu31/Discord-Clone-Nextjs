import { apiImage } from '@/lib/helper';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
const FileUpload = ({ Upload, value }: { Upload: any, value: any }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles: any) => {
      setUploadedFiles(acceptedFiles);
      const image = await apiImage(acceptedFiles[0])
      console.log("image", image.path);
      Upload(image.path)
    },
  });

  return (
    <div {...getRootProps()}>
      {value ? 
      <div className='w-full flex justify-center'>
      <Image width="200" height="200" alt="PROFILE" src={`http://localhost:7000/${value}`} className='w-[200px] h-[200px] rounded-[100px]' />
      </div> : 
      <div  className='border-dotted border-zinc-500 border-2 rounded-sm py-8'>
        <input {...getInputProps()} />
        <p>Drag and drop files here or click to browse.</p>
        <ul>
          {uploadedFiles.map((file: any) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      </div>}

    </div>
  );
};
export default FileUpload;