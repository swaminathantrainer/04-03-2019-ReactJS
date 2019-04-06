import React from 'react';
import Card from '../common/Card'
import { Container, Col, Row, Button } from 'react-bootstrap';

const HeaderComponent = () => {
    return (
        <Card>
            <div style={styles.rootStyle}>
                <div style={styles.contentContainerStyle}>
                    <img style={styles.imageStyle} src='favicon.ico'></img>
                    {/* <div style={styles.buttonContainerStyle}>
                    <button style={styles.buttonStyle}>PRODUCTS</button>
                    <button style={styles.buttonStyle}>ABOUT</button>
                    <button style={styles.buttonStyle}>CONTACT</button>
                </div> */}
                    <Container style={styles.buttonContainerStyle}>
                        <Row>
                            <Col>
                                <Button variant="dark">PRODUCTS</Button>
                            </Col>
                            <Col>
                                <Button variant="dark">ABOUT</Button>
                            </Col>
                            <Col>
                                <Button variant="dark">CONTACT</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Card>
    );
};

const styles = {
    rootStyle: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: '10px',
        marginBottom: '4px'
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

    // buttonContainerStyle: {
    //     width: '100%',
    //     marginTop: '10px',
    //     display: 'flex',
    //     flexDirection: 'row'
    // },

    buttonContainerStyle: {
        marginTop: '10px'
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