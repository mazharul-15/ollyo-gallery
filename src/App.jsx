import { fakeImages } from "./service/image-db";
import "./app.scss";

import { useState } from "react";

import Header from "./components/header/header";
import Gallery from "./components/gallery/gallery";

const App = () => {
  const [images, setImages] = useState(fakeImages);

  function handleDragEnd(e) {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    const activeIndex = images.findIndex((image) => image.id === active.id);
    const overIndex = images.findIndex((image) => image.id === over.id);
    let newItems = [...images];
    const [removed] = newItems.splice(activeIndex, 1);
    newItems.splice(overIndex, 0, removed);

    newItems = newItems.map((img, index) =>
      index === 0 ? { ...img, isFeature: true } : { ...img, isFeature: false }
    );

    setImages(newItems);
  }

  const handleCheckboxClick = (id) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, selected: !image.selected } : image
    );
    setImages(updatedImages);
  };

  const handleDeleteSelected = () => {
    const remainingImages = images
      .filter((image) => !image.selected)
      .map((img, index) =>
        index === 0 ? { ...img, isFeature: true } : { ...img, isFeature: false }
      );
    setImages(remainingImages);
  };

  return (
    <div className="container">
      <Header images={images} handleDeleteSelected={handleDeleteSelected} />
      <Gallery
        images={images}
        handleDragEnd={handleDragEnd}
        handleCheckboxClick={handleCheckboxClick}
      />
    </div>
  );
};

export default App;
