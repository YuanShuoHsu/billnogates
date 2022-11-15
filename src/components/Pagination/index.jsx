import React from 'react'

import { FreeMode, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";

import "./index.scss"

export default function Pagination() {
    return (
        <div className='Pagination'>
            <button className='button'>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
                </svg>
                <span className='text'>首頁</span>
            </button>
            <Swiper
                modules={[FreeMode, A11y]}
                slidesPerView={5}
                spaceBetween={0}
                freeMode={{
                    enabled: true,
                    sticky: true
                }}
                grabCursor={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>1</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>2</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>3</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>4</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>5</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>6</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>7</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>8</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>9</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>10</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>11</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>12</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>13</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>14</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>15</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>16</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>17</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>18</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>19</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>20</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>21</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>22</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>23</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>24</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>25</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>26</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>27</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>28</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>29</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>30</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>31</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>32</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>33</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>34</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>35</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>36</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>37</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>38</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>39</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>40</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>41</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>42</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>43</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>44</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>45</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>46</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>47</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>48</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>49</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>50</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>51</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>52</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>53</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>54</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>55</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>56</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>57</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>58</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>59</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>60</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>61</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>62</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>63</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>64</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>65</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>66</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>67</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>68</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>69</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>70</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>71</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>72</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>73</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>74</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>75</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>76</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>77</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>78</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>79</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className='button'>
                        <span className='text'>80</span>
                    </button>
                </SwiperSlide>
            </Swiper>
            <button className='button'>
                <span className='text'>最後</span>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                </svg>
            </button>
        </div>
    )
}