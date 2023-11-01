import React from 'react'

const Tips = () => {
  return (
    <div className='tips-box'>
      <div className="tips-desc">
        <div className='tips-heading'>
          <h2>Tips to Cook</h2>
        </div>
        <h1>Explore our cooking tips and make your meals even more delicious.</h1>
        <div className="tips-container">
          <div className="tip">
            <i class="fa-solid fa-utensils"></i>
            <h3>Master Knife Skills</h3>
          </div>
          <hr />
          <div className="tip">
            <i class="far fa-clock"></i>
            <h3>Perfect Timing</h3>
          </div>
          <hr />
          <div className="tip">
            <i class="fas fa-palette"></i>
            <h3>Balancing Flavors</h3>
          </div>
        </div>
      </div>
      <div className="tip-img">
        <img src="https://i.postimg.cc/MH9TqhqD/Smart-kitchen-logo-design-on-transparent-background-PNG-removebg-preview.png" alt="" />
      </div>
    </div>
  )
}

export default Tips
