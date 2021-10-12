import { Typography } from '@mui/material';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

export default function PdfExportButton({ exportTarget }) {
  const handleExportWithFunction = (event) => {
    savePDF(exportTarget.current, { imageResolution: 300 });
  };

  const bgc = 'red';
  const color = 'white';
  return (
    <button
      className="export-pdf-button"
      onClick={handleExportWithFunction}
      style={{
        position: 'fixed',
        right: 0,
        top: '50vh',
        transform: 'translate(50%, 0) rotate(-90deg) translate(0, -1.2rem)',
        backgroundColor: bgc,
        color: color,
        // fontWeight: 'bold',
        border: color + ' dashed',
        borderRadius: '5px 5px 0px 0',
        boxShadow: '0 0 0 5px ' + bgc,
        padding: '15px',
      }}
    >
      <Typography>PDF로 저장</Typography>
    </button>
  );
}
