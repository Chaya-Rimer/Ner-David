using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class CityTbl
{
    public int CityId { get; set; }

    public string? CityName { get; set; }

    public virtual ICollection<BachurimTbl> BachurimTbls { get; set; } = new List<BachurimTbl>();
}
