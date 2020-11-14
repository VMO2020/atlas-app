import React from 'react';
import { NavBar } from '../components/NavBar';
import './home.scss';

export const Home = () => {
  return (
    <div className='general__container home'>
      <header>
        <NavBar menuName={'home'} />
      </header>

      <h1 className='text__gradient'>ATLAS Home</h1>
      <h2 className='text__gradient2'>Dental & Cosmetic Alliance</h2>
      <h3>SubTitle h3</h3>
      <h4>SubTitle h4</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea dicta vitae
        eligendi reiciendis totam minima, ipsa, suscipit commodi asperiores
        deleniti, dolor ipsum quod cum consequatur labore repudiandae quisquam
        assumenda quia?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, nisi
        est. Et consequatur architecto minima ut! Dolor ipsa voluptatem fuga
        dignissimos quos. Modi blanditiis autem aliquid beatae, quis nulla id
        odit quia quam, ipsam eius quisquam incidunt aliquam aut debitis
        pariatur nesciunt veritatis ab magni recusandae sed? Animi dolore
        deserunt magnam, perspiciatis quas nemo necessitatibus nisi cum
        aspernatur quasi ad et quisquam natus molestias enim pariatur debitis
        delectus hic error nostrum velit facere? At omnis, laboriosam illum qui
        animi dolore ipsa commodi amet quam sed reprehenderit consequatur
        pariatur facere, voluptatum, iure repellat nemo neque odio enim
        architecto voluptatem repudiandae! Quas!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, nisi
        est. Et consequatur architecto minima ut! Dolor ipsa voluptatem fuga
        dignissimos quos. Modi blanditiis autem aliquid beatae, quis nulla id
        odit quia quam, ipsam eius quisquam incidunt aliquam aut debitis
        pariatur nesciunt veritatis ab magni recusandae sed? Animi dolore
        deserunt magnam, perspiciatis quas nemo necessitatibus nisi cum
        aspernatur quasi ad et quisquam natus molestias enim pariatur debitis
        delectus hic error nostrum velit facere? At omnis, laboriosam illum qui
        animi dolore ipsa commodi amet quam sed reprehenderit consequatur
        pariatur facere, voluptatum, iure repellat nemo neque odio enim
        architecto voluptatem repudiandae! Quas!
      </p>
    </div>
  );
};
