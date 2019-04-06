import React from 'react';

const Item = ({ title, description, imageUrl, onItemClicked }) => {
    return (
        <div style={{
            height: '100%',
            width: '100%',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column'
        }}
        >
            <img src={imageUrl} style={{
                height: '70%',
                width: '100%'
            }} />
            <p style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: '18px',
                margin: '0px',
                padding: '0px'
            }}>{title}</p>
            <p style={{
                color: 'darkgrey',
                fontSize: '14px',
                margin: '0px',
                padding: '0px'
            }}>{description}</p>
        </div>
    );
};

export default Item;