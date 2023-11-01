import React from 'react'

const Banner = () => {
  return (
    <div className="banner-box">
      <div className="banner-desc">
        <h1>Don't Know What to Cook?</h1>
        <p>Explore a world of culinary inspiration with EatsVoyage.Say goodbye to mealtime dilemmas and hello to flavorful experiences. Let's embark on a culinary journey together!"</p>
        <div className="btn-box">
          <a href="/random" class="search-link-btn">
            <button className="sub">Random Recipes &nbsp;&nbsp;<span><i class="fa-sharp fa-solid fa-arrow-right">  </i></span></button>
          </a>

          <div className="inner-border"></div>
        </div>
      </div>

    </div>
  )
}

export default Banner
