let map; // Declare map outside the function to make it accessible globally
let currentMarker; // Keep track of the current marker

const initializeMap = (lat, lng) => {
  // Only create a new map if it doesn't already exist
  map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  // Create a custom icon
  const customIcon = L.icon({
    iconUrl: "./images/icon-location.svg", // URL to the custom icon image
    iconSize: [38], // Size of the icon (width, height)
    iconAnchor: [19, 19], // Point of the icon that will correspond to the marker's location
  });

  // Create and add the marker, save it to currentMarker
  currentMarker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
};

const fetchAndUpdateData = (inputValue, isUpdate) => {
  // Check if inputValue is ip or domain and assaign one of each following variable
  let ip = "";
  let domain = "";

  if (isUpdate) {
    // Check if input is a valid IP address
    if (isValidIP(inputValue)) {
      ip = inputValue;
    }
    // Check if input is a valid domain
    else if (isValidDomain(inputValue)) {
      domain = inputValue;
    } else {
      alert("Please enter a valid IP address or domain.");
      return; // Exit the function if input is neither a valid IP nor a domain
    }
  }

  const ipAddress = document.getElementById("ip-address");
  const timezone = document.getElementById("timezone");
  const isp = document.getElementById("isp");
  const location = document.getElementById("location");

  ipAddress.textContent = "loading...";
  timezone.textContent = "...";
  isp.textContent = "loading...";
  location.textContent = "loading...";

  fetch(
    `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_iapfGkJV48HbgpImYRZYMewKuFLLF&ipAddress=${ip}&domain=${domain}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Display the IP address and other data on the screen
      ipAddress.textContent = data.ip;
      timezone.textContent = data.location.timezone;
      isp.textContent = data.isp;
      location.textContent = `${data.location.region}, ${data.location.country} ${data.location.postalCode}`;

      if (isUpdate) {
        // Use panTo to update the map's position without changing the zoom level
        map.panTo([data.location.lat, data.location.lng]);

        currentMarker.setLatLng([data.location.lat, data.location.lng]); // Update marker position
      } else {
        // Initialize the map with the fetched coordinates
        initializeMap(data.location.lat, data.location.lng);
      }
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
};

// Simple IP validation (IPv4 and IPv6)
const isValidIP = (ip) => {
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})/;
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
};

// Simple domain validation (basic check)
const isValidDomain = (domain) => {
  const domainRegex = /^(?!:\/\/)([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/;
  return domainRegex.test(domain);
};

const grabValueFromInputAndUpdate = () => {
  const inputValue = document.querySelector("#input").value;
  fetchAndUpdateData(inputValue, true); // Call to update the map
};

document.addEventListener("DOMContentLoaded", () => fetchAndUpdateData("")); // Initial load

document.querySelector("#input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    grabValueFromInputAndUpdate();
  }
});

document
  .querySelector("#enter-button")
  .addEventListener("click", grabValueFromInputAndUpdate);
