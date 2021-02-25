import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import Protflio1 from '../Protflio';

ProtflioList.propTypes = {
    protfliolist:PropTypes.array.isRequired,
    
};

function ProtflioList({protfliolist}) {
    return (
      
            <Flex
        className="service-list"
        wrap="wrap"
        justify="center"
        >
            {protfliolist.map(protflio => (
                
                    <Protflio1 protflio={protflio}/>
                
            ))}
        </Flex>
    );
}

export default ProtflioList;