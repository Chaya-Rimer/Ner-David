using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    [ApiController]
    public class LimudController : ControllerBase
    {
        public readonly LimudService service;
        public LimudController(NerDavidDbContext context)
        {
            service = new LimudService(context);
        }

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
        [HttpGet]
        public List<ZmanTbl> GetZman()
        {
            return service.GetZman();
        }

    }
}
