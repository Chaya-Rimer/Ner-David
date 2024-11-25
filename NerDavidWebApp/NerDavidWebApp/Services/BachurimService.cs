using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class BachurimService:IBachurim
    {
       
            NerDavidDbContext db=new NerDavidDbContext();


        public List<Shiur> GetShiur(int yeshivaId)
        {
           return db.ShiurTbls.Where(x=>x.ShiurType== 
                  db.YeshivaTbls.First(a => a.YeshivaId == yeshivaId).YeshivaType).Select(x=>new Shiur
                  {
                      ShiurId=x.ShiurId,
                      ShiurName=x.ShiurName,
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
            return db.PhonesTbls.Where(x=>x.BachurId== bachurId).ToList();
        }
        //public void NewBachur(NewBachur newBachur)
        //{
        //    //BachurimTbl bachur = new BachurimTbl();
        //    //bachur.
        //   var newbachur= db.BachurimTbls.Add(newBachur.Bachur);
        //    PhonesTbl phones = new PhonesTbl();
        //    phones.BachurId = newbachur.Entity;
        //    db.PhonesTbls.Add()
        //}
        

        
    }
}
