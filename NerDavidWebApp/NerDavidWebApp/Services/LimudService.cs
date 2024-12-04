using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;
using System.Data.Entity;

namespace NerDavidWebApp.Services
{
    public class LimudService
    {
        NerDavidDbContext db = new NerDavidDbContext();
        public List<MasechetTbl> GetMasechets()
        {
            return db.MasechetTbls.Select(x => new MasechetTbl
            {
                MasechetId = x.MasechetId,
                MasechetName = x.MasechetName,
                PrakimNum = x.PrakimNum.Trim()
            }).ToList();
        }
        public List<LimudTbl> GetBachurLimudTable(int bachurId)
        {
            //var bachurimLimudDetails = db.LimudTbls.Where(x => x.BachurId == bachurId)

            var a = db.LimudTbls.Include(x => x.Masechet).Where(x => x.BachurId == bachurId).ToList();
            var w = a.First().Masechet;
            //a.ForEach(x => x.Masechet = db.MasechetTbls.Where(y => y.MasechetId == x.MasechetId).First());


            return a;
        }
        public List<ZmanTbl> GetZman()
        {
            return db.ZmanTbls.ToList();
        }

    }
}
