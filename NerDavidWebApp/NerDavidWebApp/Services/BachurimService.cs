using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace NerDavidWebApp.Services
{
    public class BachurimService : IBachurim
    {

        NerDavidDbContext db;

        public BachurimService(NerDavidDbContext context)
        {
            this.db = context;
        }

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
            var cityID = 0; var yeshivaID=0;
            if (newBachur.Bachur.City.CityId == 0) {
                CityTbl c=new CityTbl();
                c.CityName = newBachur.Bachur.City.CityName;
               var newCity= db.CityTbls.Add(c);
                db.SaveChanges();
                cityID = newCity.Entity.CityId;
            }
            else
            {
                 cityID = newBachur.Bachur.City.CityId;
            }
            if (newBachur.Bachur.Yeshiva.YeshivaId == 0)
            {
                YeshivaTbl y = new YeshivaTbl();
                y.YeshivaName = newBachur.Bachur.Yeshiva.YeshivaName;
                y.YeshivaType = newBachur.Bachur.Yeshiva.YeshivaType;
                var NewYeshiva = db.YeshivaTbls.Add(y);
                db.SaveChanges();
                yeshivaID = NewYeshiva.Entity.YeshivaId;
            }
            else
            {
                yeshivaID = newBachur.Bachur.Yeshiva.YeshivaId;
            }
            BachurimTbl b = new BachurimTbl()
            {
                FirstName = newBachur.Bachur.FirstName,
                LastName = newBachur.Bachur.LastName,
                Adress = newBachur.Bachur.Adress,
                CityId = cityID,
                ShiurId = newBachur.Bachur.ShiurId,
                YeshivaId = yeshivaID
            };

            var bachur = db.BachurimTbls.Add(b);
            db.SaveChanges();
            var bachurID = bachur.Entity.BachurId;
            if (newBachur.Limud!=null)
            {
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
            }
            if (newBachur.Phones!=null)
            {
                newBachur.Phones.ForEach(item => db.PhonesTbls.Add(new PhonesTbl()
                {
                    BachurId = bachurID,
                    Phone = item.Phone
                }));
                db.SaveChanges();
            }
        }
    }
}
