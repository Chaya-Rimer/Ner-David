using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class TestsTbl
{
    public int TestId { get; set; }

    public int BachurId { get; set; }

    public int YearId { get; set; }

    public int? Mark { get; set; }

    public string? TestFile { get; set; }

    public int? Milga { get; set; }

    public string? CommentTest { get; set; }

    public virtual BachurimTbl Bachur { get; set; } = null!;

    public virtual YearsTbl Year { get; set; } = null!;
}
