// Predefined weather data
const weatherData = {
    Karachi: { Precipitation: "1%", Humidity: "26%", Wind: "14 km/h" },
    Lahore: { Precipitation: "5%", Humidity: "40%", Wind: "10 km/h" },
    Islamabad: { Precipitation: "0%", Humidity: "35%", Wind: "12 km/h" },
    Multan: { Precipitation: "2%", Humidity: "30%", Wind: "11 km/h" }
};

const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let cityInput = document.getElementById("wheather").value.trim();
    if (!cityInput) return;

    // Case-insensitive matching
    let city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

    // Remove previous animation
    output.className = "";

    if (weatherData[city]) {
        const data = weatherData[city];
        output.innerHTML = `
      <strong>${city}</strong><br>
      Precipitation: ${data.Precipitation} <br>
      Humidity: ${data.Humidity} <br>
      Wind: ${data.Wind}
    `;
        output.classList.add("animate__animated", "animate__fadeIn");
    } else {
        output.innerHTML = "City not found!";
        output.classList.add("animate__animated", "animate__shakeX");
    }
});
