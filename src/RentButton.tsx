import { Button } from "react-bootstrap";
import { CarRentalDto } from "./CarRentalDto";

function RentButton({ id }: CarRentalDto) {
    const handleRent = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/cars/${id}/rent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                alert("Sikeres kölcsönzés!");
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Button variant="primary" onClick={handleRent}>Kölcsönzés</Button>
    );
}

export default RentButton;