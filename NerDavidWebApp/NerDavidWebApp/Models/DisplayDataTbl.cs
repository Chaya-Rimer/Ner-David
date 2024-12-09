using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class DisplayDataTbl
{
    public int DisplayDataId { get; set; }

    public string? Columns { get; set; }

    public string? Title { get; set; }

    public int? OrderBy { get; set; }

    public int? Colspan { get; set; }

    public int? DisplayType { get; set; }

    public string? Component { get; set; }

    public bool? Filterable { get; set; }
}
