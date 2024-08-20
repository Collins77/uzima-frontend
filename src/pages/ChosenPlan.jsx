import React from 'react';
import { useLocation } from 'react-router-dom';

const ChosenPlan = () => {
    const location = useLocation();
    const { plan } = location.state;

    return (
        <div>
            <h1>{plan.title}</h1>
            <p>{plan.price}</p>
            <p>{plan.id}</p>
            <ul>
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChosenPlan;
