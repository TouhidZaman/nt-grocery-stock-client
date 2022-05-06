import React from 'react';
import spinner from '../../../images/spinner-1s-200px.svg'


const Spinner = ({height}) => {
    return (
        <div className=''>
            <img src={spinner} style={{height: height}} alt="Loading..."/>
        </div>
    );
};

export default Spinner;