import React from 'react';
import ReactDOM from 'react-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ClassVideos from './ClassVideos';
import ConceptVideos from './ConceptVideos';
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];
ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: 'white' }}>
      <div className="card" style={{ backgroundColor: 'white', boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.12)' }}>
        <div style={{ marginLeft: '700px' }}>

          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '50px' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ fontSize: '12px', color: '#868080' }}>Upcoming</div>
                <span style={{ background: 'rgba(226, 64, 12, 0.79)', borderRadius: '50%', height: '10px', width: '10px', margin: '4px 0 0 3px' }}></span>
              </div>
              <div style={{ fontWeight: '600', color: '#788184' }}>Live Consultation</div>
            </div>
            <div style={{ marginLeft: '50px', marginTop: '16px', fontWeight: '600', color: '#788184' }}>Buy Plans</div>
            <div style={{ marginLeft: '50px', marginTop: '16px', fontWeight: '600', color: '#788184' }}>View Plans</div>
            <div style={{
              marginLeft: '50px', marginTop: '5px', fontWeight: '600', color: 'rgba(255,255,255,1)',
              boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.12)',backgroundColor:'rgba(232, 103, 41, 0.95)', backgroundImage: 'linear-gradient(to left, #e45b7f,rgba(232, 103, 41, 0.95) )', borderRadius: '26px', padding: '10px 50px 10px 50px'
            }}>Log In</div>
          </div>
        </div>
      </div>

      <div style={{ margin: '42px 0px 0px 100px', fontSize: '40px', color: '#757171', fontWeight: '500' }}> Concept Videos</div>
      <div style={{ margin: '30px 0px 0px 100px', color: '#757171' }}>Select a number</div>
      <ConceptVideos></ConceptVideos>
      <div style={{ margin: '42px 0px 0px 100px', fontSize: '40px', color: '#757171', fontWeight: '500' }}> Live Classes</div>
      <div style={{ margin: '30px 0px 0px 100px', color: '#757171' }}>Select a number</div>
      <ClassVideos></ClassVideos>

      
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
