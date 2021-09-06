import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/bg-home.jpg';
import Link from '../../UI/Link/Link';

export const Home = () => {
  return (
    <Section id='home'>

      <div>
        <div
          className='home-content p-5'
           style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>Lucas Pechebelok</h1><br></br>
            <h2 className='sub-title mb-4'>
            Olá. meu nome é Lucas, tenho 20 anos e moro em Umuarama, PR. 
            </h2>
            <Link to={'/sobre'} classes='btn btn-light text-dark rounded-0'>
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
