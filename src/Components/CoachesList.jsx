import React, { useContext } from "react";
import { FitnessContext } from "../Contexts/FitnesContext";

const CoachesList = () => {
  const { coaches, handleRemoveCoach } = useContext(FitnessContext);

  return (
    <div>
      <h2>Список тренеров</h2>
      {coaches.length === 0 ? (
        <p>Тренеры не добавлены.</p>
      ) : (
        <ul>
          {coaches.map((item) => (
            <li key={item.id}>
              <p>Имя: {item.coach.fullName}</p>
              <p>Специализация: {item.coach.specialization}</p>
              <p>Контакт: {item.coach.contact}</p>
              <button onClick={() => handleRemoveCoach(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export {CoachesList}
