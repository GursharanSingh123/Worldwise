import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(defaultPosition);
  const [isLoading, setIsLoading] = useState(false);

  function getPosition() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
    setIsLoading(false);
  }
  return { position, error, isLoading, getPosition };
}
