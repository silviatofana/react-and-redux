import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { getRocketsFromAPI } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);
  const getRockets = () => {
    if (rocketsData.length === 0) {
      dispatch(getRocketsFromAPI());
    }
  };
  useEffect(() => {
    getRockets();
  }, []);

  return (
    <div className="rockets-list">
      {
rocketsData.map((rocket) => (
  <div key={rocket.rocket_id} className="rocket">
    <div className="rocket-img">
      <img src={rocket.rocket_img} alt={rocket.rocket_name} />
    </div>
    <div className="rocket-description">
      <h2>{rocket.rocket_name}</h2>
      <p>
        {rocket.rocket_description}
      </p>
      <Button variant="primary">Reserve Rocket</Button>
    </div>
  </div>
))
}
    </div>
  );
};

export default Rockets;
