import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'; // Importing necessary components
import Choices from './Choices';

const Choice = () => {
    const flexContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
    };

    const handleTitleClick = () => {
        console.log('Best Sellers clicked');
    };

    return (
        <div className="" style={flexContainerStyles}>
            {/* Top Deals Button Section */}
            <Row>
                <Col xs={12} style={{ marginLeft: '90px', textAlign: 'left', color: '#fff' }}>
                    <Button
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            backgroundColor: 'black', // Button background color
                            border: 'none',
                            padding: '10px 0px',
                        }}
                    >
                        Top Deals
                    </Button>
                    {/* <div style={{ width: '50px', height: '2px', backgroundColor: '#e4002b', marginTop: '10px' }}></div> */}
                </Col>
            </Row>

            {/* Choices Section */}
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6">
                    <Choices
                        title={
                            <a href="/" onClick={handleTitleClick} style={{ textDecoration: 'none', color: 'inherit' }}>
                                Krunch Burger
                            </a>
                        }
                        imageSrc="CrunchCombo.png"
                        price="570"
                    />
                </div>
                <div className="col-md-3 col-sm-6">
                    <Choices
                        title={
                            <a href="/" onClick={handleTitleClick} style={{ textDecoration: 'none', color: 'inherit' }}>
                                Krunch Combo
                            </a>
                        }
                        imageSrc="CrunchCombo.png"
                        price="570"
                    />
                </div>
                <div className="col-md-3 col-sm-6">
                    <Choices
                        title={
                            <a href="/" onClick={handleTitleClick} style={{ textDecoration: 'none', color: 'inherit' }}>
                                Hot Wings Bucket
                            </a>
                        }
                        imageSrc="HotWingsBucket.png"
                        price="650"
                    />
                </div>
                <div className="col-md-3 col-sm-6">
                    <Choices
                        title={
                            <a href="/" onClick={handleTitleClick} style={{ textDecoration: 'none', color: 'inherit' }}>
                                Mighty Zinger
                            </a>
                        }
                        imageSrc="MightyZinger.png"
                        price="750"
                    />
                </div>
            </div>
        </div>
    );
}

export default Choice;
