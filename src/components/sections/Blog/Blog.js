import React from 'react';

import Section from '../../../HOC/Section';



const Blog = () => {
  return (
    <Section id='blog'>
<div class="container emp-profile">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEDI859PjHnCA/profile-displayphoto-shrink_800_800/0/1598836687455?e=1636588800&v=beta&t=SjaNUfE92-Q_1mRRFROMTnH68vfpw0rC0FwxrH7EH7s" alt=""/>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                     <b> Lucas Pechebelok Hernandes</b>  
                                    </h5>
                                    <h6>
                                        Desenvolvedor BackEnd
                                    </h6>
                                    <p class="proile-rating">Anos de atuação no mercado: <span>2</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Currículo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
          
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>INFORMAÇÕES</p>
                            <a >20 Anos</a><br/>
                            <a >Umuarama - PR</a><br/>
                            <p>HABILIDADES</p>
                            <a >Delphi</a><br/>
                            <a >Oracle</a><br/>
                            <a >Golang</a><br/>
                            <a >Node.js</a><br/>
                            <p>CONTATO</p>
                            <a href="https://github.com/lockiie" target="_blank"> <i class="fab fa-github"></i> Github</a><br/>
                            <a href="https://www.linkedin.com/in/lucas-pechebelok-3481801b6/" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a><br/>
      
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div >
                                        <div class="row">
                                            <div class="col-md-12 text-align-center">
                                                <label>EPERIÊNCIA</label>
                                            </div>
                                            <br></br>
                                            <div class="col-md-12 divkkk">
                                                <label>Engendra Servicos Ltda (2019-Atualmente) <span></span></label>
                                            </div>
                                            <div class="col-md-12 divkk">
                                                <label>(Desenvolvedor Delphi)</label>
                                            </div>
             
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12 divkkk ">
                                                <label><b>CURSOS</b></label>
                                            </div>
                                            <br></br>
                                            <div class="col-md-12 divkk">
                                                <label>Curso de Angular</label>
                                            </div>
                                            <div class="col-md-12 divkk">
                                                <label>Curso de Ionic</label>
                                            </div>
                                            <div class="col-md-12 divkk">
                                                <label>Curso Oracle DBA</label>
                                            </div>
                                            <div class="col-md-12 divkk">
                                                <label>Curso Golang WebServices</label>
                                            </div>
                                            <div class="col-md-12 divkk">
                                                <label>Curso Delphi Completo</label>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </Section>
  );
};

export default Blog;
