// src/pages/AdminPage.jsx
import { Card, Container, Row, Col, Badge, Button } from "react-bootstrap";

export default function AdminPage() {
  const adminInfo = {
    name: "Super Admin",
    email: "admin@gmail.com",
    role: "Administrator",
    stats: {
      products: 120,
      users: 45,
      sales: 320,
    },
  };

  return (
    <Container fluid className="bg-dark min-vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card className="text-center shadow-lg border-0" style={{ backgroundColor: "#74c7ffff", color: "black" }}>
            <Card.Header className="fs-3 fw-bold">
              Admin LAILA MESSOUDI 👑
            </Card.Header>
            <Card.Body>
              <Card.Title className="fs-4 mb-2">{adminInfo.name}</Card.Title>
              <Card.Text className="mb-1">{adminInfo.email}</Card.Text>
              <Card.Text className="mb-4">
                <Badge bg="light" text="dark">{adminInfo.role}</Badge>
              </Card.Text>

              <Row className="text-center mb-3">
                <Col>
                  <h5 className="mb-0">{adminInfo.stats.products}</h5>
                  <small>Products</small>
                </Col>
                <Col>
                  <h5 className="mb-0">{adminInfo.stats.users}</h5>
                  <small>Users</small>
                </Col>
                <Col>
                  <h5 className="mb-0">{adminInfo.stats.sales}</h5>
                  <small>Sales</small>
                </Col>
              </Row>

              <Button variant="light" className="text-dark fw-bold">
                Manage Dashboard
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Last login: 1 hour ago
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
