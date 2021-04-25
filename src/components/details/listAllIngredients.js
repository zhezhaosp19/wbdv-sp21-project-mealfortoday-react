import react from 'react'

const listAllIngredients = (meal) => {
    return (
    // TODO: will improve later
      <ul className="ingredients">
        {meal.strIngredient1 !== null && meal.strIngredient1 !== "" && <li>{meal.strIngredient1}, {meal.strMeasure1}</li>}
        {meal.strIngredient2 !== null && meal.strIngredient2 !== "" && <li>{meal.strIngredient2}, {meal.strMeasure2}</li>}
        {meal.strIngredient3 !== null && meal.strIngredient3 !== "" && <li>{meal.strIngredient3}, {meal.strMeasure3}</li>}
        {meal.strIngredient4 !== null && meal.strIngredient4 !== "" && <li>{meal.strIngredient4}, {meal.strMeasure4}</li>}
        {meal.strIngredient5 !== null && meal.strIngredient5 !== "" && <li>{meal.strIngredient5}, {meal.strMeasure5}</li>}
        {meal.strIngredient6 !== null && meal.strIngredient6 !== "" && <li>{meal.strIngredient6}, {meal.strMeasure6}</li>}
        {meal.strIngredient7 !== null && meal.strIngredient7 !== "" && <li>{meal.strIngredient7}, {meal.strMeasure7}</li>}
        {meal.strIngredient8 !== null && meal.strIngredient8 !== "" && <li>{meal.strIngredient8}, {meal.strMeasure8}</li>}
        {meal.strIngredient9 !== null && meal.strIngredient9 !== "" && <li>{meal.strIngredient9}, {meal.strMeasure9}</li>}
        {meal.strIngredient10 !== null && meal.strIngredient10 !== "" && <li>{meal.strIngredient10}, {meal.strMeasure10}</li>}
        {meal.strIngredient11 !== null && meal.strIngredient11 !== "" && <li>{meal.strIngredient11}, {meal.strMeasure11}</li>}
        {meal.strIngredient12 !== null && meal.strIngredient12 !== "" && <li>{meal.strIngredient12}, {meal.strMeasure12}</li>}
        {meal.strIngredient13 !== null && meal.strIngredient13 !== "" && <li>{meal.strIngredient13}, {meal.strMeasure13}</li>}
        {meal.strIngredient14 !== null && meal.strIngredient14 !== "" && <li>{meal.strIngredient14}, {meal.strMeasure14}</li>}
        {meal.strIngredient15 !== null && meal.strIngredient15 !== "" && <li>{meal.strIngredient15}, {meal.strMeasure15}</li>}
        {meal.strIngredient16 !== null && meal.strIngredient16 !== "" && <li>{meal.strIngredient16}, {meal.strMeasure16}</li>}
        {meal.strIngredient17 !== null && meal.strIngredient17 !== "" && <li>{meal.strIngredient17}, {meal.strMeasure17}</li>}
        {meal.strIngredient18 !== null && meal.strIngredient18 !== "" && <li>{meal.strIngredient18}, {meal.strMeasure18}</li>}
        {meal.strIngredient19 !== null && meal.strIngredient19 !== "" && <li>{meal.strIngredient19}, {meal.strMeasure19}</li>}
        {meal.strIngredient20 !== null && meal.strIngredient20 !== "" && <li>{meal.strIngredient20}, {meal.strMeasure20}</li>}
      </ul>
    )
}

export default listAllIngredients