import React from 'react';

import Section from '../../../HOC/Section';

export const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
           BEM VINDO
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
               
            <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
          Habilidades  Front-End
          </h3>
          <h2 className=' mr-auto ml-auto'>
          Angular & Ionic
          </h2>
        </div>
            </div>
           
            <div className='col-md-12 col-lg-6'>
             
              <div className='sobre-p' >
            
                <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
          Habilidades  Back-End
          </h3>
          <h2 className=' mr-auto ml-auto'>
          Delphi, Oracle, Go & Node.js
          </h2>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
