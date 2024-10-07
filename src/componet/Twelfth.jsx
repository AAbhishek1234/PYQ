import React, { useEffect, useState } from "react";
import pdf from "../assets/pdf/ProjectReport.pdf";
import './Tenth.css'; // Import your CSS file

const Twelfth = () => {
  const [viewPDF, setViewPDF] = useState(pdf);

  useEffect(() => {
    setViewPDF(pdf);
  }, []);

  return (
    <div className="iframe-container">
      <iframe src={viewPDF} className="pdf-iframe" title="10th Class Paper" />
    </div>
  );
};

export default Twelfth;
