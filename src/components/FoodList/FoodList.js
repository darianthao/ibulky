import React, { Component } from "react";
import FoodData from '../../data/food.json'

import './FoodList.css'

function FoodList() {
    return (
        <div className="foodlist-container">
            <h1 className="foodlist-main-header">List of Food:</h1>
            {FoodData.map((postDetail, index) => {
                return <div className="food-item-listing">
                <h1>{postDetail.name}</h1>
                    <p>Food-Group: {postDetail.group}</p>
                </div>
            })}
        </div>
    );
}

export default FoodList;