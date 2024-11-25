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
                //Phones = x.PhonesTbl.Select(y => y.PhoneNumber).ToList()
                //Status=x.Status.StatusSymbol
            }).ToList();
        }

    }
}
