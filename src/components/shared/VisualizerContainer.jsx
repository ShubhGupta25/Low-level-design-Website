import React from "react";

const VisualizerContainer = ({ title, subtitle, children }) => {
  return (
    <>
      <style>{`
        .vc-container {
          font-family: 'Inter', sans-serif;
          background-color: #1A1A1A;
          color: #F0F0F0;
          padding: 1.5rem 1rem;
          border-radius: 1rem;
          max-width: 100%;
          border: 1px solid #333;
          box-sizing: border-box;
          margin-top: 4rem;
        }

        .vc-header {
          text-align: center;
          border-bottom: 1px solid #333;
          padding-bottom: 1rem;
        }

        .vc-title {
          font-size: 1.8rem;
          line-height: 1.2;
          background: linear-gradient(90deg, #A569BD, #5DADE2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .vc-subtitle {
          font-size: 0.95rem;
          color: #999;
          font-weight: 300;
          margin-top: 0.5rem;
        }

        /* Tablet screens (≥600px) */
        @media (min-width: 600px) {
          .vc-container {
            padding: 2rem;
            border-radius: 1.25rem;
          }
          .vc-title {
            font-size: 2.2rem;
          }
          .vc-subtitle {
            font-size: 1.05rem;
          }
        }

        /* Small desktops (≥900px) */
        @media (min-width: 900px) {
          .vc-container {
            padding: 2rem 3rem;
            border-radius: 1.5rem;
            max-width: 95%;
            margin: 3rem 1rem 0rem 4rem;
          }
          .vc-title {
            font-size: 2.5rem;
          }
          .vc-subtitle {
            font-size: 1.1rem;
          }
        }

        /* Large desktops (≥1200px) */
        @media (min-width: 1200px) {
          .vc-container {
            max-width: 1300px;
            margin: 3rem 1rem 0rem 4rem;
          }
          .vc-title {
            font-size: 2.8rem;
          }
          .vc-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="vc-container">
        <header className="vc-header">
          <h1 className="vc-title">{title}</h1>
          {subtitle && <p className="vc-subtitle">{subtitle}</p>}
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default VisualizerContainer;
