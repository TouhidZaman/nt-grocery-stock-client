import React from 'react';
import cartoonSnailLoading from '../../../images/cartoon-snail-loading.gif'

const Loading = () => {
    return (
        <div className='flex justify-center items-center py-4'>
            <img src={cartoonSnailLoading} alt="Loading..."/>
        </div>
    );
};

export default Loading;