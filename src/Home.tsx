import { useEffect, useState } from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { CarRentalDto } from "./CarRentalDto";

function Home() {
    const [cars, setCars] = useState<CarRentalDto[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/cars/all').then(async (res) => {
            const response = await res.json();
            setCars(response);
        })
    })
    return (
        <Container fluid>
            <Row xs={1} md={2} lg={3} className="g-4">
                {cars.map(car => (
                    <Col key={car.id}>
                        <Card className="h-100 d-flex flex-column" style={{ margin: 30 }}>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>{car.license_plate_number}</Card.Title>
                                <Card.Text>{car.brand}</Card.Text>
                                <Card.Text>{car.model}</Card.Text>
                                <Card.Text>{car.daily_cost}</Card.Text>
                            </Card.Body>
                            <CardImg src={`images/${car.brand.toLocaleLowerCase() + '_' + car.model.toLocaleLowerCase()}.png`} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;