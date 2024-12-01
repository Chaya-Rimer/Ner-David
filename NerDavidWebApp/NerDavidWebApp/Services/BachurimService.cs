using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace NerDavidWebApp.Services
{
    public class BachurimService : IBachurim
    {

        NerDavidDbContext db = new NerDavidDbContext();


        public List<Shiur> GetShiurByYeshivaId(int yeshivaId)
        {
            return db.ShiurTbls.Where(x => x.ShiurType ==
                   db.YeshivaTbls.First(a => a.YeshivaId == yeshivaId).YeshivaType).Select(x => new Shiur
                   {
                       ShiurId = x.ShiurId,
                       ShiurName = x.ShiurName,
                   }).ToList();
        }
        public List<Shiur> GetShiur()
        {
            return db.ShiurTbls.Select(x => new Shiur
            {
                ShiurId = x.ShiurId,
                ShiurName = x.ShiurName,
            }).ToList();
        }
        public List<YeshivaTbl> GetYeshiva()
        {
            return db.YeshivaTbls.ToList();
        }
        public List<CityTbl> GetCity()
        {
            return db.CityTbls.ToList();
        }
        public List<PhonesTbl> GetPhones(int bachurId)
        {
            return db.PhonesTbls.Where(x => x.BachurId == bachurId).ToList();
        }
        public void NewBachur(NewOrEditBachur newBachur)
        {
            BachurimTbl b = new BachurimTbl()
            {
                FirstName = newBachur.Bachur.FirstName,
                LastName = newBachur.Bachur.LastName,
                Adress = newBachur.Bachur.Adress,
                CityId = newBachur.Bachur.City.CityId,
                ShiurId = newBachur.Bachur.ShiurId,
                YeshivaId = newBachur.Bachur.YeshivaId
            };

            var bachur = db.BachurimTbls.Add(b);
            db.SaveChanges();
            var bachurID = bachur.Entity.BachurId;

            newBachur.Limud.ForEach(item => db.LimudTbls.Add(new LimudTbl()
            {
                BachurId = bachurID,
                MasechetId = item.MasechetId,
                Perek = item.Perek,
                StartValue = item.StartValue,
                EndValue = item.EndValue
                //ZmanId = item.ZmanId,
                //YearId = item.YearId,
                //Tested = item.Tested
            }));
            db.SaveChanges();

            newBachur.Phones.ForEach(item => db.PhonesTbls.Add(new PhonesTbl()
            {
                BachurId = bachurID,
                Phone = item.Phone
            }));
            db.SaveChanges();
        }



    }
}
