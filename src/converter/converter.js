import html2pdf from 'html2pdf.js'
export class Converter {
     static convert() {
        const element = document.getElementById("generator");
        html2pdf(element);
    }
}
