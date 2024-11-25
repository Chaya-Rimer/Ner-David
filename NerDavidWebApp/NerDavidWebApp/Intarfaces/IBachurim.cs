using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Intarfaces
{
    public interface IBachurim
    {
        public List<Shiur> GetShiur(int yeshivaId);
        public List<YeshivaTbl> GetYeshiva();
        public List<CityTbl> GetCity();
    }
}
