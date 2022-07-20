const ADD_ROCKET = 'spacetravelers-hub/redux/rockets/ADD_ROCKET';
const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const addRocket = (rockets) => ({
  type: ADD_ROCKET,
  rockets,
});

export const getRocketsFromAPI = () => (async (dispatch) => {
  const response = await fetch(rocketURL);
  const data = await response.json();
  const rocketsArr = [];
  data.forEach((d) => {
    const rocket = {
      rocket_id: d.id,
      rocket_name: d.rocket_name,
      rocket_description: d.description,
      rocket_img: d.flickr_images[0],
    };
    rocketsArr.push(rocket);
  });
  dispatch(addRocket(rocketsArr));
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, ...action.rockets];
    default:
      return state;
  }
};
export default rocketReducer;
