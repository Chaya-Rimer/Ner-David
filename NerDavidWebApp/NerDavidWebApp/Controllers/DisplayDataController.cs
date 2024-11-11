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
        DisplayDataService service = new DisplayDataService();
        [HttpGet]
        public List<DisplayDataTbl> GetColumnsToTable(int displayType)
        {
            return service.GetColumnsToTable(displayType);
        }
    }
}
