using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class ZmanTbl
{
    public int ZmanId { get; set; }

    public string? ZmanName { get; set; }

    public virtual ICollection<LimudTbl> LimudTbls { get; set; } = new List<LimudTbl>();
}
