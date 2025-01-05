using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Models;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class DisplayDataController : ControllerBase
    {
        private readonly DisplayDataService _service;

        public DisplayDataController(DisplayDataService myService)
        {
            _service = myService;
        }
        [HttpGet]
        public List<DisplayDataTbl> GetColumnsToTable(int displayType)
        {
            return _service.GetColumnsToTable(displayType);
        }
    }
}
