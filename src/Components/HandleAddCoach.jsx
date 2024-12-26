import React, { useState, useContext } from "react";
import { FitnessContext, Specialization } from "../Contexts/FitnesContext";
import { Flex, Form } from 'antd';

const AddCoachForm = () => {
    const { handleAddCoach } = useContext(FitnessContext);
    const { coaches } = useContext(FitnessContext);

    const [coach, setCoach] = useState({
        fullName: "",
        specialization: Specialization.YOGA,
        contact: "",
    });

    const { ...spec } = Specialization;
    

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setCoach(prev => ({ ...prev, [name]: value }));
        
        // console.log(coach.fullName);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddCoach(coach);
        // setCoach({fullName, specialization: Specialization.YOGA,contact});
        console.log(coaches);
        
      };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""> Имя:
                    <input type="text" name="fullName" value={coach.fullName} onChange={handleChange} />                    
                </label>
                <label htmlFor="">Контакт:
                    <input type="text" name="contact" value={coach.contact} onChange={handleChange} />
                </label>
                <label>
                    Специализация:
                    <select
                        name="specialization"
                        value={coach.specialization}
                        onChange={handleChange}
                    >
                        {Object.values(Specialization).map((spec) => (
                            <option key={spec} value={spec}>
                                {spec}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Добаить тренера</button>
            </form>

        </>
    );
};
export { AddCoachForm };
