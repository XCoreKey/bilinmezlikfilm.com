import React from 'react';
import Gallery from './Gallery';
import './gallery.css'

function App() {
  return (
    <div className='arkaplan' >
       <h1 style={{textAlign: 'center', color: 'white'}}>
      Filmler
    </h1>
    <Gallery/>
    </div>
  );
}

export default App;
