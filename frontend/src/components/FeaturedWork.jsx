import React from 'react'

function FeaturedWork() {
  return (
    <div className="wrap">
        
        <div className="eyebrow">Featured work</div>
        
        <div className="head-row">
            <h2>Three projects we're<em>proud</em> to put our name on.</h2>
            <p className="head-copy">A closer look at the work that best represents how we build — one from each corner of the studio's practice.</p>
        </div>
        
        <div className="grid">
        
            <div className="card">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt='image of Aster house'/>
                <div className="card-meta">
                    <span className="card-name">Aster House</span>
                </div>
            </div>
        
            <div className="card" >
                <img src='https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80' alt='image of Marrow Bakery'/>
                <div className="card-meta">
                    <span className="card-name">Marrow Bakery</span>
                </div>
            </div>
        
            <div className="card ">
                <img src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80' alt='image of Fenwick Loft'/>
                <div className="card-meta">
                    <span className="card-name">Fenwick Loft</span>
                </div>
                
            </div>
        
        </div>
        
    </div>
  )
}

export default FeaturedWork