using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class BachurimTableService
    {
        NerDavidDbContext db = new NerDavidDbContext();
        public List<BachurimTable> GetBachurimTable(int type)
        {
            var table= db.BachurimTbls.Select(x=>new BachurimTable
            {
                BachurId=x.BachurId,
                LastName=x.LastName,
                FirstName=x.FirstName,
                Yeshiva=x.Yeshiva.YeshivaName,
                Shiur=x.Shiur.ShiurName,
                YeshivaType = x.Yeshiva.YeshivaType,
                Adress = x.Adress,
                City = x.City.CityName,
                Status=x.Status.StatusSymbol,
                StatusName = x.Status.Status
                //Phones = x.PhonesTbl.Select(y => y.PhoneNumber).ToList()
                //Status=x.Status.StatusSymbol
            }).ToList();
            if (type == 1)
            {
                return table.Where(y => y.YeshivaType == "ג").ToList();
            }
            else
                return table.Where(y => y.YeshivaType == "ק").ToList();

        }

    }
}
