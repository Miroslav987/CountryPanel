"use client"
import React, { useEffect } from 'react';
import styles from './styles/CountryDetails.module.scss'
import Image from 'next/image';
import { useCountry } from '@/lib/features/CountryServer';
import { useSearchParams } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';

const CountryDetails = () => {
    const searchParams = useSearchParams();
    const sort: string = searchParams.get('name') || 'Kyrgyzstan';
    const { country, isCountriesLoaded, isCountryLoaded, isCountryError } = useAppSelector(state => state.country)
    const { GetOneCountry } = useCountry()
    useEffect(() => {
        GetOneCountry(sort)
    }, [sort, isCountriesLoaded])

    if (isCountryError) {
        return <div style={{color:"red"}} className='loading'><p>{isCountryError}</p></div>;
    }
    if (isCountryLoaded) {
        return <div className='loading'><p>Loading...</p></div>;
    }

    return (<>
        <div className={styles.details}>
            {country.name ?
                <>
                    <div className={styles.main_block}>
                        <div className={styles.main_left}>
                            <h2>{country.name}</h2>
                            <div>
                                <p>Capital: <span>{country.capital ? country.capital.join(', ') : 'N/A'}</span></p>
                                <p>Population: <span>{country.population}  people</span></p>
                                <p>Region: <span>{country.region}</span></p>
                            </div>
                        </div>
                        <div className={styles.flag}>
                            <Image
                                src={country.flags.png}
                                width={400}
                                height={250}
                                alt={country.flags.alt || `Flag of ${country.name}`}
              
                            />
                        </div>
                    </div>
                    <div className={styles.extra_block}>
                        <h3>Border width</h3>
                        <ul>
                            {country.borders.length ? country.borders.map((border: string) => (
                                <li key={border}>
                                    <Link href={`?name=${border}`}>{border}</Link>

                                </li>
                            )) : <p>no borders</p>}
                        </ul>
                    </div>
                </>
                : null}
        </div>
    </>
    );
};

export default CountryDetails;