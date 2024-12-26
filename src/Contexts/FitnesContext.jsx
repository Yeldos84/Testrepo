import { createContext, useState } from "react";

export const Specialization = {
  YOGA: "Йога",
  PERSONAL: "Личный тренер",
  ZUMBA: "Зумба",
  FlyYoga: "Летающая Йога",
};

export const FitnessContext = createContext({
  coaches: [],
});

export const FitnessProvider = ({ children }) => {
  const [coaches, setCoaches] = useState([]);

  const handleAddCoach = (coach) => {
    if (!coach.specialization || !coach.fullName || !coach.contact) {
      alert("Заполните все поля");
      return;
    }

    setCoaches((prev) => [
      ...prev,
      {
        id: Date.now(),
        coach,
      },
    ]);
  };

  const handleRemoveCoach = (id) => {
    const isCoachExist = coaches.some((coach) => coach.id === id);
    if (!isCoachExist) {
      alert("Тренера не существует");
      return;
    }
    setCoaches((prev) => prev.filter((coach) => coach.id !== id));
  };

  const handleEditCoach = (coach) => {
    const isCoachExist = coaches.some((c) => c.id === coach.id);
    if (!isCoachExist) {
      alert("Тренера не существует");
      return;
    }

    setCoaches((prev) =>
      prev.map((c) => {
        if (c.id === coach.id) {
          return {
            ...c,
            coach,
          };
        }
        return c;
      })
    );
  };

  return (
    <FitnessContext.Provider
      value={{
        coaches,
        handleAddCoach,
        handleRemoveCoach,
        handleEditCoach,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};
