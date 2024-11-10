using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class QuestionsTbl
{
    public int QuestionId { get; set; }

    public string? Question { get; set; }

    public string? Answer1 { get; set; }

    public string? Answer2 { get; set; }

    public string? Answer3 { get; set; }

    public int? CorrectAnswer { get; set; }

    public int MasechetId { get; set; }

    public string? Perek { get; set; }

    public string? Daf { get; set; }

    public virtual MasechetTbl Masechet { get; set; } = null!;
}
