
import m1 from '../../img/prod1.png';
import React, { useState } from 'react';
import { Modal } from '../Modal';
import Slider from "react-slick";
import styled from 'styled-components';
import { listadePro } from '../data';

export function CataProd(props) {
    const [estadoModal3, cambiarEstadoModal3] = useState(false);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div class="itemss ">
                <div className='names'>
                    <h3>{props.name}</h3>
                    <p>{props.des}</p>
                    <p className='mrcs'>{props.mark}</p>
                </div>
                <img className="d-block w-100" src={m1} />

                <div className='container-buton'>
                    <div className='button'>
                        <a href='#'><i class="fa fa-whatsapp" aria-hidden="true"></i> CONSULTAR</a>
                    </div>
                    <div className='button-trans'>
                        <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>VER PRODUCTO</a>
                    </div>

                </div>
            </div>
            <Modal
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3}
                titulo="Aceite Distro DT-11"
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'start'}
                padding={'20px'}
            >
                <Contenido className='divModalxd'>
                    <div className="catprod">
                        <Slider {...settings}>
                            {listadePro.map(item => (
                                <div className="cardPro">
                                    <div className="carttopPro">
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                        <p>{item.marca}</p>
                                        <img src={item.linkimg} alt={item.title} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='descri'>
                    <h4>Descripción</h4> 
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                    </div>
                </Contenido>
            </Modal>
        </>
    )
};
const Contenido = styled.div`
	display: flex;	
	margin: auto;
    .descri{
        width: 40% ;
        margin: auto;
        float: right;
    }
	p {  
        font-size: 15px;        
	}	
    .catprod{
        margin: 40px;
        width: 30%;        
    }
    
    @media screen  and (max-width: 1600px) {
        .catprod{           
            width: 40%;
            height: 550px;
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 40% ;
        margin: auto;
        float: right;
        }
        .cardPro img{
        display: block;
        margin: auto;
        }        
    }
    @media screen  and (max-width: 1250px) {
        .catprod{      
            width: 50%;
            height: 550px;
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 50% ;
        margin: 0 ;
        
        }
        .cardPro img{        
        margin: auto;
        display: block;
        }        
    }
    @media screen  and (max-width: 1000px) {
        .catprod{      
            width: 60%;
            height: 550px;
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 40% ;
        margin: 0 ;
        
        }
        .cardPro img{        
        margin: auto;
        display: block;
        }        
    }
    @media screen  and (max-width: 850px) {
        .catprod{      
            width: 70%;
            height: 550px;
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 40% ;
        margin: 0 ;
        
        }
        .cardPro img{        
        margin: auto;
        display: block;
        width: 400px;
        }        
    }
    @media screen  and (max-width: 650px) {
        flex-direction: column;
        align-items: center;
        height: 50%;
        .catprod{  
            width: 100%;
            height: 550px;
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 100% ;
        margin: 0 ;
        
        }
        .cardPro img{        
        margin: auto;
        display: block;
        width: 300px;
        }        
    }

    @media screen  and (max-width: 450px) {
        flex-direction: column;
        align-items: center;
        height: 50%;
        .catprod{  
            width: 100%;            
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 100% ;
        margin: 0 ;
        text-size-adjust: 8px;
        
        }
        .cardPro img{        
        margin: auto;
        display: block;
        width: 200px;
        }        
    }

    @media screen  and (max-width: 350px) {
        flex-direction: column;
        align-items: center;
        height: 40%;
        .catprod{  
            width: 100%;            
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 100% ;
        margin: 0 ;
        font-size: 10px;
        
        }
        .cardPro img{        
        margin: auto;
        display: block;
        width: 100px;
        }        
    }
    
	
	
`;