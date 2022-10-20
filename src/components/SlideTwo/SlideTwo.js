import React, { useRef, useEffect, useState } from "react";
import "./SlideTwo.css";

const SlideTwo = ({ secondSlide }) => {
  const myRef = useRef();
  const scrollRef = useRef();
  const [slider, setSlider] = useState({
    min: 0,
    max: 330,
    step: 1,
    value: 0,
  });
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

  const sliderChangeHandler = (val) => {
    setSlider({
      ...slider,
      value: +val,
    });
  };

  useEffect(() => {
    scrollRef.current.scrollTop = slider.value;
  }, [slider.value]);

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
    <section ref={secondSlide} className="slide slide-two">
      <div ref={myRef} className={spermBigClass}></div>
      <div className={spermMedBotClass}></div>
      <div className={spermMedTop}></div>
      <div className={spermSmallBot}></div>
      <div className={spermSmallTop}></div>
      <h2 className="slide-two__title">Текст сообщения</h2>
      <div className="slide-two__content-wrapper">
        <div className="slide-two__scroll">
          <div className="slide-two__slider-wrapper">
            <input
              className="slider-two__slider"
              type="range"
              min={slider.min}
              max={slider.max}
              step={slider.step}
              value={slider.value}
              onChange={(e) => {
                sliderChangeHandler(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="slide-two__text-wrapper">
          <div className="slide-two__text" ref={scrollRef}>
            <b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit.
            Accusantium, aut consequatur corporis optio perspiciatis provident
            reiciendis reprehenderit rerum. Cupiditate enim iste maxime
            praesentium vero. Ad eligendi id minima necessitatibus obcaecati.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam
            aut debitis delectus deleniti dolores ducimus facere fugit illo,
            minima quaerat sed ullam. Eaque esse ex expedita in quae velit!
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            consequuntur dolorum fuga nam numquam optio pariatur quaerat quas,
            quasi quidem quo ratione reprehenderit sapiente sint sit ullam
            voluptas, voluptatibus voluptatum! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corporis doloremque doloribus
            explicabo libero officiis sed similique soluta sunt ut, voluptate?
            Alias aliquid ea facilis impedit molestiae numquam quis, vero
            voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A alias aperiam cum, dolore doloremque ea eius et eum exercitationem
            inventore, obcaecati perspiciatis qui quisquam repudiandae tempora
            tenetur, totam voluptates voluptatum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aperiam assumenda aut cum dolorem eos
            error, id officiis placeat qui, quisquam sint tenetur. Debitis,
            expedita fugiat illum magnam mollitia perspiciatis vel.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideTwo;
