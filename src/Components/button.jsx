import React from 'react';

const Button = ({ onClick, children, variant = "primary", disabled = false, type = "button" }) => {

    const getStyles = () => {
        const baseStyles = {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
        };
        if (variant === 'primary') {
            return { ...baseStyles,  backgroundColor: '#007bff', color: '#fff' };
        }
        if (variant === 'danger') {
            return { ...baseStyles,  backgroundColor: '#dc3545', color: '#fff' };
        }
        if (variant === 'secondary') {
            return { ...baseStyles,  backgroundColor: '#9facb9', color: '#fff' };
        }
        return baseStyles;
    };
    return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                style={getStyles()}
            >
                {children}
            </button>
        ); 
    };

export default Button;