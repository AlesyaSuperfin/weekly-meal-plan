import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import { v4 as uuid } from 'uuid';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect (() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = () => {
    const newMeal = {
      title: "Today is..",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans])
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans (updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }

  return (
    <div>
    <div className='fixed-background'> </div>
    <div className="App">
      <MyList 
        mealPlans={mealPlans} 
        addMeal={addMeal} 
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay} />
      <MyMealsAndIngredients
        selectedDay={getActiveMeal()}
        updateDay={updateDay} />
   </div>
    <footer><p class="footerText">Developed by <a href="https://alesya-superfin-web-developer.glitch.me/" target="blank">Alesya Superfin</a> </p></footer>
    </div>
  );
}

export default App;
