using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class YeshivaTypeTbl
{
    public int YeshivaTypeId { get; set; }

    public string? Type { get; set; }

    public virtual ICollection<ShiurTbl> ShiurTbls { get; set; } = new List<ShiurTbl>();

    public virtual ICollection<YeshivaTbl> YeshivaTbls { get; set; } = new List<YeshivaTbl>();
}
