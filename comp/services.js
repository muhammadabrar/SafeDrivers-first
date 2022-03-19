import {
  Plane32,
  Enterprise32,
  PassengerDrinks32,
  CarFront32,
  TrafficFlow32,
  CabinCareAlert32,
  FaceMask32,
  Touch_2Filled32,
  HealthCross32,
  TemperatureFeelsLike32,
  CheckmarkFilled24,
} from "@carbon/icons-react";
import { useState } from "react";
export default function Services() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <section className="services">
        <div className="wrap">
          <h1 className="section-title">
            Our <span>Services</span>
            {/* <hr/> */}
          </h1>
          <p>
            We are a chauffeured car service provider in Dubai (UAE), providing
            a number of safe and reliable services to cater for all your
            traveling needs. Whether you need our services for a weekend outing,
            a shopping trip or late night party you may need a trusted Driver
            who can take you back home or to your desired destination at your
            chosen time. We are also providing short-term drivers for daily,
            weekly and monthly basis at very convenient and low prices.
            <br />
            We make sure that our drivers have a professional attitude and know
            about their responsibilities well. You can just call us or share
            your location with us via WhatsApp to let us know where you are and
            what time to pick you up. Just sit back and relax and let us handle
            the rest. We let you Hire Private Safe Driver Dubai and enjoy sober
            driving services all the time. We make sure that your and your car’s
            safety is our number 1 priority!
          </p>
          <div className="services-items">
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/airport.jpeg')` }}
            >
              <div class="icon-box">
                <div class="icon">
                  <i>
                    <Plane32 />
                  </i>
                </div>
                <h4>
                  <a href="">Airport Transfers</a>
                </h4>
                <p>
                  Had a long flight? Rest assured our safe driver will be
                  waiting for you autside the airport along with your vehicle.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/party.jpg')` }}
            >
              <div class="icon-box">
                <div class="icon">
                  <i>
                    <PassengerDrinks32 />
                  </i>
                </div>
                <h4>
                  <a href="">After Party Pickup</a>
                </h4>
                <p>
                  Let us know when it is time to go afer a great time at party
                  and we will drive you home safely.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/bg1.jpg')` }}
            >
              <div class="icon-box">
                <div class="icon">
                  <i>
                    <Enterprise32 />
                  </i>
                </div>
                <h4>
                  <a href="">City Tour</a>
                </h4>
                <p>
                  Looking for someone who could show help you showing around
                  city to your guests? We will take care of that.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/corporate.jpg')` }}
            >
              <div class="icon-box">
                <div class="icon">
                  <i>
                    <CarFront32 />
                  </i>
                </div>
                <h4>
                  <a href="">Corporate Transfers</a>
                </h4>
                <p>
                  We are the best choice if you need someone to drive your
                  organizations C Level Executives. Book us and see how.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/roadtrip.jpg')` }}
            >
              <div class="icon-box">
                <div class="icon">
                  <i>
                    <TrafficFlow32 />
                  </i>
                </div>
                <h4>
                  <a href="">Road Trip Driving</a>
                </h4>
                <p>
                  All you planning a road trip accross the Emirates but not sure
                  who will drive? Let us drive so you can enjoy the trip.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/cartesting.jpg')` }}
            >
              <div class="icon-box">
                <div class="icon">
                  <i>
                    <CabinCareAlert32 />
                  </i>
                </div>
                <h4>
                  <a href="">Vehicle Testing</a>
                </h4>
                <p>
                  Don’t have time for getting your vehicle tested and renewed?
                  Sit back and let us do the testing and renewal for you.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>

            {/* <div className="service" style={{backgroundImage:`url('./hero/bg1.jpg')`}}>
            <div class="icon-box" >
              <div class="icon"><i><Plane32 /></i></div>
              <h4><a href=""></a></h4>
              <p></p>
            </div>
            </div> */}
          </div>
        </div>
      </section>

      <section id="why-us" class="services why-us">
        <div className="wrap">
          <h1 className="section-title">
            How <span>It Work</span>
            {/* <hr/> */}
          </h1>
          <p>
            <span>Call us or send us a msg on WhatsApp</span> to make your
            reservation for a safe driver.
          </p>
          <div class="why-us-items">
            <>
              <div class="box">
                <span>01</span>
                <h4>Make a Booking</h4>
                <p>Make a Booking Request Online or By Chat.</p>
              </div>
            </>

            <>
              <div class="box">
                <span>02</span>
                <h4>Pickup Location</h4>
                <p>Provide Pickup Date, Time and Contact Details.</p>
              </div>
            </>

            <>
              <div class="box">
                <span>03</span>
                <h4> Driver Will Arrive</h4>
                <p>Driver Will Contact Few In Minutes.</p>
              </div>
              <div class="box">
                <span>04</span>
                <h4> Pay Cash or Card</h4>
                <p>We accept both credit card and cash payments.</p>
              </div>
            </>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="wrap">
          <h1 className="section-title" style={{ marginTop: "3rem" }}>
            <span>Price</span> Structure
            {/* <hr/> */}
          </h1>
          <p style={{ fontSize: "2rem" }}>
            We offer a very flexible price structure to cater all types of
            customer requirements.
          </p>
          <div className="price-plans">
            <div class="price-plan">
                <div>
              <h1 className="plan-title">Within-Dubai</h1>
              <p className="plan-note">Single Pickup Single Drop-off</p>
              <hr />
              </div>
              <div className="plan-points">
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
              </div>
              <button className="service-btn ">WhatsApp Now</button>

            </div>
            <div class="price-plan active">
                <div>
              <h1 className="plan-title">Inter-Emirates</h1>
              <p className="plan-note">Accross the UAE</p>
              <hr /></div>
              <div className="plan-points">
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 10 - 20 KM AED 105</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p>20 - 30 KM AED 120</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>

              </div>
              <button className="plan-btn ">WhatsApp Now</button>

            </div>
            <div class="price-plan">
              <h1 className="plan-title">Hourly Plan</h1>
              <p className="plan-note">Minimum 2 Hours Booking</p>
              <hr />
              <div className="plan-points">
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
              </div>
              <button className="service-btn ">WhatsApp Now</button>

            </div>
            
          </div>
        </div>
      </section>

      <section className="safety">
        <div className="safety-wrap">
          <div className="sops">
            <h1 className="sops-title">
              <span>Covid 19</span> Safety Measures
              {/* <hr/> */}
            </h1>
            <p className="sops-notes">
              Indeed these are difficult times for everyone. For us safety of
              our drivers and customers is equally important. We follow DHA
              safety guidelines.
            </p>
            <hr style={{ marginTop: "2rem", marginRight: "2rem" }} />
            <div className="sops-items">
              <div className="sops-box">
                <i>
                  <FaceMask32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Wear Mask & Gloves</h4>
                  <p className="sop-note">
                    Wearing masks & gloves is mendatory for both driver &
                    passengers.
                  </p>
                </div>
              </div>
              <div className="sops-box">
                <i>
                  <Touch_2Filled32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Avoid Contact</h4>
                  <p className="sop-note">
                    Avoid un-necessory contact and avoid using front passenger
                    seat.
                  </p>
                </div>
              </div>
              <div className="sops-box">
                <i>
                  <TemperatureFeelsLike32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Temperature Screening</h4>
                  <p className="sop-note">
                    Drivers are checked for Temperature at the start & end of
                    their duty.
                  </p>
                </div>
              </div>
              <div className="sops-box">
                <i>
                  <HealthCross32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Continous Senitization</h4>
                  <p className="sop-note">
                    Drivers are instructed to stay clean & regularly use
                    senitizars.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="states">
            <h2>TRUSTED & EXPERIENCED SAFE DRIVER</h2>
            <p>HIRE OUR DRIVERS TO TAKE YOU HOME SAFELY, ANYWHERE, ANYTIME.</p>
            <div className="states-items">
              <div className="state-box">
                <h3>100+</h3>
                <p>drivers</p>
              </div>
              <div className="state-box">
                <h3>100+</h3>
                <p>Weekly Bookings</p>
              </div>
            </div>
            <button className="service-btn ">WhatsApp Now</button>

          </div>
        </div>
      </section>

      {/* "https://api.whatsapp.com/send/?phone=971524837505&text=I will like to make a booking for a SafeDriver." */}
    </>
  );
}
