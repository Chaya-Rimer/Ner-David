using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace NerDavidWebApp.Services
{
    public class BachurimService:IBachurim
    {
       
            NerDavidDbContext db=new NerDavidDbContext();


        public List<Shiur> GetShiurByYeshivaId(int yeshivaId)
        {
           return db.ShiurTbls.Where(x=>x.ShiurType== 
                  db.YeshivaTbls.First(a => a.YeshivaId == yeshivaId).YeshivaType).Select(x=>new Shiur
                  {
                      ShiurId=x.ShiurId,
                      ShiurName=x.ShiurName,
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
            return db.PhonesTbls.Where(x=>x.BachurId== bachurId).ToList();
        }
        public List<KeyValuePair<char, string[]>> GetBachurimNames()
        {
            var bachurimName = db.BachurimTbls.Select(x => new KeyValuePair<char, string>(x.LastName[0], x.LastName + " " + x.FirstName)).ToList();
            var groupedList = bachurimName.GroupBy(x => x.Key).Select(x => new KeyValuePair<char, string[]>(x.Key, x.Select(y => y.Value).ToArray())).OrderBy(x=>x.Key).ToList();
            //var bachurimNames = db.BachurimTbls.Select(x=>x.LastName+" "+x.FirstName).ToList();
            //var sortedNames = bachurimNames.Select(x => new BachurimNames() { Letter = x[0], Name = x }).GroupBy(x=>x.Letter).ToList();
            //List<aa> aa = sortedNames.Select(x=> new aa() { Letter=x.Key.ToString(),Names=x.ToList().Select(x=>x.Name).ToArray() }).ToList();
            //return aa;
            return groupedList;
        }



    }
}
