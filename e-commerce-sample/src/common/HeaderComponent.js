import React from 'react';

const HeaderComponent = () => {
    return (
        <div style={styles.rootStyle}>
            <div style={styles.contentContainerStyle}>
                <img style={styles.imageStyle} src='favicon.ico'></img>
                <div style={styles.buttonContainerStyle}>
                    <button style={styles.buttonStyle}>PRODUCTS</button>
                    <button style={styles.buttonStyle}>ABOUT</button>
                    <button style={styles.buttonStyle}>CONTACT</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    rootStyle: {
        width: '100%',
        height: '20%',
        boxShadow: '0px 5px 1px #ecf0f1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: '10px'
    },

    contentContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    imageStyle: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#bdc3c7'
    },

    buttonContainerStyle: {
        width: '100%',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row'
    },

    buttonStyle: {
        borderRadius: '3px',
        padding: '10px',
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: '20px',
        marginRight: '20px',
        backgroundColor: '#e67e22'
    }
}

export default HeaderComponent;