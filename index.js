

const generatePdf = async (name) => {
    const { PDFDocument } = PDFLib;

    const exBytes = await fetch("./Cert.pdf").then((res) => {
        return res.arrayBuffer();
    });
    const exFont = await fetch("./RobotoSlab-Regular.ttf").then ((res)=>{
        return res.arrayBuffer()
    });
   

   
    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontKit(fontKit);
    const myFont = await pdfDoc.embedFont(exFont);
   
    const uri = await pdfDoc.saveAsBase64({ dataUri: true });
    document.querySelector("#mypdf").src = uri;
};

generatePdf("saloni saroha");
