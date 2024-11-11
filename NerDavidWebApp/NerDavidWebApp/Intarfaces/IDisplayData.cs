using NerDavidWebApp.Models;

namespace NerDavidWebApp.Intarfaces
{
    public interface IDisplayData
    {
        public List<DisplayDataTbl> GetColumnsToTable(int displayType);

    }
}
