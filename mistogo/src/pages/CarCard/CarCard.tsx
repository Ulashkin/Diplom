import { useParams } from "react-router-dom";

function CarCard() {
  const { id } = useParams(); // отримаємо id з URL (/car/123)

  return (
    <div>
      <h1>Картка авто {id}</h1>
      <p>Детальна інформація про вибрану машину.</p>
    </div>
  );
}

export default CarCard;
