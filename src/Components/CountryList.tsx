"use client"
import React, { useEffect, useState } from 'react';
import styles from './styles/CountryList.module.scss'
import { useAppSelector } from '@/lib/hooks';
import { useCountry } from '@/lib/features/CountryServer';
import Link from 'next/link';
import { CountriesState } from '@/lib/features/CountrySlice';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';

const CountryList = () => {
    const { countries, isCountriesError, isCountriesLoaded } = useAppSelector(state => state.country)
     const searchParams = useSearchParams();
     const activeLink: string = searchParams.get('name') || 'Kyrgyzstan';
    const { GetCountry } = useCountry()
    useEffect(() => {
        GetCountry()
    }, [])

    if (isCountriesError) {
        return <div style={{color:"red"}} className='loading'><p>{isCountriesError}</p></div>;
    }
    if (isCountriesLoaded) {
        return <div className="loading"><p>Loading...</p></div>;
      }
      
    return (
        <div className={styles.list}>
                {countries.length ?
                    countries.map((e:CountriesState) => (
                        <Link key={e.name}
                         href={`?name=${e.name}`} 
                         className={clsx({[styles.active]: e.name === activeLink})}>
                            <p> {e.name}</p>
                        </Link>
                    ))
                    : null}
        </div>
    );
};

export default CountryList;