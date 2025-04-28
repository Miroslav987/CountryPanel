

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAppSlice } from "../CreateAppSlice";


export interface CountryState {
    name: string,
    capital: string[], 
    region: string, 
    population: number,
    flags: { png: string, alt: string },
    borders: string[],

}
export interface CountriesState {
    name: string,
    cca3: string,

}

export interface CountryAllState {
    countries: [CountriesState],
    country: CountryState,

    isCountriesLoaded: boolean,
    isCountryLoaded: boolean,
    isCountriesError: null | string,
    isCountryError: null | string,
}

const initialState: CountryAllState = {
    countries: [
        {
            name: "",
            cca3: "",
        }
    ],
    country: {
        name: "",
        capital: [],
        region: "",
        population: 0,
        flags: { png: "", alt: '' },
        borders: []
    },
    isCountriesLoaded: false,
    isCountryLoaded: false,
    isCountriesError: null,
    isCountryError: null ,
}



export const countrySlice = createAppSlice({
    name: "country",
    initialState,
    reducers: () => ({
        SetCountry: ((state, action) => {
            state.countries = action.payload
            state.isCountriesLoaded = false
        }),
        SetOneCountry: ((state, action) => {
            state.country = action.payload
            state.isCountryLoaded = false
        }),
        SetOneLoad: ((state, action) => {
            state.isCountryLoaded = action.payload
        }),
        SetLoad: ((state, action) => {
            state.isCountriesLoaded = action.payload
        }),
        SetOneError: ((state, action) => {
            state.isCountryLoaded = false
            state.isCountryError = action.payload
        }),
        SetError: ((state, action) => {
            state.isCountriesLoaded = false
            state.isCountriesError = action.payload
        }),
        



    }),

})



export const { SetCountry, SetOneCountry,SetOneLoad,SetLoad,SetOneError,SetError } = countrySlice.actions
export default countrySlice.reducer



