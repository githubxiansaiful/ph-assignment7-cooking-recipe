const Recipe = ({ recipeeee, handleCookButton }) => {

    const { recipe_name, short_description, preparing_time, calories, recipe_image, ingredients} = recipeeee;

    return (
        <div className="border border-[#f1f1f1] p-5 rounded-xl">
            <div>
                <img className="rounded-xl" src={recipe_image} alt="" />
            </div>
            <div className="mt-5 mb-5 border-b border-[#f1f1f1] pb-5">
                <h3 className="text-xl font-semibold">{recipe_name}</h3>
                <p>{short_description}</p>
            </div>
            <div className="border-[#f1f1f1] border-b pb-5 mb-5">
                <h3 className="text-[18px] mb-2">Ingredients: {ingredients.length}</h3>
                <ul className="ingredients-lists">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="flex justify-between">
                    <p><i class="fa-solid fa-clock"></i> {preparing_time}</p>
                    <p><i class="fa-solid fa-fire"></i> {calories}</p>
                </div>
                <div className="text-center mt-7">
                    <button onClick={() => handleCookButton(recipeeee)} className="color-recipe bg-[#0BE58A] w-full rounded-xl text-[18px] h-[50px] ">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;