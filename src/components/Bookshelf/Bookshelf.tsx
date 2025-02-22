import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Book } from "./book.interface";
import styles from "./bookshelf.module.css";

const Bookshelf = ({ images }: { images: Book[] }) => {
  const [isExpanded, setIsExpanded] = useState<Book | null>(null);
  const expand = (image: Book) => {
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

      <div className={styles.bookshelf}>
        {images.map((image: Book, index: number) => (
          <div
            key={index}
            className={styles.carouselImageContainer}
            onClick={() => expand(image)}
          >
            <div className={styles.bookcoverImgWrapper}>
              <img
                src={image.url}
                alt={image.alt}
                className={styles.bookcoverImg}
              />
            </div>
            <div className={styles.bookInfo}>
              <h1>{image.title}</h1>
              <h2 className={styles.bookInfoAuthor}>{image.author}</h2>
              <p>{image.txt}</p>
            </div>
          </div>
        ))}

        <div className={styles.bookshelfBack}></div>
      </div>
    </>
  );
};

export default Bookshelf;
