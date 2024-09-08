const MyMealsAndIngredients = ({selectedDay, updateDay}) => {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value,
        })
    }

    if (!selectedDay) return <h3>Plan your week ahead of time!</h3>

    return (
        <div className="plan">
                <input
                type="text"
                placeholder="Today is.."
                className="myInput"
                id="title"
                value={selectedDay.title} 
                onChange={(e) => editMyMeal ("title", e.target.value)} />

                <textarea
                placeholder="Write your meal plan"
                id="mealForADay"
                value={selectedDay.mealForADay}
                onChange={(e) => editMyMeal("mealForADay", e.target.value)} />

                <textarea 
                placeholder="List of ingredients"
                id="mealForADay"
                value={selectedDay.ingredients}
                onChange={(e) => editMyMeal("ingredients", e.target.value)} />
        </div>
    )
}

export default MyMealsAndIngredients;