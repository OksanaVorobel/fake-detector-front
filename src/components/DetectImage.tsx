import React, { useState } from 'react';
import { IoIosSync, IoIosShareAlt  } from 'react-icons/io';

import '../styles/DetectImage.css';
import {addImage, getImageFileUrl, predictImage, uploadImage} from "../features/image/model";

const DetectImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(true);
  const [elaImageUrl, setElaImageUrl] = useState<string | undefined>(undefined);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | undefined>(undefined);

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
      const { data: { ela, origin } } = uploadResponse;
      setElaImageUrl(ela);
      setOriginalImageUrl(origin);

      const predictResponse = await predictImage(ela);
      const { data: { fake } } = predictResponse;

      setResult(Math.round(fake * 10000) / 10000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addImages = async () => {
    if (!originalImageUrl || !result || !elaImageUrl) return;
    try {
      const { data }  = await addImage(originalImageUrl, elaImageUrl, result);
      console.log(data)

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getFakeColor = (rate: number) => {
    if (rate <= 0.4) {
      return 'green'
    }
    if (rate >= 0.6) {
        return 'red'
    }
    return 'orange'
  }

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
                  <IoIosShareAlt className="toggle-icon" size={35} onClick={addImages}/>
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
                      : getImageFileUrl(elaImageUrl)
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
                <div className="result-block" style={{backgroundColor: getFakeColor(result)}}>
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
