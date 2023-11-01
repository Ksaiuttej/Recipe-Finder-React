import React from 'react'

const ItemDetail = (props) => {
    const item =  props.item;
    return (
        <div className="detail-area">
            <div className="detial-img-box">
                <img src={item.recipe.image} alt="" className="detail-img" />
            </div>

            <div className="detail-desc">
                <h1>{item.recipe.label}</h1>
                <p>by {item.recipe.source}</p>
                <div className="details-box">
                    <div className="detail-box">
                        <h3>{(item.recipe.ingredients).length}</h3>
                        <p>ingridents</p>
                    </div>
                    <hr />
                    <div className="detail-box">
                        <h3>{item.recipe.totalTime}</h3>
                        <p>minutes</p>
                    </div>
                    <hr />
                    <div className="detail-box">
                        <h3>{Math.round(item.recipe.calories)}</h3>
                        <p>calories</p>
                    </div>
                </div>
                <div className="ingri-box">
                    <h3>Ingridents</h3>
                    <hr />
                    <ul className="ingri-list">
                        {item.recipe.ingredients.map((inItem) => {
                            return <li>{inItem.text}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
