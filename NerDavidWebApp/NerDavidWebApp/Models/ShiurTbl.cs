using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class ShiurTbl
{
    public int ShiurId { get; set; }

    public string? ShiurName { get; set; }

    public string? ShiurType { get; set; }

    public virtual ICollection<BachurimTbl> BachurimTbls { get; set; } = new List<BachurimTbl>();

    public virtual ICollection<LimudTbl> LimudTbls { get; set; } = new List<LimudTbl>();
}
