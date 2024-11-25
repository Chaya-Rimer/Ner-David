using NerDavidWebApp.Models;

namespace NerDavidWebApp.Classes
{
    public class BachurimTable
    {
        public int BachurId { get; set; }

        public string? LastName { get; set; }

        public string? FirstName { get; set; }

        public string? Yeshiva { get; set; }

        public string? Shiur { get; set; }

        public string? YeshivaType { get; set; }

        public string? City { get; set; }

        public string? Adress { get; set; }

        public List<string>? Phones { get; set; }

    }
}
