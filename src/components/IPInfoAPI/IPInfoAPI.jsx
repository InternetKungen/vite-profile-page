import React, { useEffect, useState } from "react";
import './IPInfoAPI.css';

export function IPInfoAPI() {
  const apiUrl = "https://api.myip.com";

  const [ipInfo, setIpInfo] = useState({});

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
      <p>
        <strong>Your IP:</strong> {ipInfo.ip}
      </p>
    </section>
  );
}