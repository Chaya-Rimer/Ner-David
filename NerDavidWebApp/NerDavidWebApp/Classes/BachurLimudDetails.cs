using NerDavidWebApp.Models;

namespace NerDavidWebApp.Classes
{
    public class BachurLimudDetails
    {
        public int LimudId { get; set; }

        public int BachurId { get; set; }

        public MasechetTbl Masechet { get; set; }

        public string? Perek { get; set; }

        public string? StartValue { get; set; }

        public string? EndValue { get; set; }

        public YearsTbl Year { get; set; }

        public ZmanTbl Zman{ get; set; }

        public bool? Tested { get; set; }
    }
}
