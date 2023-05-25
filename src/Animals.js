import React from "react";

export const Animals = ({data}) => {
    return (
        <div className = 'Animals'>
            {
                data.map(a => { 
                    return <div key={a.id}>{a.typeOfAnimal}</div>
                })
            }
        </div>
    )
}