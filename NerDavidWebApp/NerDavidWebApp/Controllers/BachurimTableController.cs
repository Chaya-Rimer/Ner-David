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
        private readonly BachurimTableService Service;

        public BachurimTableController(BachurimTableService myService)
        {
            Service = myService;
        }
        [HttpGet]
        public List<BachurimTable> GetBachurimTable(int type)
        {
            return Service.GetBachurimTable(type);
        }
    }
}
