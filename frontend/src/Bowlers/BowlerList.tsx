import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

// eslint-disable-next-line @typescript-eslint/no-redeclare
// function to create an empty array of bowlers and then fetch the data from the api
function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5267/api/bowlingleague/tables');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  return (
    // table and it's rows and what data goes into it
    <>
      <div className="row">
        <h4 className="text-center">
          Your Bowlers From Teams Marlins and Sharks
        </h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {f.bowlerFirstName}{' '}
                {f.bowlerMiddleInit && f.bowlerMiddleInit + '. '}{' '}
                {f.bowlerLastName}
              </td>
              <td>{f.team.teamName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
