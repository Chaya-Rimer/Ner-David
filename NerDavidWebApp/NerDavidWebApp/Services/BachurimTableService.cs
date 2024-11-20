using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class BachurimTableService
    {
        NerDavidDbContext db = new NerDavidDbContext();
        public List<BachurimTable> GetBachurimTable()
        {
            return db.BachurimTbls.Select(x=>new BachurimTable
            {
                BachurId=x.BachurId,
                LastName=x.LastName,
                FirstName=x.FirstName,
                Yeshiva=x.Yeshiva.YeshivaName,
                Shiur=x.Shiur.ShiurName,
                YeshivaType = x.Yeshiva.YeshivaType,
                Adress = x.Adress,
                City = x.City.CityName,
                Phone1 = x.Phone1,
                Phone2 = x.Phone2,
                Phone3 = x.Phone3
            }).ToList();
        }

    }
}
