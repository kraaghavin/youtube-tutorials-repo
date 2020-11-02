import React, { useEffect } from "react";
import "./style.scss";
import Plane from "./Plane";
import Canvas from "./Canvas";
import { CurtainsProvider } from "./store/reduxStore";

import dumbData, { text } from "./dumbData";
class CurtainSlider extends React.Component {
  render() {
    return (
      <CurtainsProvider>
      <div className='banner top'/>
        <div id="page-content">
          {dumbData.map(({url, title, description}, index) => (
            <Plane
              key={url}
              index={index}
              url={url}
              title={title}
              description={description}
            />
          ))}
        </div>

        <Canvas />
        {/* <div className="text-slider">
          {text.map(element => (
            <span className="text-slider-element">{element}</span>
          ))}
        </div> */}
        <div className='banner bottom'/>
      </CurtainsProvider>
    );
  }
}
export default CurtainSlider;