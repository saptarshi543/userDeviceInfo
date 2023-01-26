import './App.css';
import Gyro from './Gyro.js'


function Display(){

  //os info
let os = navigator.userAgent;
let finalOs=""
if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Android')!==-1){
        finalOs="Android";
    }
    else if (os.search('iPhone')!==-1){
        finalOs="IOS";
    }
    else if (os.search('iPad')!==-1){
        finalOs="iPadOS";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 || !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 || os.search('X11')!==-1){
        finalOs="Linux"
    }

//geo location info
function showPosition(position) {
document.getElementById("demo").innerHTML =
  "Latitude: " + position.coords.latitude + "<br>" +
  "Longitude: " + position.coords.longitude;
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else { 
  document.getElementById("demo").innerHTML =
  "Geolocation is not supported by this browser.";

}


//screen size info
     const { innerWidth: width, innerHeight: height } = window;
     // console.log(width+" "+height);


// get browser info
const { detect } = require('detect-browser');
const browser = detect();
// console.log(browser.name)

// memory usage



console.log(finalOs);
// console.log(navigator.language);
  return(
<div>

<p>OS: {finalOs}</p>
<p id="demo"></p>
<p id="he">Height: {height}</p>
<p id="wi">Width: {width}</p>
<p>Browser: {browser.name}</p>

</div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Display />
       <Gyro />
      </header>
    </div>
  );
}

export default App;
