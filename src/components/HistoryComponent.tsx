import React, { useState, useEffect } from 'react';
import { IoMdTrash } from "react-icons/io";

import {deleteImage, getImageFileUrl, getImages} from "../features/image/model";
import {AddImageResponse} from "../features/image/types";
import './HistoryComponent.css';


interface ImageDisplayed {
  [index: number]: boolean;
}

const HistoryComponent = () => {
  const [history, setHistory] = useState<AddImageResponse[]>([]);
  const [imageDisplayed, setimageDisplayed] = useState<ImageDisplayed>({});


   const removeElement = async (index: number) => {
    try {
        await deleteImage(index);

        const removeIndex = history.map(item => item.id).indexOf(index);
        history.splice(removeIndex, 1);
        setHistory([...history]);
        delete imageDisplayed[index]

      } catch (error) {
        console.error('Error fetching history:', error);
      }
  }
  const handleImageClick = (index: number) => {
    imageDisplayed[index] = !imageDisplayed[index];
    setHistory([...history])
  }

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const {data} = await getImages();
        setHistory(data);

        const initialImageDisplayed: ImageDisplayed = {};
        data.forEach((item) =>  initialImageDisplayed[item.id] = true);
        setimageDisplayed(initialImageDisplayed)
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <h1>History</h1>
      <ul className="history-list">
         {history.map((item, index) => (
            <li key={item.id} className="history-item">
              <div className="icon-container-remove">
                <IoMdTrash className="toggle-icon" size={30} onClick={() => removeElement(item.id)}/>
              </div>
              <div className="image-item" onClick={() => handleImageClick(item.id)}>
                <img
                    src={getImageFileUrl(imageDisplayed[item.id] ? item.image_url : item.ela_image_url)}
                    alt="Item" className="history-image"
                />
              </div>
              <p
                  className="falsity-percentage"
                  style={{backgroundColor: item.percentage_of_falsity >= 0.5 ? 'red' : 'green'}}
              >
                Percentage of falsity: {Math.round(item.percentage_of_falsity * 100) / 100}
              </p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryComponent;
