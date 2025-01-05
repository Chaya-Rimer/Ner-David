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
        private readonly LimudService _service;

        public LimudController(LimudService myService)
        {
            _service = myService;
        }
        [HttpGet]
        public List<MasechetTbl> GetMasechets()
        {
            return _service.GetMasechets();
        }
        [HttpGet]
        public List<LimudDetails> GetBachurLimudTable(int bachurId)
        {
            return _service.GetBachurLimudTable(bachurId);
        }
        [HttpGet]
        public List<ZmanTbl> GetZman()
        {
            return _service.GetZman();
        }

    }
}
