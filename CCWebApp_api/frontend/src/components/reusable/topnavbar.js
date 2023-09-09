import React, { useState } from 'react';
import { useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import { Card, Navbar } from 'react-bootstrap';


const TopNavbar = () => {


return(
    <Card style={{ width: '100%' , height: '100%', borderTopLeftRadius: '0px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', borderColorbackgroundColor:'rgba(51, 51, 51, 0.00)'}}>
        <Navbar bg="light" variant="light" style={{height:'76px'}}>
            
        </Navbar>
        <Card.Body style={{backgroundColor:'#556BD9', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', height:'200px'}}>

        </Card.Body>
      </Card>
)

}

export default TopNavbar;