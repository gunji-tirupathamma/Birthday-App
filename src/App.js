import React,{useEffect} from 'react';
import { Howl } from 'howler';
import './App.css';
import Image1 from './img1.jpg'
import Image2 from './img2.jpg'
import Image3 from './img3.jpg'
import Audio from './d-audio.mp3'

function App() {
  useEffect(() => {
    // Create a new Howl instance with your audio file
    const sound = new Howl({
      src: [Audio], // Use the imported audio variable
      autoplay: true,
      loop: true,
      volume: 0.5,
    });

    // Clean up the Howl instance when the component unmounts
    return () => {
      sound.unload();
    };
  }, []);
  

  return (
    <div className="App">
      <audio  autoPlay loop >
        <source src={Audio} type="audio/mpeg" />
      </audio>

      <div className="container">
          <div className="card">
              <div className="outside">
                  <h1>Happy Birthday</h1>
                  <h3>“Wishing you a beautiful day with good health and happiness forever. Happy birthday!”</h3>

              </div>
              <div className="inside">
                  <img src= {Image1} alt="photo"/>
                  <h3>Sending you an infinite amount of love, joy and happyness on your birthday! </h3>
              </div>
          </div>
          <div className="cake">
            <img src="https://img.freepik.com/premium-vector/birthday-cake-with-candles_45843-73.jpg?w=740" />
          </div>
          <div className="block">
              <div className="frames frame1">
                  <img src={Image3} alt="photo"/>
                  <p>Keep smile & keep Shining</p>
              </div>
              <div className="frames frame2">
                  <img src={Image1}  alt="photo"/>
                  <p>“On this wonderful day, I wish you the best that life has to offer!”</p>
              </div>
              <div className="frames frame3">
                  <img src={Image2}  alt="photo"/>
                  <p>May God bless you on your birthday, and always.</p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
