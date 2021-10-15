import { Typography } from '@mui/material';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import PdfIcon from '@mui/icons-material/PictureAsPdf';

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
        right: '50px',
        bottom: '30px',
        // transform: 'translate(50%, 0) rotate(-90deg) translate(0, -1.2rem)',
        color: color,
        // fontWeight: 'bold',
        // border: color + ' dashed',
        // borderRadius: '5px 5px 0px 0',
        // backgroundColor: bgc,
        // boxShadow: '0 0 0 5px ' + bgc,
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        backgroundColor: '#121212',
        borderRadius: '100px',
        padding: '15px',
        width: '64px',
        height: '64px',
      }}
    >
      {/* <Typography variant="span" sx={{ display: 'inline-block' }}>
        PDF로 저장
      </Typography> */}
      <PdfIcon
        sx={{
          fontSize: '30px',
        }}
      />
    </button>
  );
}
