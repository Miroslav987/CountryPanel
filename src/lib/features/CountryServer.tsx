import axios from "axios"
import { useAppDispatch, useAppSelector } from "../hooks"
import { SetCountry, SetError, SetLoad, SetOneCountry, SetOneError, SetOneLoad } from "./CountrySlice"
import { useSearchParams } from "next/navigation"

export const useCountry = () => {
    const dispatch = useAppDispatch()
    const {countries} = useAppSelector(state => state.country)
    const API = "https://restcountries.com/v3.1/"

    async function GetCountry() {
        try {
            dispatch(SetLoad(true))
            const { data } = await axios.get(`${API}all`)
            const names = data.map((country: any) => ({name:country.name.common, cca3:country.cca3}))
            .sort((a: any, b: any) => a.name.localeCompare(b.name));
            dispatch(SetCountry(names))
        } catch (error:any) {
            dispatch(SetError(error.message))
        }
    }

    async function GetOneCountry(name: string) {
        try {
            dispatch(SetOneLoad(true))
          const { data } = await axios.get(`${API}name/${name}`);
          const country = data[0];
    
          const borderCountries = country.borders
            ? countries
                .filter((c: any) => country.borders.includes(c.cca3))
                .map((c: any) => c.name)
            : [];
    
          dispatch(
            SetOneCountry({
              name: country.name.common,
              region: country.region,
              capital: country.capital,
              population: country.population,
              flags: country.flags,
              borders: borderCountries,
            })
          );
        } catch (error:any) {
            dispatch(SetOneError(error.message))
        }
      }

return { GetCountry, GetOneCountry }
}