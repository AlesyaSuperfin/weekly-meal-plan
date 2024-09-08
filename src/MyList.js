import image from './times.svg';

const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
    return (
        <div>
            <div className="list">
                <h1>Weekly Meal Plan</h1>
                <button className="button-add" onClick={addMeal}>Add your daily plan</button>
            </div>

            <div className='note'> 
                {mealPlans.map(({id, title, mealForADay}) => (
                    <div className={`meal ${id === selectedDay ? 'selected' : 'default'}`}
                    onClick={() => setSelectedDay(id)}> 
                        <p className="text-title">{title}</p>
                        <p className="text-meal">{mealForADay.substring(0, 60)}</p>
                        <button className="button-del" onClick={() => deleteDay(id)}><img src={image} alt="delImage" width="10px"/>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyList;