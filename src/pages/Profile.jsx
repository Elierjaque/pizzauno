import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Profile = () => {
  return (
    <Container className="mt-5">
    <Row className="justify-content-center">
    <Col md={4} className="text-center"></Col>
      <h2>Perfil de usuario</h2>
      <Card className="mb-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/assets/img/imgprofile.png" />
      <Card.Body className="text-center">
        <Card.Title>Elie Jaque</Card.Title>
        <Card.Text>
          eliertem@gmail.com
        </Card.Text>
        <Button variant="primary">cerrar sesión</Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>
   

  )
}

export default Profile