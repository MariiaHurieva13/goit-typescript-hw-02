import { FC } from "react";
import css from "./ImageCard.module.css";
import { ImageInfo } from "../../types/types";

interface ImageCardProps {
  galleryItem: ImageInfo;
  onClick: (id: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ galleryItem, onClick }) => {
  const {
    urls: { small },
    alt_description,
    id,
  } = galleryItem;

  return (
    <div className={css.thumb}>
      <img
        src={small}
        alt={alt_description}
        className={css.cardImg}
        onClick={() => onClick(id)}
      />
    </div>
  );
};

export default ImageCard;