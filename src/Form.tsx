import { useState, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

function NewCarForm() {
    const [formData, setFormData] = useState({
        licensePlateNumber: "",
        brand: "",
        model: "",
        dailyCost: ""
    });

    const footerRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setFormData({
                    licensePlateNumber: "",
                    brand: "",
                    model: "",
                    dailyCost: ""
                });
            } else {
                alert("Töltsön ki minden adatot!");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <Container style={{marginTop: 40}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formLicensePlateNumber">
                    <Form.Label>Rendszám</Form.Label>
                    <Form.Control type="text" placeholder="Rendszám" name="licensePlateNumber" value={formData.licensePlateNumber} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBrand">
                    <Form.Label>Márka</Form.Label>
                    <Form.Control type="text" placeholder="Márka" name="brand" value={formData.brand} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formModel">
                    <Form.Label>Modell</Form.Label>
                    <Form.Control type="text" placeholder="Modell" name="model" value={formData.model} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDailyCost">
                    <Form.Label>Napidíj</Form.Label>
                    <Form.Control type="number" placeholder="Napidíj" name="dailyCost" value={formData.dailyCost} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Új autó
                </Button>
            </Form>
            <div ref={footerRef} />
        </Container>
    );
}

export default NewCarForm;
