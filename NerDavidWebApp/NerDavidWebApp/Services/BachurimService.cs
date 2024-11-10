using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class BachurimService:IBachurim
    {
       
            NerDavidDbContext db=new NerDavidDbContext();


        public List<ShiurTbl> GetShiur()
        {
           return db.ShiurTbls.ToList();
        }
        public List<BachurimTbl> GetBachurimTable()
        {
            return db.BachurimTbls.ToList();
        }

    }
}
