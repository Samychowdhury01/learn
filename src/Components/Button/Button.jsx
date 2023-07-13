import React from 'react';

const Button = ({children}) => {
    return (
        <button className='btn bg-primary text-white px-5 py-4 normal-case font-bold'>
            {children}
        </button>
    );
};

export default Button;