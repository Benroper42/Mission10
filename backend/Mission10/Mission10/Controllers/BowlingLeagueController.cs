using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10.Data;
using Mission10.Models;

namespace Mission10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;
        public BowlingLeagueController(IBowlingRepository temp)
        {
            _bowlingRepository = temp;
        }

        // get to call the joined tables and filter to corrrect teams
        [HttpGet("Tables")]
        public IEnumerable<Bowler> Tables()
        {
            var bowlers = _bowlingRepository.Tables()
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks");

            return bowlers;
        }
        


    }
}
