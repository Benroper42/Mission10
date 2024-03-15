using Mission10.Models;

namespace Mission10.Data
{
    // creating the proper enumberables for my 2 tables and joined table
    public interface IBowlingRepository
    {
        public IEnumerable<Bowler> Bowlers { get; }

        public IEnumerable<Team> Teams { get; }

        public IEnumerable<Bowler> Tables();
        
    }
}
