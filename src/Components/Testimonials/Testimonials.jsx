import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Adithi Kulakarni</h3>
                  <span>CSE, 2023 Batch</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at NMAMIT was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>SriRaksha Rao</h3>
                  <span>ECE, 2021 Batch</span>
                </div>
              </div>
              <p>
              I am really fortunate to have studied at NMAMIT. The Department of E&C was really supportive and promoted a holistic approach towards our academic growth and this has helped me immensely in my placements. 


              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Srujan Kumar</h3>
                  <span>CSE, 2022 Batch</span>
                </div>
              </div>
              <p>
              When I was searching for a good engineering college in the mechanical stream, Nitte was the first name that flashed to my mind. It was the best choice I made. The environment helped me a lot.

              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Pratheeksha Udupa</h3>
                  <span>ISE, 2023 Batch</span>
                </div>
              </div>
              <p>
              Placements at our college have always been great. Activities conducted by team Abhyuday has made us corporate ready and has given us the confidence to step into the professional world.
              </p>
            </div>
          </li>
          
          
          
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
