import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {

    const fetchBackend = async () => {
      try {

        const response = await axios.get(
          "http://localhost:5000/api/test"
        );

        setMessage(response.data.message);

      } catch (error) {
        console.log(error);
      }
    };

    fetchBackend();

  }, []);

  return (
    <div className="text-white">
      <h1 className="text-5xl font-bold">
        {message}
      </h1>
    </div>
  )
}

export default Home