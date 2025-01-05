using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;
using NerDavidWebApp.Services;

namespace NerDavidWebApp.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    [ApiController]
    public class BachurimController : ControllerBase
    {

        private readonly BachurimService _bachurimService;

        public BachurimController(BachurimService myService)
        {
            _bachurimService = myService;
        }
        [HttpGet]
        public BachurimTbl GetBachurDetail(int bachurId)
        {
            return _bachurimService.GetBachurDetail(bachurId);
        }

        [HttpGet]
        public List<Shiur> GetShiurByYeshivaId(int yeshivaId)
        {
            return _bachurimService.GetShiurByYeshivaId(yeshivaId);
        }
        [HttpGet]
        public List<Shiur> GetShiur()
        {
            return _bachurimService.GetShiur();
        }
        [HttpGet]
        public List<YeshivaTbl> GetYeshiva()
        {
            return _bachurimService.GetYeshiva();
        }
        [HttpGet]
        public List<CityTbl> GetCity()
        {
            return _bachurimService.GetCity();
        }

        [HttpPost]
        public void NewBachur(NewOrEditBachur newBachur)
        {
            _bachurimService.NewBachur(newBachur);
        }

    }
}
