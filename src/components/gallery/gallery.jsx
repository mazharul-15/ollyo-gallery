import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSwappingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import imgPlaceholder from "../../img/image.png";
import GalleryItem from "../gallery-item/gallery-item";

import "./gallery.scss";

const Gallery = ({ images, handleCheckboxClick, handleDragEnd }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(
      KeyboardSensor,
      {
        coordinateGetter: sortableKeyboardCoordinates,
      },
      useSensor(TouchSensor)
    )
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={images} strategy={rectSwappingStrategy}>
        <div className="image-container">
          {images.map((img) => (
            <GalleryItem
              key={img.id}
              image={img}
              handleCheckboxClick={handleCheckboxClick}
            />
          ))}
          <div className="image-last-item">
            <img src={imgPlaceholder} alt="" />
            <a href="#">Add Image</a>
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Gallery;
