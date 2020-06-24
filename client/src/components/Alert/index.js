import React, { useEffect, useState } from "react";
import './style.css'

function Alert(props) {
  const [fadeState, setFadeState] = useState("fadeIn");
  
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeState("fade");
    }, 2000);
    // crear timer on re-render
    return () => clearTimeout(fadeTimer);
  }, [props.cpu]);

  return (
    <>
      {props.cpu
      ? (<div style={{margin:15}} className={`alert alert-info alert-dismissible animated ${fadeState} `} role="alert">
          Running on core {props.cpu}
          <button type="button" className="close" onClick={props.onclick} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>)
      : <></>}
    </>
  );
}

export default Alert;
