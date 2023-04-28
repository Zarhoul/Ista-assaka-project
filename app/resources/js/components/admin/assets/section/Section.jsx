import React from 'react';
import Statistics from './dashboardSection/Statistics';
import ListDocs from './dashboardSection/ListDocs';

function Section() {

    return (
        <div className='w-full h-screen basis-11/12 flex flex-row bg-slate-300'>
            <Statistics />
            <ListDocs />
        </div>
    );
}

export default Section;