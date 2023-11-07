import React, { useEffect, useState } from 'react'
import GiftSection from '@/src/components/common/GiftSection'
import ProductViewModal from '@/src/components/common/ProductViewModal'
import QuantityCounter from '@/src/uitils/QuantityCounter';
import useQuantityCounter from '@/src/hooks/useQuantityCounter';
import Link from 'next/link';
const Cart = () => {
  const [data, setdata] = useState([])
  const { quantity, increment, decrement, handleInputChange } =
    useQuantityCounter(1);
  useEffect(() => {
    let d = localStorage.getItem('carditams')
    setdata(JSON?.parse(d));
  }, [])
  let priceArray = [0];
  let cancelPriceArray = [0];

  data?.map((food) => {
    priceArray.push(Number(food.VariantPrice * food.Qty));
  });
  data?.map((food) => {
    cancelPriceArray.push(Number(food.VariantCompareAtPrice * food.Qty));
  });

  let cartTotalPrice = priceArray?.reduce((a, b) => a + b);
  let cancelcartTotalPrice = cancelPriceArray?.reduce((a, b) => a + b);
  return (
    <>
      <div className="whistlist-section cart mt-110 mb-110">
        <div className="container">
          <div className="row mb-50">
            <div className="col-12">
              <div className="whistlist-table">
                <table className="eg-table2">
                  <thead>
                    <tr>
                      <th />
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.length > 0 ? data.map((e, i) => {
                      return <tr>
                        <td>
                          <div className="delete-icon" onClick={() => {
                            let olddata = JSON.parse(localStorage.getItem("carditams"))
                            let data = olddata.filter(item => item.Title !== e.Title)

                            setdata(data);
                            localStorage.setItem("carditams", JSON.stringify(data))
                          }}>
                            <i className="bi bi-x-lg" />
                          </div>
                        </td>
                        <td data-label="Product" className="table-product">
                          <div className="product-img">
                            <img src={e.ImageSrc} alt="" className='img-fluid' width={100} style={{
                              objectFit: "cover"
                            }} />
                          </div>
                          <div className="product-content">
                            <h6><a href="#">{e.Title} </a></h6>
                          </div>
                        </td>
                        <td data-label="Price">
                          <p className="price">₹{e.VariantPrice}<del> <br /> ₹{e.VariantCompareAtPrice}</del></p>
                        </td>
                        <td data-label="Quantity">
                          <div className="quantity-counter">
                            <div
                              className="quantity__minus"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                if (e.Qty > 1) {
                                  let olddata = JSON.parse(localStorage.getItem("carditams"))
                                  console.log(olddata);
                                  let data = olddata.map((el) => {
                                    if (el.Title === e.Title) {
                                      return {
                                        ...el, Qty: Number(e.Qty) - 1
                                      }
                                    } else {
                                      return el
                                    }
                                  })
                                  setdata(data);
                                  console.log(data);
                                  localStorage.setItem("carditams", JSON.stringify(data))
                                }
                              }}
                            >
                              <i className="bx bx-minus" />
                            </div>
                            <input
                              name="quantity"
                              type="text"
                              className="quantity__input"
                              value={e.Qty}
                              onChange={(elt) => {
                                let olddata = JSON.parse(localStorage.getItem("carditams"))
                                console.log(olddata);
                                let data = olddata.map((el) => {
                                  if (el.Title === e.Title) {
                                    return {
                                      ...el, Qty: Number(elt.target.value)
                                    }
                                  } else {
                                    return el
                                  }
                                })
                                setdata(data);
                                console.log(data);
                                localStorage.setItem("carditams", JSON.stringify(data))
                              }
                              }
                            />
                            <div
                              className="quantity__plus"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                let olddata = JSON.parse(localStorage.getItem("carditams"))
                                console.log(olddata);
                                let data = olddata.map((el) => {
                                  if (el.Title === e.Title) {
                                    return {
                                      ...el, Qty: Number(e.Qty) + 1
                                    }
                                  } else {
                                    return el
                                  }
                                })
                                setdata(data);
                                console.log(data);
                                localStorage.setItem("carditams", JSON.stringify(data))
                              }
                              }
                            >
                              <i className="bx bx-plus" />
                            </div>
                          </div>
                        </td>
                        <td data-label="Total">
                          <p className="price">₹{e.VariantPrice * e.Qty}<del> <br /> ₹{e.VariantCompareAtPrice * e.Qty}</del></p>

                        </td>
                      </tr>
                    }) : <tr className='text-center'><td > Not Found</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="coupon-area">
                <div className="cart-coupon-input">
                  <h5>Coupon Code</h5>
                  <form>
                    <div className="form-inner">
                      <input type="text" placeholder="Coupon Code" />
                      <button type="submit" className="primary-btn1 hover-btn3">Apply Code</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Cart Totals</th>
                    <th />
                    <th>₹ {cartTotalPrice}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <ul className="cost-list text-start">
                        <li>Shipping Fee</li>
                        <li>Total ( tax excl.)</li>
                        <li>Total ( tax incl.)</li>
                        <li>Taxes</li>
                        <li>Shipping Enter your address to view shipping options. <br /> <a href="#">Calculate
                          shipping</a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="single-cost text-center">
                        <li>Fee</li>
                        <li>₹15</li>
                        <li />
                        <li>₹15</li>
                        <li>₹15</li>
                        <li>₹5</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td />
                    <td>₹{cartTotalPrice + 50}</td>
                  </tr>
                </tbody>
              </table>
              <Link legacyBehavior href="/checkout">
                <button type="submit" className="primary-btn1 hover-btn3">Product Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
