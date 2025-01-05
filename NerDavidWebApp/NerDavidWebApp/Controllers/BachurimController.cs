﻿using Microsoft.AspNetCore.Authorization;
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
     
        public readonly BachurimService BachurimService;
        public BachurimController(NerDavidDbContext context)
        {
            BachurimService = new BachurimService(context);
        }

        [HttpGet]
        public List<Shiur> GetShiurByYeshivaId(int yeshivaId)
        {
            return BachurimService.GetShiurByYeshivaId(yeshivaId);
        }
        [HttpGet]
        public List<Shiur> GetShiur()
        {
            return BachurimService.GetShiur();
        }
        [HttpGet]
        public List<YeshivaTbl> GetYeshiva()
        {
            return BachurimService.GetYeshiva();
        }
        [HttpGet]
        public List<CityTbl> GetCity()
        {
            return BachurimService.GetCity();
        }

        [HttpPost]
        public void NewBachur(NewOrEditBachur newBachur)
        {
             BachurimService.NewBachur(newBachur);
        }

    }
}
