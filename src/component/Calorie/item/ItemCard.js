import React from 'react'
import './itemcard.css';

const ItemCard = ({ userData }) => {

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    userData.forEach((data) => {
        totalCalories += data.calories;
        totalProtein += data.protein;
        totalCarbs += data.carbs;
        totalFat += data.fat;
    });

    return (
        <div className='itemcard-container'>
            {
                (totalCalories === 0) ?
                    (<div className='itemcard-nodata'>No Data for Today</div>)
                    :
                    (<div className='itemcard-data'>
                        <div className='itemcard-total'>Total Calories - {totalCalories}, Protien - {totalProtein}, Carbs - {totalCarbs}, Fats - {totalFat}  </div>
                        <div className='itemcard-fooditems'>
                            {userData.map((data) => (
                                <div key={data.id}> <span className='itemcard-fooditems-name'>{data.name}</span> (Calories - {data.calories}, Protein - {data.protein},  Carbs - {data.carbs}, Fats - {data.fat}) </div>
                            ))}
                        </div>
                    </div>
                    )
            }
        </div>
    )

}

export default ItemCard