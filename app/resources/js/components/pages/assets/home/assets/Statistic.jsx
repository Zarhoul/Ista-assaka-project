import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Statistic() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("../data/statistic.json")    
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <div className='bg-primary-color flex flex-row px-6 py-4 justify-around items-center' >
                {data.map((st) => (
                    <div className={`icon-${st.id}`} key={st.id}>
                        <div className='flex justify-center items-cente'>
                            <img src={st.icon} alt='' className='p-2 mb-2 border-2 border-tertiary-color rounded-full 
                                                                sm:w-20
                                                                md:p-0 md:w-20
                                                                lg:w-24'
                            />
                        </div>
                        <div className='flex flex-col gap-y-1 justify-center items-center'>
                            <span className='text-tertiary-color font-medium text-4xl 
                                            sm:text-3xl
                                            md:text-3xl
                                            lg:text-4xl'
                            >
                            {st.number}
                            </span>
                            <span className='text-tertiary-color opacity-60 font-medium text-3xl 
                                            sm:text-2xl
                                            md:text-2xl
                                            lg:text-3xl'
                            >
                            {st.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Statistic