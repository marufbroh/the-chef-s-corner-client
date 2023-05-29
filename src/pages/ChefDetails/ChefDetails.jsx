import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const singleChefData = useLoaderData();
    const {chef_name, chef_picture, years_of_experience, num_recipes, likes, short_bio, recipes } = singleChefData;
    return (
        <div className='my-container flex flex-col space-y-10'>
            <div className="card lg:card bg-base-100 shadow-xl">
                <LazyLoad threshold={0.99}><figure><img src={chef_picture} alt="Chef Picture" /></figure></LazyLoad>
                <div className="card-body">
                    <h2 className="card-title lg:text-5xl">Name: {chef_name}</h2>
                    <p className='text-xl'> <span className='font-semibold'>Short Bio: </span>{short_bio}</p>
                    <p className='font-semibold text-xl'>Experience: {years_of_experience} years+</p>
                    <p className='font-semibold text-xl'>Likes: {likes}</p>
                    <p className='font-semibold text-xl'>Number of Recipes: {num_recipes}</p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto lg:gap-10'>
                {
                    recipes.map((recipe, index) => <RecipeDetails key={index} recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default ChefDetails;