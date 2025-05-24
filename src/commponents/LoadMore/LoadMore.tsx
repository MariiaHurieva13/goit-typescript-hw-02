import { FC } from "react";
import Button from "../Button/Button";

interface LoadMoreProps {
  onLoadMoreClick: () => void;
}

const LoadMore: FC<LoadMoreProps> = ({ onLoadMoreClick }) => {
  return <Button onClick={onLoadMoreClick}>LoadMore</Button>;
};

export default LoadMore;