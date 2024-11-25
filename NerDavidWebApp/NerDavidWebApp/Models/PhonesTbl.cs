using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class PhonesTbl
{
    public int PhoneId { get; set; }

    public int? BachurId { get; set; }

    public string? PhoneNumber { get; set; }

    public virtual BachurimTbl? Bachur { get; set; }
}
