import React from 'react';
import { useState } from 'react';

const Popup = (props) =>{
  return (
    <div className="overlay">
      <center>
        <i class="fa-solid fa-envelope-open-text"></i>
      <h3>Thank You</h3>
      <p>
       Your submission has been received.
      </p>
      <p>
       We will be in touch shortly.
      </p>
      <button onClick={props.toggle}>
        Back to site
        </button>
        </center>
    </div>
  );
};

export default Popup;

