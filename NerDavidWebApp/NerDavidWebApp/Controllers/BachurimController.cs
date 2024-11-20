using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{
    [Route("[controller]/[action]")]

    [ApiController]
    public class BachurimController : ControllerBase
    {
     
        public readonly BachurimService BachurimService=new BachurimService();


        [HttpGet]
        public List<ShiurTbl> GetShiur()
        {
            return BachurimService.GetShiur();
        }
        [HttpGet]
        public List<BachurimTbl> GetBachurimTable()
        {
            return BachurimService.GetBachurimTable();
        }
        [HttpGet]
        public List<KeyValuePair<char, string[]>> GetBachurimNames()
        {
            return BachurimService.GetBachurimNames(); 
        }
    }
}
