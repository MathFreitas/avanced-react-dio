import React from "react";
import PetShop from "./PetShop";

function App () {
    const handleClick = () => {
        console.log('Iniciando banho...')
    }

    return (
        <PetShop 
            onClick={handleClick}
            status="Completed"
            dogs={24}
            customerName="Matheus Freitas"
        />
    )
}

export default App;