import { useState, useEffect } from "react";
import "./Hero.css";

import img1 from "../assets/cascada1.png";
import img2 from "../assets/cscada2.png";
import img3 from "../assets/cascada3.png";

const imagenes = [img1, img2, img3];

// 👇 duplicamos TODAS para loop infinito real
const sliderImgs = [...imagenes, ...imagenes];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  // 👇 reset invisible SIN salto
  useEffect(() => {
    if (index >= imagenes.length) {
      setTimeout(() => {
        setIndex(0);
      }, 800);
    }
  }, [index]);

  return (
    <section className="hero">
      <div
        className="slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {sliderImgs.map((img, i) => (
          <img key={i} src={img} alt="banner" />
        ))}
      </div>
    </section>
  );
}