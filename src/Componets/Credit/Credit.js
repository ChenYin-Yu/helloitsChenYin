import React from 'react';
import './Credit.css';

const Credit = ({credit_list}) => {
    return (
        <div className='credit'>
            <div className='credit-title'>Credit</div>
            {credit_list.map((credit, index)=>(
            <div key={index} className='credit-item'>
                <div className='credit-role'>{credit.role}:</div>
                <div className='credit-name'>{credit.name}</div>
            </div>
            ))}
        </div>
    )
}
export default Credit;