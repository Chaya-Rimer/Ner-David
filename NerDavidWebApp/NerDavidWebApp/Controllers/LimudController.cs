using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class LimudController : ControllerBase
    {
        LimudService service = new LimudService();

        [HttpGet]
        public List<MasechetTbl> GetMasechets()
        {
            return service.GetMasechets();
        }
        [HttpGet]
        public List<LimudDetails> GetBachurLimudTable(int bachurId)
        {
            return service.GetBachurLimudTable(bachurId);
        }

    }
}
