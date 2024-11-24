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
                Shiur=x.Shiur.ShiurName+ " "+x.Shiur.ShiurType,
                Status=x.Status.StatusSymbol
            }).ToList();
        }

    }
}
