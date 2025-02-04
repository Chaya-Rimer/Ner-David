using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    [ApiController]
    public class CreatePDFController : ControllerBase
    {
        private readonly CreatePDFService _pdfService;

        public CreatePDFController(CreatePDFService myService)
        {
            _pdfService = myService;
        }
        //[HttpGet]
        //public void CreateFile()
        //{
        //    using (SaveFileDialog saveFileDialog = new SaveFileDialog())
        //    {
        //        saveFileDialog.FileName = "Document.pdf";
        //        saveFileDialog.Filter = "PDF files (*.pdf)|*.pdf";
        //        if (saveFileDialog.ShowDialog() == DialogResult.OK)
        //        {
        //            string filePath = saveFileDialog.FileName;
        //            _pdfService.CreatePdf(filePath);
        //        }
        //    }
        //    return View();
        //}

    }
}
