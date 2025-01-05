using NerDavidWebApp.Classes;
using NerDavidWebApp.Intarfaces;
using NerDavidWebApp.Models;

namespace NerDavidWebApp.Services
{
    public class LoginService :ILogin
    {
        NerDavidDbContext db = new NerDavidDbContext();

        //public PersonsTbl Login(Login model)
        //{
        //    PersonsTbl p = new PersonsTbl();
        //    bool isExist = db.PersonsTbls.Any(x=>x.UserName == model.UserName && x.Password==model.Password);
        //    if(isExist) {
        //        return db.PersonsTbls.FirstOrDefault(x => x.UserName == model.UserName && x.Password == model.Password);
        //    }
        //    return p;
        //}

    }
}
