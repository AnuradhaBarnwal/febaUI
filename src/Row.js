import React, { Component } from 'react';
import image1 from './assets/img/img1.jpg'
import './Row.css'

class Row extends Component {
    render() {

        var vendor = "SUPER VENDOR"

        return (
            <div className="wrapper">
                <p className="heading">Bridal Makeup Artist</p>
                <p>Showing <b>160+ results</b></p>
                <div className="column">
                    <div className="row">
                        <div className="card-container">

                            <div className="heart">
                                <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                            </div>

                            <div className="card-img">
                                <img src={image1} alt="image1" />
                            </div>
                            <div className="card-content">
                                <div className="tag">
                                    <span className="tagName">{vendor}</span>
                                    <span className="place">Jaipur</span>
                                    <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                </div>
                                <div className="card-name">
                                    <span>Jssmakeuovers</span>
                                </div>
                                <div className="price">
                                    <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                </div>
                            </div>
                        </div>


                        {/* Card 2 */}

                        <div className="card-container">

                            <div className="heart">
                                <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                            </div>

                            <div className="card-img">
                                <img src={image1} alt="image1" />
                            </div>
                            <div className="card-content">
                                <div className="tag">
                                    <span className="tagName">{vendor}</span>
                                    <span className="place">Jaipur</span>
                                    <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                </div>
                                <div className="card-name">
                                    <span>Jssmakeuovers</span>
                                </div>
                                <div className="price">
                                    <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                </div>
                            </div>
                        </div>
                        {/* crd 3 */}
                        <div className="card-container">

                            <div className="heart">
                                <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                            </div>

                            <div className="card-img">
                                <img src={image1} alt="image1" />
                            </div>
                            <div className="card-content">
                                <div className="tag">
                                    <span className="tagName">{vendor}</span>
                                    <span className="place">Jaipur</span>
                                    <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                </div>
                                <div className="card-name">
                                    <span>Jssmakeuovers</span>
                                </div>
                                <div className="price">
                                    <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                </div>
                            </div>
                        </div>
                        {/* crd4 */}
                        <div className="card-container">

                            <div className="heart">
                                <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                            </div>

                            <div className="card-img">
                                <img src={image1} alt="image1" />
                            </div>
                            <div className="card-content">
                                <div className="tag">
                                    <span className="tagName">{vendor}</span>
                                    <span className="place">Jaipur</span>
                                    <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                </div>
                                <div className="card-name">
                                    <span>Jssmakeuovers</span>
                                </div>
                                <div className="price">
                                    <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                </div>
                            </div>
                        </div>

                        <div className="row-sec">
                            {/*crd 1  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/*crd 2  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 4 */}


                        </div>

                        <div className="row-sec">
                            {/*crd 1  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/*crd 2  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 4 */}


                        </div>

                        <div className="row-sec">
                            {/*crd 1  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/*crd 2  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 4 */}


                        </div>
                        <div className="row-sec">
                            {/*crd 1  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/*crd 2  */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            {/* crd 3 */}
                            <div className="card-container">

                                <div className="heart">
                                    <svg className="heart-icon" fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                </div>

                                <div className="card-img">
                                    <img src={image1} alt="image1" />
                                </div>
                                <div className="card-content">
                                    <div className="tag">
                                        <span className="tagName">{vendor}</span>
                                        <span className="place">Jaipur</span>
                                        <span className="rating"><svg className="rating-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>4.8</span>
                                    </div>
                                    <div className="card-name">
                                        <span>Jssmakeuovers</span>
                                    </div>
                                    <div className="price">
                                        <span><b>₹15000</b></span> <span className="makeup-name"> / BridalMakeup</span>
                                    </div>
                                </div>
                            </div>
                            


                        </div>

                    </div>
                        <ul className="pg">
                            <li><svg class="pre-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg></li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li><svg class="post-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></li>
                        </ul>
                </div>  
            </div>
        );
    }
}

export default Row;