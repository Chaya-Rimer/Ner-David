using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class LimudTbl
{
    public int LimudId { get; set; }

    public int BachurId { get; set; }

    public int MasechetId { get; set; }

    public string? Perek { get; set; }

    public string? StartValue { get; set; }

    public string? EndValue { get; set; }

    public int YearId { get; set; }

    public int ZmanId { get; set; }

    public bool? Tested { get; set; }

    public int? YeshivaId { get; set; }

    public int? ShiurId { get; set; }

    public virtual BachurimTbl Bachur { get; set; } = null!;

    public virtual MasechetTbl Masechet { get; set; } = null!;

    public virtual ShiurTbl? Shiur { get; set; }

    public virtual YearsTbl Year { get; set; } = null!;

    public virtual YeshivaTbl? Yeshiva { get; set; }

    public virtual ZmanTbl Zman { get; set; } = null!;
}
