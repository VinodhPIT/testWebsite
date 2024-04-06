import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      } catch (error) {
        setError(error.message);
      }
    };

    if (navigator.geolocation) {
      fetchLocation();
    } else {
      setError('Geolocation is not supported by this browser.');
    }

    return () => {
      // Cleanup function to clear current location if component unmounts
      setCurrentLocation(null);
    };
  }, []);

  return { currentLocation, error };
};

export default useCurrentLocation;
