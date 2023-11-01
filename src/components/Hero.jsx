import React from 'react'

const Hero = () => {

  return (
    <div className="hero-box">
      <div className="hero-head">
        <h1>Discover <span>Amazing Recipes</span></h1>
        <p>Explore a world of culinary delights with EatsVoyage. Find and save your favorite recipes from around the globe.</p>
        <div className="btn-box">
          <a href="/search" class="search-link-btn">
            <button className="sub">Search Recipes&nbsp;&nbsp; <span><i class="fa-sharp fa-solid fa-arrow-right"></i></span></button>
          </a>

          <div className="inner-border"></div>
        </div>
      </div>
      <img src="https://i.postimg.cc/d1LSP805/coverimg.png" alt="mirchi" className='hero-img' />
    </div>
  )
}

export default Hero
