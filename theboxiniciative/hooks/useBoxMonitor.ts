import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react'; // Import React's state and effect hooks

// --- Helper Functions for Random Values ---

// Gets a random integer between min and max (inclusive)
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Gets a random float with one decimal place
const getRandomFloat = (min: number, max: number) => {
  // Get a random number in the range
  const val = Math.random() * (max - min) + min;
  // Round it to 1 decimal place and return as a number
  return parseFloat(val.toFixed(1));
};

// --- The Hook ---

export const useBoxMonitor = () => {
  const { id } = useLocalSearchParams(); 
  
  // This static data doesn't change
  const boxData = {
    name: decodeURIComponent(id as string), 
    address: 'Colonia centro #53',
    color: '#f39c12',
  };

  // --- NEW SENSOR STATE ---
  // Set the *initial* state to a random value
  const [temperature, setTemperature] = useState(getRandomFloat(-10, 50));
  const [humidity, setHumidity] = useState(getRandomInt(0, 100));
  const [weight, setWeight] = useState(getRandomFloat(0, 100));

  // --- NEW UPDATE EFFECT ---
  useEffect(() => {
    // Set up an interval to run every 10,000 milliseconds (10 seconds)
    const intervalId = setInterval(() => {
      // Set the state with new random values
      setTemperature(getRandomFloat(-10, 50));
      setHumidity(getRandomInt(0, 100));
      setWeight(getRandomFloat(0, 100));
    }, 10000); 

    // This is a cleanup function.
    // React runs this when the component unmounts to prevent memory leaks.
    return () => clearInterval(intervalId);

  }, []); // The empty array [] means this effect runs only once when the hook is first used.

  // --- RETURN ALL DATA ---
  return {
    boxData,
    // Return the sensor data in the format the screen expects
    sensorData: {
      temperature: `${temperature}°C`,
      humidity: `${humidity}%`,
      weight: `${weight}kg`,
    },
  };
};