import React, { useState } from 'react';
import { IoIosSync, IoIosShareAlt  } from 'react-icons/io';

import './DetectImage.css';
import {predictImage, uploadImage} from "../features/image/model";
import {BASE_URL} from "../lib/axios";

const DetectImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(true);
  const [elaImageUrl, setElaImageUrl] = useState<string | undefined>(undefined);

  const toggleImage = () => {
    setShowOriginal(!showOriginal);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file && file.length > 0) {
      setSelectedImage(URL.createObjectURL(file[0]));
      setFile(file[0]);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setSelectedImage(null);
    setResult(null);
  };

  const handleSubmit = async () => {
    if (!file) return;
    try {
      const uploadResponse = await uploadImage(file);
      const { data: { ela } } = uploadResponse;
      setElaImageUrl(ela);

      const predictResponse = await predictImage(ela);
      const { data: { fake } } = predictResponse;

      setResult(fake);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div>
      <h1>Fake Image Checker</h1>
        <div className={"text-container"}>
          <span>Note: The accuracy of the analysis may vary depending on factors such as image quality and the complexity of the content.
            Use the results as a reference and exercise discretion when drawing conclusions.</span>
        </div>
        <div className="uploader-container">
          <div className="uploader-content">
            {result && file && (
                <div className="icon-container icon-container-share">
                  <IoIosShareAlt className="toggle-icon" size={35}/>
                </div>
            )}
            {result && file && (
                <div className="icon-container icon-container-convert" onClick={toggleImage}>
                  <IoIosSync className="toggle-icon" size={35}/>
                </div>
            )}
            <h3>{showOriginal ? "Your" : "ELA"} Image</h3>
            <label htmlFor="uploadImage" className="custom-upload-button">
              {selectedImage ? (
                  <img alt="Selected" className="selected-image" src={showOriginal
                      ? selectedImage
                      : `${BASE_URL}/images/by-path/?image_path=${elaImageUrl}`
                  }
                  />
              ) : (
                  <div className="placeholder-image">
                    <span className="placeholder-icon">🖼️</span>
                    <span className="placeholder-text">Select an image</span>
                  </div>
              )}
              <input id="uploadImage" type="file" accept="image/*" onChange={handleFileChange}
                     style={{display: 'none'}}/>
            </label>
            {
              file ? <div className={"upload-container-buttons"}>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleSubmit}>Check Image</button>
                  </div>
                  : <button className="uploadImageButton">Upload Image</button>
            }
            {result && file && (
                <div className="result-block" style={{backgroundColor: result >= 0.5 ? 'red' : 'green'}}>
                  <h2>Fake for</h2>
                  <p>{result}%</p>
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default DetectImage;
