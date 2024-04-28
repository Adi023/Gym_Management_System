import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // After reading the file, set it as the image source
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {image && (
        <div>
          <h2>Selected Image:</h2>
          <img src={image} alt="Selected" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
