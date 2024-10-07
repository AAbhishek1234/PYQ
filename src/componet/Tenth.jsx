import React, { useEffect, useState } from "react";
import pdf from "../assets/pdf/ProjectReport.pdf";

const Tenth = () => {
  const [viewPDF, setViewPDF] = useState(pdf);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setViewPDF(pdf);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = viewPDF;
    link.download = "ProjectReport.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ height: "100vh", width: "100%", overflow: "hidden", position: "relative" }}>
      <iframe
        src={viewPDF}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="10th Class Paper"
      />
      {isMobile && (
        <button
          onClick={handleDownload}
          style={{
            position: "absolute", 
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          Download PDF
        </button>
      )}
    </div>
  );
};

export default Tenth;
