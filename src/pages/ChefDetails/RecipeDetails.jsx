import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';

const RecipeDetails = ({ recipe }) => {
    // console.log(recipe);
    const { recipe_picture, recipe_name, rating, instructions, ingredients } = recipe;
    const [fav, setFav] = useState(false);
    const handleFavBtn = () => {
        setFav(true)
        toast.success("Recipe Favorite")
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={recipe_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name} <button onClick={handleFavBtn} disabled={fav ? true : false} ><FaRegHeart className={`${fav && 'text-red-700'}`} /></button></h2>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                />
                <p className="card-title">Ingredients</p>
                <ul>
                    {
                        ingredients.map((ingts, index) => <li key={index}>{index + 1}. {ingts}</li>)
                    }
                </ul>

                <div className='flex items-center justify-between'>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <p className="text-sm text-center text-gray-500">Yammy Yammy Yammy</p>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>

                <ul>
                    <p className="card-title">Cooking Method</p>
                    {
                        instructions.map((ins, index) => <li key={index}>{ins}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default RecipeDetails;