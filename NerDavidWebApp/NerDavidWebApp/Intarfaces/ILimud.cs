using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Intarfaces
{
    public interface ILimud
    {
        public List<MasechetTbl> GetMasechets();
        public List<LimudDetailsTable> GetBachurLimudTable(int bachurId);
        public List<ZmanTbl> GetZman();


    }
}
