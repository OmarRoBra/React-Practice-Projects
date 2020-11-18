import React from 'react';
import styled from '@emotion/styled'

const ContenedorHeader=styled.header`
background-color:#26C6DA;
padding:10px;
font-weight:bold;
color:#FFFFFF;

`

const TextHeader=styled.h1`
font-size:2rem;
margin:0;
text-align: center;
font-family: 'Slabo 27px',serif;


`;

const Header = () => {
    return ( 
        <ContenedorHeader>
            <TextHeader style={{textAlign:"center"}}>Cotizador</TextHeader>
        </ContenedorHeader>
     );
}
 
export default Header;