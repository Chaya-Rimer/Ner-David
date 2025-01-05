using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class DisplayDataService
    {
        private readonly NerDavidDbContext db;

        public DisplayDataService(NerDavidDbContext context)
        {
            db = context;
        }
        public List<DisplayDataTbl>GetColumnsToTable(int displayType)
        {
         return db.DisplayDataTbls.Where(x => x.DisplayType == displayType).OrderBy(x=>x.OrderBy).ToList();
        }
    }
}
