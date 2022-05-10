import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altMsg = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p className="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ altMsg } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
