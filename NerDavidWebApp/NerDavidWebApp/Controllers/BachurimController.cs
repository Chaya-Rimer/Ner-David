using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class BachurimController : ControllerBase
    {
        IBachurim bachurim;
        [HttpGet]
        //public List<ShiurTbl> GetShiur()
        //{
        //    return bachurim.GetShiur();
        //}
        public int Hellow()
        {
            return 3;
        }


    }
}
