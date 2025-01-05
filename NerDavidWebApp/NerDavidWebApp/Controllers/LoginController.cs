using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using NerDavidWebApp.Classes;
using NerDavidWebApp.Models;
using System.Data.Entity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;


namespace NerDavidWebApp.Controllers
{

    [Route("[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly NerDavidDbContext _context;

        private readonly string _secretKey; // מפתח סודי

        public LoginController(NerDavidDbContext context, IConfiguration configuration)
        {
            _context = context;
            _secretKey = configuration["Jwt:Key"]; 
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            if (model == null || string.IsNullOrEmpty(model.UserName) || string.IsNullOrEmpty(model.Password))
            {
                return BadRequest("Invalid client request");
            }
            var person =  _context.PersonsTbls
                .FirstOrDefault(p => p.UserName == model.UserName && p.Password == model.Password);

            if (person == null)
            {
                return Unauthorized("שם משתמש או סיסמה אינם נכונים");
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                new Claim(ClaimTypes.Name, person.UserName)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            SecurityToken token;

            try
            {
                token = tokenHandler.CreateToken(tokenDescriptor);
            }
            catch (Exception ex)
            {
                // לוג את השגיאה או החזר הודעת שגיאה מתאימה
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
            //var token = tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new Login { Token = tokenHandler.WriteToken(token) });
        }

    }
}
