using iText.IO.Image;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using iText.Layout.Properties;

namespace NerDavidWebApp.Services
{
    public class CreatePDFService
    {
        public void CreatePdf(string filePath)
        {
            using (PdfWriter writer = new PdfWriter(filePath))
            using (PdfDocument pdf = new PdfDocument(writer))
            {
                Document document = new Document(pdf);

                // הוספת לוגו במרכז
                Image logo = new Image(ImageDataFactory.Create("path/to/logo.png")).SetTextAlignment(TextAlignment.CENTER);
                document.Add(logo);

                // הוספת כיתוב מתחת ללוגו
                Paragraph paragraph = new Paragraph("כיתוב כאן")
                    .SetTextAlignment(TextAlignment.CENTER)
                    .SetFontSize(12);
                document.Add(paragraph);

                document.Close();
            }
        }
    }
}
