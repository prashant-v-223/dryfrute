import Link from 'next/link'
import React from 'react'

const ChooseProduct = () => {
  return (
    <div className="choose-product-section mb-110">
      <div className="container">
        <div className="section-title text-center pt-5">
          <h3>Choose What You Want</h3>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="choose-product-card hover-img style-2">
              <Link legacyBehavior href="/shop">
                <a>
                  <img src="/assets/img/416x514 1.jpg" alt="" style={{
                    maxHeight: 500, objectFit: "cover"
                  }} />
                </a>
              </Link>
              <div className="choose-product-card-content">
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="choose-product-card hover-img style-2">
              <Link legacyBehavior href="/shop">
                <a>
                  <img src="/assets/img/416x514 3.jpg" alt="" style={{
                    maxHeight: 500, objectFit: "cover"
                  }} />
                </a>
              </Link>
              <div className="choose-product-card-content style-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseProduct
