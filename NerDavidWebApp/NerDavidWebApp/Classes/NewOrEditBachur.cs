using NerDavidWebApp.Models;

namespace NerDavidWebApp.Classes
{
    public class NewOrEditBachur
    {
        public BachurimTbl Bachur { get; set; }
        public List<PhonesTbl>? Phones { get; set; }
        public List<LimudDetails>? Limud { get; set; }
    }
}
