import './App.css';
import { FaBeer } from 'react-icons/fa';
import { MdBrightness4, MdBrightness7 } from "react-icons/md";
import React, { useState } from 'react';
function App() {
  const [darkTheme, setDarkTheme] = React.useState(false)
  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <nav>
        <div className='button-container'>
          <button className="button-64" onClick={() => setDarkTheme(prevTheme => !prevTheme)} role="button">
            <span class="text"> Toggle Theme {darkTheme ? <MdBrightness4 /> : <MdBrightness7 />}</span>
          </button>
        </div>
      </nav>
      <div className='content'>

        <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1>
        <p>@Dilshod_Abdullayev_Blog</p>
      </div>
    </div>
  );
}

export default App;
