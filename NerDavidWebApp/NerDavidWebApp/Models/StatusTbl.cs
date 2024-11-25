using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class StatusTbl
{
    public int StatusId { get; set; }

    public string? Status { get; set; }

    public string? StatusSymbol { get; set; }

    public virtual ICollection<BachurimTbl> BachurimTbls { get; set; } = new List<BachurimTbl>();
}
