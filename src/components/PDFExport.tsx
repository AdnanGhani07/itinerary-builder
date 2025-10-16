import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Footer lines to repeat at intervals
const footerTextLines = [
  "Sample Business Name",
  "123 Main Street, Example City, Country",
  "Phone: +1-234-567-8901  Email: info@example.com  Ref: 456XYZ",
  "Branding | Plan. Pack. Go.",
];

interface PDFExportProps {
  previewRef: React.RefObject<HTMLDivElement | null>;
}

// Choose where footers should go (in px from top)
const getFooterPositions = (imgHeight: number, spacing: number = 800): number[] => {
  const positions: number[] = [];
  for (let y = spacing; y < imgHeight; y += spacing) {
    positions.push(y);
  }
  return positions;
};


const PDFExport: React.FC<PDFExportProps> = ({ previewRef }) => {
  const handleExport = async () => {
    const element = previewRef.current;
    if (!element) return;

    const scale = window.devicePixelRatio || 2;
    const canvas = await html2canvas(element, { scale });
    const imgData = canvas.toDataURL("image/png");

    const imgHeight = canvas.height;
    const imgWidth = canvas.width;
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [imgWidth, imgHeight + 60], // add height for footer
    });

    // Add the main image
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    // Draw footer only at the very end
    const footerHeight = 45;
    const footerY = imgHeight + 15;

    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, footerY, imgWidth, footerHeight, "F");

    pdf.setFontSize(10);
    pdf.setTextColor(70, 30, 140);
    footerTextLines.forEach((line, idx) => {
      pdf.text(line, 24, footerY + 18 + idx * 12);
    });

    pdf.save("itinerary.pdf");
  };

  return (
    <div className="text-center mt-4">
      <button
        className="bg-purple-700 text-white px-4 py-2 rounded font-bold"
        onClick={handleExport}
      >
        Download PDF
      </button>
    </div>
  );
};

export default PDFExport;