import React from 'react';

const Button = ({children}) => {
    return (
        <button className='btn bg-primary hover:btn-error hover:shadow-2xl transition-all duration-500 ease-linear text-white px-5 py-4 normal-case font-bold border-none'>
            {children}
        </button>
    );
};

export default Button;