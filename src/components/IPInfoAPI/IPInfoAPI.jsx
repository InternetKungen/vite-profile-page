import React, { useEffect, useState } from "react";
import './IPInfoAPI.css';

export function IPInfoAPI() {
  const apiUrl = "https://api.myip.com";

  const [ipInfo, setIpInfo] = useState({});

//   useEffect(() => {
//     fetch(apiUrl, { mode: 'no-cors' })
//       .then((response) => response.json())
//       .then((data) => {
//         setIpInfo(data);
//       })
//       .catch((error) => console.error("Error fetching IP information:", error));
//   }, []);

useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setIpInfo(data);
      })
      .catch((error) => console.error("Error fetching IP information:", error));
  }, []);

  return (
    <section>
      <h2>Your IP Information</h2>
      <p>
        <strong>IP Address:</strong> {ipInfo.ip}
      </p>
      <p>
        <strong>Country:</strong> {ipInfo.country}
      </p>
      <p>
        <strong>Country Code:</strong> {ipInfo.cc}
      </p>
    </section>
  );
}