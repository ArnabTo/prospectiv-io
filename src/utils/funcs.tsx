'use client';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import React, { useEffect, useState } from 'react';

const CalculatorRoi = () => {
    const [budget, setBudget] = useState(); // Set default budget value
    const [currency, setCurrency] = useState('USD');
    const [proposals, setProposals] = useState();
    const [leads, setLeads] = useState();
    const [closedDeals, setClosedDeals] = useState();
    const [clientValue, setClientValue] = useState();
    const [salesCycle, setSalesCycle] = useState(); // Set default sales cycle value

    const CalcuFunc = () => {
        if (budget === 4000 && clientValue > 1000 && clientValue < 4999) {
            if (salesCycle === 1) {
                setLeads(40);
                setProposals(12);
                setClosedDeals(4);
            } else if (salesCycle === 2) {
                setLeads(32);
                setProposals(11);
                setClosedDeals(4);
            } else if (salesCycle === 3) {
                setLeads(32);
                setProposals(11);
                setClosedDeals(3);
            } else {
                setLeads(30);
                setProposals(9);
                setClosedDeals(2);
            }
        }
    };

    // Update calculation on changes in relevant state variables
    useEffect(() => {
        CalcuFunc();
    }, [budget, clientValue, salesCycle]);

    const handleClick =()=>{
        CalcuFunc();
    }

    console.log(leads, proposals, closedDeals);
    return (
        <div className='space-y-8'>
           <Slider
               onChange={(value) => setBudget(value)}
               value={budget}
               min={4000}
               max={12000}
           />
           <Slider
               onChange={(value) => setSalesCycle(value)}
               value={salesCycle}
               min={1}
               max={12}
           />
           <input 
               type='number' 
               onChange={(e) => setClientValue(parseInt(e.target.value) || 0)} 
               placeholder='Enter client value'
               value={[salesCycle]}
           />
        
           <p>Leads: {leads}</p>
           <p>Proposals: {proposals}</p>
           <p>Closed deals: {closedDeals}</p>
        
           <Button onClick={() => handleClick()}>Calculate</Button>
        </div>
    );
};

export default CalculatorRoi;
