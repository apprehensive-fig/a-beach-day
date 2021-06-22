import React from 'react';

function HomepageImage() {
  const url = 'https://res.cloudinary.com/dzwpbkn3u/image/upload/v1624251792/4_xwzetk.png';
  return (
    <img src={url} style={{width: 100}} alt='shell' />
  );
}

export default HomepageImage;
