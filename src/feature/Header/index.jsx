import React from 'react';
import HeaderList from './component/HeaderList';


Header.propTypes = {
    
};

function Header(props) {
    const headerList = [
    { 
        id:1,
        title: <a href="#home">Home</a>
    },
    { 
        id:2,
        title: <a href="#about">About</a>
    },
    { 
        id:3,
        title: <a href="#service">Service</a>

    }, 
    { 
        id:4,
        title: <a href="#portfolio">Portfolio</a>
    },
    ]
    
    return (
       <div>
           <HeaderList headerList={headerList}/>

       </div>
    );
}

export default Header;