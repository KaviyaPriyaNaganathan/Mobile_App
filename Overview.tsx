import React, { forwardRef } from "react";
import { Carousel } from 'antd';
import cskImage from './images/csk.jpg';
import rcbImage from './images/rcb.jpg';

const images = [
  'cskvsrcb1.jpg',
  'cskvsrcb2.jpg',
  'cskvsrcb3.jpg',
  // Add more image URLs here
];

const Overview: React.ForwardRefRenderFunction<HTMLDivElement> = (props, ref) => {
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <span style={{ paddingTop: 10 }}>IPL-Fri 22 Mar</span>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        {/* CSK Column */}
        <div style={{ marginRight: 20 }}>
          <h3>CSK</h3>
          <img src={cskImage} className='csk' alt="Chennai Super Kings" style={{ width: 100, height: 100 }} />
          <div>176/4</div>
          <div>(20)</div>
        </div>
        {/* RCB Column */}
        <div>
          <h3>RCB</h3>
          <img src={rcbImage} className='rcb' alt="Royal Challenges Bengaluru" style={{ width: 100, height: 100 }} />
          <div>173/6</div>
          <div>(20)</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>CSK won by 6 wickets (8 balls left)</div>
      <div style={{ margin: '0 auto', maxWidth: 800, marginTop: 20 }}>
        <Carousel autoplay effect="fade" style={{ width: '80%', margin: '0 auto' }}>
          {images.map(image => (
            <div key={image} style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={require(`./images/${image}`)} alt="carousel" style={{ marginLeft: 20,maxWidth: '100%', maxHeight: '300px', borderRadius: 5 }} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* Rest of the content */}
    </div>
  );
}

export default forwardRef(Overview);
