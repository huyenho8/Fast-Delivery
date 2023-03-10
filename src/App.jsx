import "./App.css";
import Advantage from "./components/Advantage/Advantage";
import Step from "./components/Step/Step";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      {/********** header ************/}
      <header>
        <div className="header-container">
          <h1 className="header-logo">
            fast <span className="logo-special">delivery</span>
          </h1>
          <div className="header-register">
            <a href="#/">Login/Register</a>
          </div>
        </div>
      </header>
      <main>
        {/***************** Home *******************/}
        <section className="home">
          <div className="home-container">
            <div className="home-left">
              <div className="home-nav">
                <a href="#/" className="nav-item nav-active">
                  home
                </a>
                <a href="#/" className="nav-item">
                  about
                </a>
                <a href="#/" className="nav-item">
                  tracking
                </a>
                <a href="#/" className="nav-item">
                  pricing
                </a>
                <a href="#/" className="nav-item">
                  contact
                </a>
                <a href="#/" className="nav-item">
                  help
                </a>
              </div>
              <div className="home-social">
                <div className="social-item">
                  <img
                    src="assets/icons/facebook-icon.svg"
                    alt="facebook-icon"
                  />
                </div>
                <div className="social-item">
                  <img src="assets/icons/google-icon.svg" alt="google-icon" />
                </div>
                <div className="social-item">
                  <img src="assets/icons/twitter-icon.svg" alt="twitter-icon" />
                </div>
              </div>
            </div>
            <div className="home-right">
              <div className="home-provide">
                <p className="provide-title">
                  We Provide Best Courier & Parcel Service
                </p>
                <div className="provide-content">
                  <div className="provide-nav">
                    <div className="provide-nav-item nav-active">
                      Domestic <hr className="line-active" />
                    </div>
                    <div className="provide-nav-item">International</div>
                    <div className="provide-nav-item">Vehicles</div>
                  </div>
                  <hr className="line" />
                  <div className="provide-options">
                    <div className="option-item option-courier">
                      <img
                        src="assets/icons/couriers.svg"
                        alt="couriers-icon"
                      />
                      Courier
                    </div>
                    <div className="option-item option-parcel">
                      <img src="assets/icons/parcel.svg" alt="parcel-icon" />
                      Parcel
                    </div>
                  </div>
                  <div className="provide-pin">
                    <label className="provide-label">Your Pincode</label>
                    <input
                      type="text"
                      className="provide-input"
                      placeholder="Enter your pincode here"
                    />
                    <p className="pin-text">Get a Quote Now</p>
                  </div>
                </div>
              </div>
              <div className="home-move-down">
                <img src="assets/icons/move-down.svg" alt="move-down" />
              </div>
              <div className="home-track">
                <hr className="track-line" />
                <div>
                  <img src="assets/icons/track.svg" alt="track-icon" />
                </div>
                <div className="track-content">
                  <p className="track-text">Track Your Order</p>
                  <hr className="track-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-arrow">
            <img src="assets/icons/left-arrow.svg" alt="left-arrow" />
            <img src="assets/icons/right-arrow.svg" alt="right-arrow" />
          </div>
          <div className="bg-home">
            <img src="assets/images/bg-home.png" alt="bg-home" />
          </div>
        </section>
        {/**************** End of Home *****************/}
        {/***************** About us *******************/}
        <section className="about-us">
          <div className="about-us-container">
            <Title
              title="about us"
              content="Lorem Ipsum is simply dummy text "
            />
            <div className="about-us-content">
              <div className="about-us-content-left">
                <div className="man-image about-us-image">
                  <img
                    className="about-us-image"
                    src="assets/images/man.png"
                    alt="man"
                  />
                </div>
                <div className="woman-image about-us-image">
                  <img
                    className="about-us-image"
                    src="assets/images/woman.png"
                    alt="woman"
                  />
                </div>
                <div className="globe-image about-us-image">
                  <img
                    className="about-us-image"
                    src="assets/images/globe.png"
                    alt="globe"
                  />
                </div>
              </div>
              <div className="about-us-content-right">
                <p className="about-us-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="about-us-advantage">
                  <Advantage
                    number="01"
                    advColor="adv-blue"
                    title="fast delivery"
                    content="Lorem Ipsum is simply dummy text of the printing"
                  />
                  <Advantage
                    number="02"
                    advColor="adv-green"
                    title="secured service"
                    content="Lorem Ipsum is simply dummy text of the printing"
                  />
                  <Advantage
                    number="03"
                    advColor="adv-yellow"
                    title="worldwide shipping"
                    content="Lorem Ipsum is simply dummy text of the printing"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**************** End of About us *****************/}
        {/***************** Track product *******************/}
        <section className="track-product">
          <div className="track-product-content">
            <p className="track-product-text">track your product</p>
            <p className="track-product-text-copy">track your product</p>
            <div className="track-product-input">
              <input
                className="track-input"
                placeholder="Enter your Order ID Here..."
              />
              <button className="track-button">Track</button>
            </div>
            <p className="track-product-text-small">
              Now you can track your Order easily
            </p>
          </div>
        </section>
        {/**************** End of About us *****************/}
        {/***************** Service *******************/}
        <section className="service">
          <div className="service-container">
            <Title
              title="our service"
              content="Lorem Ipsum is simply dummy text "
            />
            <div className="service-content">
              <p className="service-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <div className="service-list">
                <div className="service-item">
                  <div className="service-item-icon boxs-icon">
                    <img src="assets/icons/boxs.svg" alt="box-icon" />
                  </div>
                  <div className="service-item-info ">
                    <p className="service-item-title">courier</p>
                    <p className="service-item-content">
                      Lorem Ipsum is simply dummy text of the printing...
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-item-icon house-icon">
                    <img src="assets/icons/house.svg" alt="house-icon" />
                  </div>
                  <div className="service-item-info">
                    <p className="service-item-title">residential movers</p>
                    <p className="service-item-content">
                      Lorem Ipsum is simply dummy text of the printing...
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-item-icon package-icon">
                    <img src="assets/icons/package.svg" alt="package-icon" />
                  </div>
                  <div className="service-item-info">
                    <p className="service-item-title">packaging</p>
                    <p className="service-item-content">
                      Lorem Ipsum is simply dummy text of the printing...
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-item-icon office-building-icon">
                    <img
                      src="assets/icons/office-building.svg"
                      alt="office-building-icon"
                    />
                  </div>
                  <div className="service-item-info">
                    <p className="service-item-title">commercial movers</p>
                    <p className="service-item-content">
                      Lorem Ipsum is simply dummy text of the printing...
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-item-icon storage-icon">
                    <img src="assets/icons/storage.svg" alt="storage-icon" />
                  </div>
                  <div className="service-item-info">
                    <p className="service-item-title">storage</p>
                    <p className="service-item-content">
                      Lorem Ipsum is simply dummy text of the printing...
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-item-icon flight-icon">
                    <img src="assets/icons/flight.svg" alt="flight-icon" />
                  </div>
                  <div className="service-item-info">
                    <p className="service-item-title">international</p>
                    <p className="service-item-content">
                      Lorem Ipsum is simply dummy text of the printing...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**************** End of Service *****************/}
        {/***************** How it work *******************/}
        <section className="how-it-work">
          <div className="how-it-work-bg">
            <img src="assets/images/bg.png" alt="bg" />
          </div>
          <div className="how-it-work-delivery">
            <img src="assets/images/delivery.png" alt="delivery" />
          </div>
          <div className="how-it-work-text">
            <p className="how-it-work-title">
              How <span className="special-text">it works?</span>
            </p>
            <p className="how-it-work-text-small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>

          <div className="how-it-work-step">
            <Step
              number="01"
              content="Lorem Ipsum is simply dummy text"
              step="order"
            />
            <Step
              number="02"
              content="Lorem Ipsum is simply dummy text"
              step="processing"
            />
            <Step
              number="03"
              content="Lorem Ipsum is simply dummy text"
              step="delivered"
            />
          </div>
        </section>
        {/**************** End of How it work *****************/}
        {/***************** Gallery *******************/}
        <section className="gallery">
          <div className="gallery-container">
            <Title
              title="gallery"
              content="Lorem Ipsum is simply dummy text "
            />
            <div className="gallery-image">
              <div className="image-item image-big">
                <img src="assets/images/3.png" alt="gallery" />
              </div>
              <div className="image-item image-1">
                <img src="assets/images/4.png" alt="gallery" />
              </div>
              <div className="image-item image-2">
                <img src="assets/images/5.png" alt="gallery" />
              </div>
              <div className="image-item image-3">
                <img src="assets/images/6.png" alt="gallery" />
              </div>
              <div className="image-item image-4">
                <img src="assets/images/7.png" alt="gallery" />
              </div>
            </div>
            <p className="gallery-text">View All Gallery</p>
          </div>
        </section>
        {/**************** End of Gallery *****************/}
        {/***************** People *******************/}
        <section className="people">
          <div className="people-content">
            <div className="avatar">
              <div className="avatar-item avatar-small">
                <img
                  className="avatar-image"
                  src="assets/images/people-1.png"
                  alt="people"
                />
              </div>
              <div className="avatar-item avatar-small">
                <img
                  className="avatar-image"
                  src="assets/images/people-2.png"
                  alt="people"
                />
              </div>
              <div className="avatar-item avatar-big">
                <img
                  className="avatar-image"
                  src="assets/images/people-5.png"
                  alt="people"
                />
                <div className="quotes">"</div>
              </div>
              <div className="avatar-item avatar-small">
                <img
                  className="avatar-image"
                  src="assets/images/people-4.png"
                  alt="people"
                />
              </div>
              <div className="avatar-item avatar-small">
                <img
                  className="avatar-image"
                  src="assets/images/people-3.png"
                  alt="people"
                />
              </div>
            </div>
            <div className="people-text">
              <p className="people-info">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal
              </p>
              <p className="people-name">Abigail Irene</p>
            </div>
            <div className="down">
              <div className="down-content">
                <div className="down-item down-left ">
                  <img src="assets/icons/down-left.svg" alt="down-left" />
                </div>
                <div className="down-item down-right">
                  <img src="assets/icons/down-right.svg" alt="down-right" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
