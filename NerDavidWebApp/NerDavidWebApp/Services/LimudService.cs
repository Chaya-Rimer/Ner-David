using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;
using System.Collections.Generic;

namespace NerDavidWebApp.Services
{
    public class LimudService
    {
        private readonly NerDavidDbContext db;

        public LimudService(NerDavidDbContext context)
        {
            db = context;
        }
        public List<MasechetTbl> GetMasechets()
        {
            return db.MasechetTbls.Select(x => new MasechetTbl
            {
                MasechetId = x.MasechetId,
                MasechetName = x.MasechetName,
                PrakimNum = x.PrakimNum.Trim()
            }).ToList();
        }
        public List<LimudDetailsTable> GetBachurLimudTable(int bachurId)
        {
            List<LimudDetailsTable> limudDetails = db.LimudTbls.Where(x => x.BachurId == bachurId)
                .Select(x => new LimudDetailsTable()
                {
                    LimudId = x.LimudId,
                    YearId = x.YearId,
                    YearName = x.Year.YearName,
                    ZmanId = x.ZmanId,
                    ZmanName = x.Zman.ZmanName,
                    MasechetId = x.MasechetId,
                    MasechetName = x.Masechet.MasechetName,
                    Perek = x.Perek,
                    StartValue = x.StartValue,
                    EndValue = x.EndValue,
                    Tested = x.Tested,
                    YeshivaId = x.YeshivaId,
                    YeshivaName = x.Yeshiva.YeshivaName,
                    ShiurId = x.ShiurId,
                    ShiurName = x.Shiur.ShiurName
                }).OrderBy(x => x.YearId)
                .ToList();
                
                
            return limudDetails;
        }
        public List<ZmanTbl> GetZman()
        {
            return db.ZmanTbls.ToList();
        }

    }
}
