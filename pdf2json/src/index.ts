import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataReady", (pdfData) => {
  const pagesText = pdfData.Pages.map(page => {
    return page.Texts.map(text => {
      return text.R.map(r => {
        const decodedText = decodeURIComponent(r.T);
        return decodedText;
      }).filter((text) => text !== '').join('');
    });
  });

  fs.writeFile(
    "./output.json",
    JSON.stringify(pagesText.map((texts, pageIndex) => {
      return {
        page: pageIndex + 1,
        texts: texts
      };
    })
  ),
    (data) => console.log(data)
  );
});

pdfParser.loadPDF("./resource/240430_Eve_Concepts.pdf");
