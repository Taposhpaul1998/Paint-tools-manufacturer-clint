import React from 'react';

const Button = ({ children }) => {
    return (
        <button class="btn btn-accent bg-teal-900 text-white font-bold">{children}</button>
    );
};

export default Button;