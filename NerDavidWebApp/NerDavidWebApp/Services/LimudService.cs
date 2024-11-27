using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class LimudService
    {
        NerDavidDbContext db = new NerDavidDbContext();
        public List<MasechetTbl> GetMasechets()
        {
            return db.MasechetTbls.Select(x=>new MasechetTbl
            {
                MasechetId=x.MasechetId,
                MasechetName=x.MasechetName,
                PrakimNum = x.PrakimNum.Trim()
            }).ToList();
        }
    }
}
