using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;
using System.Collections.Generic;
namespace NerDavidWebApp.Services
{
    public class BachurimService : IBachurim
    {
        private readonly NerDavidDbContext db;

        public BachurimService(NerDavidDbContext context)
        {
            db = context;
        }

        public NewOrEditBachur GetBachurDetail(int bachurId)
        {
            //return db.BachurimTbls
            //            //.Include(b => b.Shiur)
            //            .FirstOrDefault(b => b.BachurId == bachurId);

            //if (bachur == null)
            //{
            //    return new BachurimTbl();
            //}

            NewOrEditBachur editBachur = new NewOrEditBachur();
            bachur bachur = db.BachurimTbls.Where(x => x.BachurId == bachurId).Select(x => new bachur()
            {
                BachurId = x.BachurId,
                FirstName = x.FirstName,
                LastName = x.LastName,
                City = new KeyValuePair<int, string>((int)x.CityId, x.City.CityName),
                Adress = x.Adress,
                Yeshiva = new Yeshiva{
                    YeshivaId= (int)x.YeshivaId,
                    YeshivaName= x.Yeshiva.YeshivaName,
                    YeshivaType= x.Yeshiva.YeshivaType 
                },
                Shiur = new KeyValuePair<int, string>((int)x.ShiurId, x.Shiur.ShiurName),
                Status = new KeyValuePair<int, string>((int)x.StatusId, x.Status.StatusSymbol),
            }).FirstOrDefault();
            List<PhonesTbl> phones = db.PhonesTbls.Where(x => x.BachurId == bachurId).ToList();
            List<Limud> limuds = db.LimudTbls.Where(x => x.BachurId == bachurId).Select(x=>new Limud()
            {
                LimudId=x.LimudId,
                Masechet= new KeyValuePair<int, string>((int)x.MasechetId, x.Masechet.MasechetName),
                Perek = x.Perek,
                StartValue = x.StartValue,
                EndValue=x.EndValue,
                Year = new KeyValuePair<int, string>((int)x.YearId, x.Year.YearName),
                Zman = new KeyValuePair<int, string>((int)x.ZmanId, x.Zman.ZmanName),
                Tested=x.Tested,
                Shiur = new KeyValuePair<int, string>((int)x.ShiurId, x.Shiur.ShiurName),
                Yeshiva  = new Yeshiva
                {
                    YeshivaId = (int)x.YeshivaId,
                    YeshivaName = x.Yeshiva.YeshivaName,
                    YeshivaType = x.Yeshiva.YeshivaType
                },
            }).ToList();
            editBachur.Bachur = bachur;
            editBachur.Phones = phones;
            editBachur.Limud = limuds;
            return editBachur;
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
            if (newBachur.Bachur.City.Key == 0) {
                CityTbl c=new CityTbl();
                c.CityName = newBachur.Bachur.City.Value;
               var newCity= db.CityTbls.Add(c);
                db.SaveChanges();
                cityID = newCity.Entity.CityId;
            }
            else
            {
                 cityID = newBachur.Bachur.City.Key;
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
                ShiurId = newBachur.Bachur.Shiur.Key,
                YeshivaId = yeshivaID,
                StatusId=1
            };

            var bachur = db.BachurimTbls.Add(b);
            db.SaveChanges();
            var bachurID = bachur.Entity.BachurId;
            if (newBachur.Limud!=null)
            {
                newBachur.Limud.ForEach(item => db.LimudTbls.Add(new LimudTbl()
                {
                    BachurId = bachurID,
                    MasechetId = item.Masechet.Key,
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
