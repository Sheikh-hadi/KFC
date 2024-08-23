import React from 'react'

const cart = () => {
  return (
    <div className="container-fluid">
    <div className="row justify-content-center">
        <div className=" col-lg-6 col-md-8">
            <div className="card p-3">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="heading text-center">BBBootstrap</h2>
                    </div>
                </div>
                <form onsubmit="event.preventDefault()" className="form-card">
                    <div className="row justify-content-center mb-4 radio-group">
                        <div className="col-sm-3 col-5">
                            <div className='radio selected mx-auto' data-value="dk">
                             <img className="fit-image" src="https://i.imgur.com/5TqiRQV.jpg" width="105px" height="55px" alt=''/>
                              </div>
                        </div>
                        <div className="col-sm-3 col-5">
                            <div className='radio mx-auto' data-value="visa">
                             <img className="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="105px" height="55px" alt=''/> 
                             </div>
                        </div>
                        <div className="col-sm-3 col-5">
                            <div className='radio mx-auto' data-value="master">
                             <img className="fit-image" src="https://i.imgur.com/WIAP9Ku.jpg" width="105px" height="55px" alt=''/>
                              </div>
                        </div>
                        <div className="col-sm-3 col-5">
                            <div className='radio mx-auto' data-value="paypal">
                             <img className="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="105px" height="55px" alt=''/> 
                             </div>
                        </div>
                         <br/>
                    </div>
                    <div className="row justify-content-center form-group">
                        <div className="col-12 px-auto">
                            <div className="custom-control custom-radio custom-control-inline">
                             <input id="customRadioInline1" type="radio" name="customRadioInline1" className="custom-control-input" checked="true"/>
                             <label for="customRadioInline1" className="custom-control-label label-radio">Private</label>
                             </div>
                            <div className="custom-control custom-radio custom-control-inline">
                             <input id="customRadioInline2" type="radio" name="customRadioInline1" className="custom-control-input"/>
                              <label for="customRadioInline2" className="custom-control-label label-radio">Business</label> 
                              </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="input-group"> 
                            <input type="text" name="Name" placeholder="John Doe"/> 
                            <label>Name</label> 
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="input-group">
                            <input type="text" id="cr_no" name="card-no" placeholder="0000 0000 0000 0000" minlength="19" maxlength="19"/>
                             <label>Card Number</label> 
                             </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group">
                                     <input type="text" id="exp" name="expdate" placeholder="MM/YY" minlength="5" maxlength="5"/>
                                      <label>Expiry Date</label>
                                       </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group">
                                     <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" minlength="3" maxlength="3"/> 
                                     <label>CVV</label>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                         <input type="submit" value="Pay 100 EUR" className="btn btn-pay placeicon"/> 
                         </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default cart