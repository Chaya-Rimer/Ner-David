using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Models;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    [ApiController]
    public class DisplayDataController : ControllerBase
    {


        DisplayDataService service;


        public DisplayDataController(NerDavidDbContext context)
        {
            service = new DisplayDataService(context);
        }


        [HttpGet]
        public List<DisplayDataTbl> GetColumnsToTable(int displayType)
        {
            return service.GetColumnsToTable(displayType);
        }
    }
}
