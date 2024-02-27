import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const currCard = photos[currCardIdx];
  const total = photos.length;

  // Moves to the previous image
  function goBackward() {
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  }

  // Moves to the next image
  function goForward() {
    if (currCardIdx < total - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  return (
    <div className="Carousel">
      <h1>{ title }</h1>
      <div className="Carousel-main">
        { currCardIdx > 0 && (
          <i className="bi bi-arrow-left-circle" onClick={ goBackward } />
        ) }
        <Card
          caption={ currCard.caption }
          src={ currCard.src }
          currNum={ currCardIdx + 1 }
          totalNum={ total }
        />
        { currCardIdx < total - 1 && (
          <i className="bi bi-arrow-right-circle" onClick={ goForward } />
        ) }
      </div>
    </div>
  );
}

export default Carousel;
