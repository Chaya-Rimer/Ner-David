using NerDavidWebApp.Models;

namespace NerDavidWebApp.Classes
{
    public class NewOrEditBachur
    {
        public bachur Bachur { get; set; }
        public List<PhonesTbl>? Phones { get; set; }
        public List<Limud>? Limud { get; set; }
    }
    public class bachur
    {
        public int BachurId {get; set;}
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public KeyValuePair<int,string> City { get; set; }
        public string? Adress { get; set; }
        public Yeshiva Yeshiva { get; set; }
        public KeyValuePair<int, string> Shiur { get; set; }
        public KeyValuePair<int, string> Status { get; set; }
    }
    public class Limud
    {
        public int LimudId { get; set; }

        public KeyValuePair<int, string> Masechet { get; set; }

        public string? Perek { get; set; }

        public string? StartValue { get; set; }

        public string? EndValue { get; set; }

        public KeyValuePair<int, string> Year { get; set; }

        public KeyValuePair<int, string> Zman { get; set; }

        public bool? Tested { get; set; }

        public Yeshiva Yeshiva { get; set; }

        public KeyValuePair<int, string> Shiur { get; set; }

    }
    public class Yeshiva
    {
        public int YeshivaId { get; set; }

        public string? YeshivaName { get; set; }

        public int? YeshivaType { get; set; }
    }
}
