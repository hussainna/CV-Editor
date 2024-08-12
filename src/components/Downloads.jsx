import React, { useRef } from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import CV from '../layouts/CV'
function Downloads() {
  const componentRef = useRef();

  const handleDownloadPDF = async () => {
    try {
      const element = componentRef.current;
      if (!element) {
        console.error('Invalid element provided as first argument');
        return;
      }
      const canvas = await html2canvas(element);
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgProperties = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =
        (imgProperties.height * pdfWidth) / imgProperties.width;
      pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cv.pdf');
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };


  return (
    <div className='Downloads'>
      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
        <CV componentRef={componentRef} />
      </div>     
        <div className="icon-download" onClick={handleDownloadPDF}>
            <span>PDF</span>
            <i><FaCloudDownloadAlt /></i>
        </div>
        <div className="icon-download">
            <span>Word</span>
            <i><FaCloudDownloadAlt /></i>
        </div>
    </div>
  )
}

export default Downloads