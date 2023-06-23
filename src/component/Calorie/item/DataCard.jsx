import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getMemberId } from '../../Auth/Auth';
import ItemCard from './ItemCard';
import { BASE_URL } from '../../Auth/Auth';


const DataCard = ({ dates, add }) => {
    const [userData, setData] = useState([]);

    const fetchItems = async () => {
        try {
            await axios.get(`${BASE_URL}/api/food/get/${dates}/${getMemberId()}`)
                .then((response) => {
                    setData(response.data);
                })

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchItems();
    }, [fetchItems])



    return (
        <div >
            <ItemCard userData={userData} />
        </div>
    )
}

export default DataCard