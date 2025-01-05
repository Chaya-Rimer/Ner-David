using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Intarfaces
{
    public interface IBachurim
    {
        public BachurimTbl GetBachurDetail(int bachurId);
        public List<Shiur> GetShiurByYeshivaId(int yeshivaId);
        public List<YeshivaTbl> GetYeshiva();
        public List<CityTbl> GetCity();
        public List<PhonesTbl> GetPhones(int bachurId);
        public List<Shiur> GetShiur();
        public void NewBachur(NewOrEditBachur newBachur);


    }
}
