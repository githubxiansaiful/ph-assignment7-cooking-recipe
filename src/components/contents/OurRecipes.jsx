import { useState } from "react";
import Recipe from "./Recipe";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [cook, setCook] = useState([]);
    const [cookCount, setCount] = useState(0);
    const [cooking, setCooking] = useState([]);

    // Total time and total calories state
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        fetch('recipes.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, []);

    // Want to cook button
    const handleCookButton = (recipeeee) => {
        const isExit = cook.find(item => item.recipe_id == recipeeee.recipe_id);
        if (!isExit) {
            setCook([...cook, recipeeee]);
            setCount(prevCount => prevCount + 1);
            toast.success('Item added to cook table, click Preparing button start cooking');
        }
        else {
            toast.error('Recipe already added!');
        }
    }

    // Currently Cooking
    const handleCookingButton = (recipe) => {
        const isCooking = cooking.find(item => item.recipe_id == recipe.recipe_id);

        if (!isCooking) {
            toast.success('Cooking Started! Wait to eat :)');
            setCooking(prevCooking => [...prevCooking, recipe]);
            // Remove the item from the "Want to cook" table
            setCook(prevCook => prevCook.filter(item => item.recipe_id !== recipe.recipe_id));
            // Update total time and total calories
            setTotalTime(prevTime => prevTime + parseInt(recipe.preparing_time));
            setTotalCalories(prevCalories => prevCalories + parseInt(recipe.calories));
        }
        else {
            toast.error('Recipe already cooking!');
        }
    }

    return (
        <>
            <div className="mt-[80px] mb-[80px]">
                <div className="container">
                    <div className="text-center">
                        <h2 className="color-recipe text-4xl font-semibold mb-2">Our Recipes</h2>
                        <p className="m-auto max-w-[850px]">Delight in our curated collection of exquisite recipes, meticulously crafted to tantalize your taste buds. From mouthwatering mains to delectable desserts, explore culinary delights that promise to inspire and satisfy.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="our-recipes-two-box">
                        <div className="grid grid-flow-col-1 lg:grid-cols-2 gap-5 or-b1">
                            {
                                recipes.map(recipeeee => <Recipe
                                    key={recipeeee.recipe_id}
                                    handleCookButton={handleCookButton}
                                    recipeeee={recipeeee}
                                ></Recipe>)
                            }
                        </div>
                        <div className="rounded-xl border-[#ddd] border or-b1">
                            <h3 className="text-center border-b border-[#f1f1f1] font-semibold text-2xl text-[#282828]  pt-5 pb-2 mb-5 mx-auto px-5 max-w-[80%]">Want to cook: {cook.length}</h3>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th>Calories</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cook.map((item, index) => (
                                                <tr key={item.recipe_id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.recipe_name}</td>
                                                    <td>{item.preparing_time}</td>
                                                    <td>{item.calories}</td>
                                                    <td><button onClick={() => handleCookingButton(item)} className="btn">Preparing</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <h3 className="text-center border-b border-[#f1f1f1] font-semibold text-2xl text-[#282828]  pt-5 pb-2 mb-5 mx-auto px-5 max-w-[80%]">Currently cooking: {cooking.length}</h3>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th>Calories</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cooking.map((itemCooking, indexNum) => (
                                                <tr key={itemCooking.recipe_id}>
                                                    <td>{indexNum + 1}</td>
                                                    <td>{itemCooking.recipe_name}</td>
                                                    <td>{itemCooking.preparing_time}</td>
                                                    <td>{itemCooking.calories}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex mt-3 pb-5 px-2 justify-between">
                                <p><i class="fa-solid fa-clock"></i> Total Time: {totalTime}</p>
                                <p><i class="fa-solid fa-fire"></i> Total Calories: {totalCalories}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default OurRecipes;
