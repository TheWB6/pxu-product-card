import React from 'react';

const Star = (props) => {
  const { fill = '#DDDDDD' } = props;
  return (
    <svg width="1.5em" height="1.5em" fill={ fill } viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <polygon id="star" points="6.91773333 6.1328 10 3.75 6.25 3.75 5 0 3.75 3.75 0 3.75 3.086 6.12293333 1.87493333 10 5.00466667 7.6 8.1276 10"></polygon>
  </svg>
  )
}

export default Star;
