import React, { useState, useEffect } from 'react';

export const PopUpMsg = () => {
  const [hasShownMessage, setHasShownMessage] = useState(
    () => localStorage.getItem('messageShown') === 'true'
  );

  useEffect(() => {
    if (!hasShownMessage) {
      const timeoutId = setTimeout(() => {
        setHasShownMessage(true);
      }, 4500); // Set timeout to 3 seconds

      return () => clearTimeout(timeoutId); // Cleanup function for timeout
    }
  }, [hasShownMessage]);

  return (
    <div>
      {hasShownMessage ? null : ( // Only render if not shown
        <div className="pop-up-message fixed  left-0 right-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-95 p-4 rounded-md  transition duration-300 ease-in-out bg-richblack-5">
          Connecting to server... Please wait a moment (10-12 seconds),
          Thank you for your patience while we connect to the server! &#128591;.
        </div>
      )}
    </div>
  );
};
