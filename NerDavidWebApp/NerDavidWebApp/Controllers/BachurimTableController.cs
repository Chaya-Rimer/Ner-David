using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Classes;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{

    [Route("[controller]/[action]")]
    [ApiController]
    public class BachurimTableController : ControllerBase
    {
        BachurimTableService Service = new BachurimTableService();
        [HttpGet]
        public List<BachurimTable> GetBachurimTable()
        {
            return Service.GetBachurimTable();
        }



    }
}
