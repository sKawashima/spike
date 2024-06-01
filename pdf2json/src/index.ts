import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataReady", (pdfData) => {
  fs.writeFile(
    "./output.json",
    decodeURI(JSON.stringify(pdfData)),
    (data) => console.log(data)
  );
});

pdfParser.loadPDF("./resource/240430_Eve_Concepts.pdf");
