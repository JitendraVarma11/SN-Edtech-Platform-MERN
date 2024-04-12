import React from 'react'

export const IconButton = (
    {
        text,
        onClick,
        children,
        disabled,
        type,
    }
) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        >
            {
                children ? (<>
                <span>
                    {children}
                </span>
                </>) : (text)
            }
        </button>
    )
}
