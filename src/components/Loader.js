import React from "react";

const Loader = () => {
  return (
    <div>
      {/* You can customize the loader's appearance here */}
      <div className="loader-container">
        <div className="loader"></div>
      </div>

      <style jsx>{`
        /* Style the loader here */
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;