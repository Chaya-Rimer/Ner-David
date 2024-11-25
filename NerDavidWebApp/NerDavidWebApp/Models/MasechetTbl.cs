using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class MasechetTbl
{
    public int MasechetId { get; set; }

    public string MasechetName { get; set; } = null!;

    public virtual ICollection<LimudTbl> LimudTbls { get; set; } = new List<LimudTbl>();

    public virtual ICollection<QuestionsTbl> QuestionsTbls { get; set; } = new List<QuestionsTbl>();
}
