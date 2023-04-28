import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NewsBigCard from '../../news/NewsBigCard';
import NewsMiniCard from '../../news/NewsMiniCard';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get('../data/news.json')
            .then((response) => {
                const sortedNews = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setNews(sortedNews);
                console.log(sortedNews);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className='flex flex-col grow'>
                <div className='px-12 py-6 flex flex-row justify-between items-center'>
                    <div className='font-medium text-4xl text-text-primary-color
                                    sm:text-3xl
                                    md:text-4xl'
                    >
                    Nouveautés
                    </div>
                    <div className='px-4 py-3 bg-extend-primary-color rounded-md hover:bg-hover-primary-color
                                    sm:px-2 sm:py-2
                                    md:px-3 md:py-3'
                    >
                        <Link to='/news' className='flex flex-row text-tertiary-color font-medium justify-center items-center gap-x-2'>
                            Voir plus
                            <svg
                                xmlns='/public/icons/arrowright.svg'
                                width='30'
                                height='30'
                                viewBox='0 0 31 30'
                                fill='none'
                            >
                                <path
                                    d='M18.5375 7.41251L26.125 15L18.5375 22.5875M4.875 15H25.9125'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeMiterlimit='10'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className='w-full px-12 py-6 flex flex-row justify-center items-center gap-x-4 
                                sm:flex-col sm:gap-y-4
                                md:flex-col md:gap-y-4
                                lg:flex-row'
                >
                    <div className='basis-2/4'>
                        {news.length > 0 && (
                            <Link to={`/news/${news[0].id}`}>
                                <NewsBigCard
                                    key={news[0].id}
                                    title={news[0].title}
                                    date={news[0].date}
                                    type={news[0].type}
                                    image={news[0].image}
                                />
                            </Link>
                        )}
                    </div>
                    <div className='flex flex-col gap-y-2 basis-2/4 md:flex-row 
                                    sm:gap-y-4
                                    md:gap-x-4
                                    lg:flex-col'
                    >
                        {news.slice(1, 3).map(({ id, title, date, type, image }) => (
                            <Link to={`/news/${id}`}>
                                <NewsMiniCard 
                                    key={id} 
                                    title={title} 
                                    date={date} 
                                    type={type} 
                                    image={image} 
                                />
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;
