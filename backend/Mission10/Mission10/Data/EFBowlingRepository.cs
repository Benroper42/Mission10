using Microsoft.EntityFrameworkCore;
using Mission10.Models;
using System.Linq;

namespace Mission10.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private readonly BowlingLeagueContext _BowlingLeagueContext;

        public EFBowlingRepository(BowlingLeagueContext temp)
        {
            _BowlingLeagueContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _BowlingLeagueContext.Bowlers;

        public IEnumerable<Team> Teams => _BowlingLeagueContext.Teams;

        public IEnumerable<Bowler> Tables()
        {
            var Teams = _BowlingLeagueContext.Bowlers.Include(b => b.Team).ToList();

            return Teams;

        }

       
    }
}
