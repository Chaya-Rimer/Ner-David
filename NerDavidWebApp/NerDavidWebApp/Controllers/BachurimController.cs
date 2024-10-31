using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BachurimController : ControllerBase
    {
        IBachurim bachurim;
        
        public List<ShiurTbl> GetShiur()
        {
            return bachurim.GetShiur();
        }

    }
}
