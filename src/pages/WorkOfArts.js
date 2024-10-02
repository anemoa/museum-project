import React from 'react';
import Windmill from '../assets/images/windmill.png';

const WorkOfArts = () => {
  return (
    <main className='container'>
      <article className=''>
        <div className='art_img'>
          <img src={Windmill} alt='' />
          <p className='art_title'>The Milkmaid</p>
          <p className='art_description'>
            A maid concentrates keenly as she pours milk from a jug. It is a
            quiet, tranquil scene. The only movement is the flow of milk.
            Vermeer turned a simple composition of a prosaic subject into an
            intense work of art.\r\nIt is in the rendering of light that Vermeer
            truly excelled, painting tiny dots for highlights, as on the bread
            and the blue cloth.
          </p>
        </div>

        <div className='art_detail'>
          <p>The Milkmaid</p>
          <p>Johannes Vermeer</p>
          <p>physical</p>
          <p>Oil on Canvas</p>
          <p>Dimensions</p>
          <p>41 x 45.5 cm</p>
          <p>Credit Line</p>
          <p>Purchased with the support of the Vereniging Rembrandt</p>
        </div>
      </article>
    </main>
  );
};

export default WorkOfArts;
