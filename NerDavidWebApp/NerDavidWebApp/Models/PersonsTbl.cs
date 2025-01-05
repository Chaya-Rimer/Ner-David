using System;
using System.Collections.Generic;

namespace NerDavidWebApp.Models;

public partial class PersonsTbl
{
    public int PersonId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? UserName { get; set; }

    public string? Password { get; set; }

    public string? Token { get; set; }
}
