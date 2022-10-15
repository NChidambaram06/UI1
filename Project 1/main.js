// Clock
function clockRefresh() {
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('displayDate()',refresh);
};
    
let showDate = document.getElementById('date');
function displayDate() {
    var newDate = new Date();
    // console.log(newDate);
    showDate.innerHTML = newDate;
    clockRefresh();
};


// Pressure
var pressureCount=1.0;
var plusButton = document.getElementById("preassurePlus");
var minusButton = document.getElementById("pressureMinus");
var currentTemp = document.getElementById("currentPressure");
plusButton.onclick = function() {
    if (pressureCount < 2.5) {
        pressureCount += 0.1;
    }
    currentTemp.innerHTML = pressureCount.toFixed(1) + " GPM";
};
minusButton.onclick = function() {
    if (pressureCount > .4) {
        pressureCount -= 0.1;
    }
    currentTemp.innerHTML = pressureCount.toFixed(1) + " GPM";
};

// Gradual Temp Increase
var tempCount=0;
var plusButton = document.getElementById("tempPlus");
var minusButton = document.getElementById("tempMinus");
var currentTemp = document.getElementById("currentTemp");
plusButton.onclick = function() {
    tempCount += 1;
    currentTemp.innerHTML = tempCount + " °F";
};
minusButton.onclick = function() {
    tempCount -= 1;
    currentTemp.innerHTML = tempCount + " °F";
};


// Slider
var slider = document.getElementById("myRange");
var temp = document.getElementById("temp");
temp.innerHTML = slider.value;

slider.oninput = function() {
    temp.innerHTML = slider.value;
}


// Profiles Modal
var profilesModal = document.getElementById("profilesModal");
var openProfiles = document.getElementById("openProfiles");
var closeProfiles = document.getElementById("closeProfiles");

openProfiles.onclick = function() {
    profilesModal.style.display = "block";
}
  
closeProfiles.onclick = function() {
    profilesModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == profilesModal) {
        profilesModal.style.display = "none";
    }
}

// Spotify Modal
var spotifyModal = document.getElementById("spotifyModal");
var openSpotify = document.getElementById("openSpotify");
var closeSpotify = document.getElementById("closeSpotify");

openSpotify.onclick = function() {
    spotifyModal.style.display = "block";
}
  
closeSpotify.onclick = function() {
    spotifyModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == spotifyModal) {
        spotifyModal.style.display = "none";
    }
}

// Weather Modal
var weatherModal = document.getElementById("weatherModal");
var openWeather = document.getElementById("openWeather");
var closeWeather = document.getElementById("closeWeather");

openWeather.onclick = function() {
    weatherModal.style.display = "block";
}
  
closeWeather.onclick = function() {
    weatherModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == weatherModal) {
        weatherModal.style.display = "none";
    }
}

// Timer Modal
var timerModal = document.getElementById("timerModal");
var openTimer = document.getElementById("openTimer");
var closeTimer = document.getElementById("closeTimer");

openTimer.onclick = function() {
    timerModal.style.display = "block";
}
  
closeTimer.onclick = function() {
    timerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == timerModal) {
        timerModal.style.display = "none";
    }
}

// Usage Modal
var usageModal = document.getElementById("usageModal");
var openUsage = document.getElementById("openUsage");
var closeUsage = document.getElementById("closeUsage");

openUsage.onclick = function() {
    usageModal.style.display = "block";
}
  
closeUsage.onclick = function() {
    usageModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == usageModal) {
        usageModal.style.display = "none";
    }
}


// Start Shower
const startShower = document.getElementById("startShower");
const stopShower = document.getElementById("stopShower");

startShower.onclick = function() {
    stopShower.style.display = "block";
    startShower.style.display = "none";
}

stopShower.onclick = function() {
    startShower.style.display = "block";
    stopShower.style.display = "none";
}