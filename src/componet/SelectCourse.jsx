import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './SelectCourse.css';

const SelectCourse = () => {
    const navigate = useNavigate();  // Initialize navigate

    const cardData = [
        { name: '10th Class Paper', route: '/10th-class' },
        { name: '12th Class Paper', route: '/12th-class' },
        { name: 'SSC', route: '/ssc' },
        { name: 'UPSC', route: '/upsc' },
        { name: 'NEET', route: '/neet' },
        { name: 'JEE', route: '/jee' },
        { name: 'GATE', route: '/gate' },
        { name: 'Bank PO', route: '/bank-po' },
        { name: 'CAT', route: '/cat' },
        { name: 'IAS', route: '/ias' },
    ];

    const handleNavigate = (route) => {
        navigate(route);  // Navigate to the respective route
    };

    return (
        <div className="cards-container">
            <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                {cardData.map((card, index) => (
                    <Col key={index} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>{card.name}</Card.Title>
                                <Card.Text>
                                    A brief description about this exam and the related materials.
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => handleNavigate(card.route)} // Navigate on button click
                                >
                                    View Papers
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SelectCourse;
