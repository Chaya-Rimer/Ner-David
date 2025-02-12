﻿using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class YeshivaTbl
{
    public int YeshivaId { get; set; }

    public string? YeshivaName { get; set; }

    public int? YeshivaType { get; set; }

    public virtual ICollection<BachurimTbl> BachurimTbls { get; set; } = new List<BachurimTbl>();

    public virtual ICollection<LimudTbl> LimudTbls { get; set; } = new List<LimudTbl>();

    public virtual YeshivaTypeTbl? YeshivaTypeNavigation { get; set; }
}
