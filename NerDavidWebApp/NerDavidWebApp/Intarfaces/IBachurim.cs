using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Intarfaces
{
    public interface IBachurim
    {

        public List<ShiurTbl> GetShiur();
        public List<BachurimTbl> GetBachurimTable();
        public List<KeyValuePair<char, string[]>> GetBachurimNames();

    }
}
