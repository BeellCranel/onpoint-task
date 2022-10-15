import React, { useRef, useEffect, useState } from "react";
import "./SlideTwo.css";

const SlideTwo = () => {
  const myRef = useRef();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsShow(true);
      }
    });

    observer.observe(myRef.current);
  }, []);

  const spermBigClass = `slide-two__back-img slide-two__back-img_type_spermBig ${
    isShow ? "showOne" : ""
  }`;
  const spermMedBotClass = `slide-two__back-img slide-two__back-img_type_spermMedBot ${
    isShow ? "showTwo" : ""
  }`;
  const spermMedTop = `slide-two__back-img slide-two__back-img_type_spermMedTop ${
    isShow ? "showOne" : ""
  }`;
  const spermSmallBot = `slide-two__back-img slide-two__back-img_type_spermSmallBot ${
    isShow ? "showThree" : ""
  }`;
  const spermSmallTop = `slide-two__back-img slide-two__back-img_type_spermSmallTop ${
    isShow ? "showTwo" : ""
  }`;

  return (
    <section className="slide slide-two">
      <div ref={myRef} className={spermBigClass}></div>
      <div className={spermMedBotClass}></div>
      <div className={spermMedTop}></div>
      <div className={spermSmallBot}></div>
      <div className={spermSmallTop}></div>
      <h2 className="slide-two__title">Текст сообщения</h2>
      <div className="slide-two__content-wrapper"></div>
    </section>
  );
};

export default SlideTwo;
