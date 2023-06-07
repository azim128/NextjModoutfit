'use client'

import React, { useEffect, useRef, useState } from 'react';

const DrawingCanvas = () => {
  const [image, setImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [textList, setTextList] = useState([]);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const textInputRef = useRef(null);
  const initialMousePosition = useRef({ x: 0, y: 0 });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
      };
      img.src = e.target.result;
      imageRef.current = img;
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleTextSubmit = (event) => {
    event.preventDefault();
    const text = textInputRef.current.value;
    if (!text) return;

    setTextList((prevTextList) => [
      ...prevTextList,
      { text, position: { ...textPosition } },
    ]);

    textInputRef.current.value = '';
  };

  const handleMouseDown = (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'input') return;

    setIsDragging(true);
    initialMousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const target = event.target;
    const deltaX = event.clientX - initialMousePosition.current.x;
    const deltaY = event.clientY - initialMousePosition.current.y;

    if (target.tagName.toLowerCase() === 'canvas') {
      setImagePosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));
    } else if (target.tagName.toLowerCase() === 'input') {
      setTextPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));
    } else if (target.tagName.toLowerCase() === 'span') {
      const textIndex = Number(target.dataset.index);
      if (textIndex >= 0 && textIndex < textList.length) {
        setTextList((prevTextList) => {
          const updatedTextList = [...prevTextList];
          updatedTextList[textIndex].position.x += deltaX;
          updatedTextList[textIndex].position.y += deltaY;
          return updatedTextList;
        });
      }
    }

    initialMousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (image) {
      ctx.drawImage(image, imagePosition.x, imagePosition.y);
    }

    textList.forEach((textItem) => {
      const { text, position } = textItem;
      ctx.fillText(text, position.x, position.y);
    });
  }, [image, imagePosition, textList]);

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {image && (
        <button onClick={handleImageRemove}>Remove Image</button>
      )}
      <form onSubmit={handleTextSubmit}>
        <input
          type="text"
          ref={textInputRef}
          placeholder="Enter text"
        />
        <button type="submit">Add Text</button>
      </form>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        width={800}
        height={600}
        style={{ border: '1px solid #000000' }}
      />
    </div>
  );
};

export default DrawingCanvas;





