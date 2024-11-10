using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class YearsTbl
{
    public int YearId { get; set; }

    public string? YearName { get; set; }

    public virtual ICollection<LimudTbl> LimudTbls { get; set; } = new List<LimudTbl>();

    public virtual ICollection<TestsTbl> TestsTbls { get; set; } = new List<TestsTbl>();
}
