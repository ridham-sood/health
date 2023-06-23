import React from 'react'
import axios from "axios";
import { getMemberId } from '../../Auth/Auth';
import "./searchresult.css";
import { BASE_URL } from '../../Auth/Auth';

const SearchResult = ({ results, dates, setAdd }) => {

    async function saveItems(result) {
        try {
            await axios.post(`${BASE_URL}/api/food/save/${getMemberId()}`, {
                name: result.name,
                calories: result.calories,
                protein: result.protein,
                carbs: result.carbs,
                fat: result.fat,
                date: dates
            }).then((response) => {
            }, fail => { console.error(fail); }
            )

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='search-result-container'>
            {
                results.map((result, index) => {
                    return <div key={index}
                        onClick={() => {
                            saveItems(result)
                            setAdd(result)
                            setTimeout(() => {
                                setAdd('');
                            }, 100);
                        }}
                    >+ {result.name}</div>
                })
            }
        </div>
    )
}

export default SearchResult