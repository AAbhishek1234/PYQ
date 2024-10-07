import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './banner.css'
function Banner() {
  const navigate = useNavigate()

  return (
    <>
      <Container fluid className="dual-sections-container">
        <Row className="section">
          {/* Left Image - Previous Year Question Papers */}
          <Col md={6} className="image-container" style={{ 
            backgroundImage: "url('/Images/firstimg.jpg')", // Inline image reference
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '100vh'
          }}>
            <div className="content-container">
              <h2>Previous Year Question Papers</h2>
              <p>
                Access a vast collection of previous year question papers to help
                you prepare for your exams effectively.
              </p>
              <Button variant="primary" style={{backgroundColor:"red",border:"none"}} onClick={() => navigate("/SelectCourse")}>View Papers</Button>
            </div>
          </Col>
          
          {/* Right Image - Latest Announcements */}
          <Col md={6} className="image-container" style={{ 
            backgroundImage: "url('/Images/secondimg.webp')", // Inline image reference
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '100vh'
          }}>
            <div className="content-container">
              <h2>Latest Announcements</h2>
              <p>
                Stay updated with the latest news, announcements, and notifications
                related to your course and exams.
              </p>
              <Button variant="primary"  style={{backgroundColor:"red",border:"none"}}>Read Announcements</Button>
            </div>
          </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default Banner