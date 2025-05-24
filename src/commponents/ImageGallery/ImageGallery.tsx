import { FC } from "react";
import { ImageInfo } from "../../types/types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  galleryList: ImageInfo[];
  onImgClick: (id: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ galleryList, onImgClick }) => {
  return (
    <ul className={css.imageGallery}>
      {galleryList.map((item) => (
        <li key={item.id} className={css.imageCard}>
          <ImageCard galleryItem={item} onClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;