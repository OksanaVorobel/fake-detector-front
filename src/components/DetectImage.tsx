import React, { useState } from 'react';
import './DetectImage.css';

const DetectImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file && file.length > 0) {
      setSelectedImage(URL.createObjectURL(file[0]));
      setFile(file[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      setResult("True");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div>
      <h1>Image Fake Checker</h1>
      <div className="uploader-container">
        <div className="uploader-content">
          <label htmlFor="uploadImage" className="custom-upload-button">
            {selectedImage ? (
                <img src={selectedImage} alt="Selected" className="selected-image"/>
            ) : (
                <div className="placeholder-image">
                  <span className="placeholder-icon">🖼️</span>
                  <span className="placeholder-text">Select an image</span>
                </div>
            )}
            <input id="uploadImage" type="file" accept="image/*" onChange={handleFileChange} style={{display: 'none'}}/>
          </label>
          <button className="uploadImageButton" onClick={handleSubmit}>Check Image</button>
          {result && (
              <div>
                <h2>Result:</h2>
                <p>{result}</p>
              </div>
          )}
        </div>
      </div>
      </div>
  );
};

export default DetectImage;
