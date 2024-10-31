using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class BachurimTbl
{
    public int BachurId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public int? CityId { get; set; }

    public string? Adress { get; set; }

    public string? Phone1 { get; set; }

    public string? Phone2 { get; set; }

    public string? Phone3 { get; set; }

    public int? YeshivaId { get; set; }

    public int? ShiurId { get; set; }

    public virtual CityTbl? City { get; set; }

    public virtual ShiurTbl? Shiur { get; set; }

    public virtual YeshivaTbl? Yeshiva { get; set; }
}
