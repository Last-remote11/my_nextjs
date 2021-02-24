import React from 'react';
import Image from 'next/image'

const Gallery = () => {
  return (
    <div>
      <Image 
        src='/images/sample.png'
        height={144}
        width='auto'
        alt='sampleImage'
      />
    </div>
  );
};


export default Gallery;