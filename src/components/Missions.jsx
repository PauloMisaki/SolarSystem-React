import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((obj) => (<MissionCard
            key={ obj.name }
            name={ obj.name }
            year={ obj.year }
            country={ obj.country }
            destination={ obj.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
