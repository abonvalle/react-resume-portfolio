import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Carousel as LibCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./carousel.module.css";
import { CarouselImage } from "./image.interface";

const Carousel = ({ images }: { images: CarouselImage[] }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<CarouselImage | null>(null);
  const expand = (image: CarouselImage) => {
    setIsExpanded(image);
  };
  return (
    <>
      {isExpanded && (
        <>
          <img
            className={styles.expandedImage}
            src={isExpanded.url}
            alt={isExpanded.alt}
            onClick={() => setIsExpanded(null)}
          />
          <div
            className={styles.backdrop}
            onClick={() => setIsExpanded(null)}
          ></div>
        </>
      )}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LibCarousel autoPlay={!isHovered && !isExpanded} infiniteLoop>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.carouselImageContainer}
              onClick={() => expand(image)}
            >
              <img src={image.url} alt={image.alt} />
              <p className="legend">{t("click_to_zoom")}</p>
            </div>
          ))}
        </LibCarousel>
      </div>
    </>
  );
};

export default Carousel;
