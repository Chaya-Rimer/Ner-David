using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class BachurimService:IBachurim
    {
       
            NerDavidDbContext db=new NerDavidDbContext();
        
        //public List<ShiurTbl> GetShiur()
        //{
        //    db.ShiurTbls.Tolist();
        //}

    }
}
