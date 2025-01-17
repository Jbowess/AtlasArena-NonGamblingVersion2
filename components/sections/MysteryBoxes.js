import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { useState } from "react"
import BidModal from '../elements/BidModal'
const currentTime = new Date()
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import LootBoxOne from '../../pages/lootbox1'
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 26.7,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        clickable: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1300: {
            slidesPerView: 3
        },
        1500: {
            slidesPerView: 4
        }
    }
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
}

export default function MysteryBoxes({}) {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    
    const [showLootBoxOne, setShowLootBoxOne] = useState(false)
    const handleLootBoxOne = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        setShowLootBoxOne(true); // Updated function name
        console.log("form clicked");
    };
    const handleCloseLootBoxOne = () => {
        setShowLootBoxOne(false); // Updated function name
    };



    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isBidModal2, setBidModal2] = useState(false)
    const handleBidModal2 = () => setBidModal2(!isBidModal)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">
                    
                        <div className="themesflat-container">

                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                  </div>
                                    <div className="relative">
                                        <Swiper {...swiperOptions2} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/box (1).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/box (2).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/box (3).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/box (5).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                                </div>
                                </div>

                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Popular Loot Boxes</h2>
                    </div>


                    <div className="widget-tabs relative mb-40">
                        <div className="tf-soft">
                            <div className="soft-right">
                                <Menu as="div" className="dropdown">
                                    <Menu.Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton4" aria-haspopup="true" aria-expanded="false">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Price: High to Low</span>
                                    </Menu.Button>
                                    <Menu.Items as="div" className="dropdown-menu d-block" aria-labelledby="dropdownMenuButton">
                                        <h6>Sort by</h6>
                                        <Link href="#" className="dropdown-item">
                                            <div className="sort-filter" href="#">
                                                <span>Price: Low to High</span>
                                                <span className="icon-tick"><span className="path2" /></span>
                                            </div>
                                        </Link>
                                        <Link href="#" className="dropdown-item">
                                            <div className="sort-filter active" href="#">
                                                <span>Price: High to Low</span>
                                                <span className="icon-tick"><span className="path2" /></span>
                                            </div>
                                        </Link>
                                    </Menu.Items>
                                </Menu>
                            </div>
                        </div>
                        <ul className="widget-menu-tab">
                            <li className={activeIndex === 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                <span className="inner">Most Popular</span>
                            </li>
                            <li className={activeIndex === 2 ? "item-title active" : "item-title"} onClick={() => handleOnClick(2)}>
                                <span className="inner">Recently Added</span>
                            </li>
                            <li className={activeIndex === 3 ? "item-title active" : "item-title"} onClick={() => handleOnClick(3)}>
                                <span className="inner">Featured</span>
                            </li>
                        </ul>

                        <div className="widget-content-tab">
                            <div className="market-header flex items-center justify-between">
                                <div className="widget-search">
                                    <input type="search" id="search" className="search-field style-1" placeholder="Search Loot Boxes..." name="s" title="Search for" required />
                                </div>
                            </div>
                            <div className="widget-content-inner" style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}>
                                <div className="wrap-box-card">
                                <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <Link href="#">
                                                    <img src="assets/images/box-item/box (4).png" alt="" />
                                                </Link>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="featured-countdown">
                                                    <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span></div></span>
                                                </div>
                                                <div className="button-place-bid">
                                                    <a onClick={handleLootBoxOne} href="#" className="tf-button"><span>Open Box</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><Link href="#">Designer Box</Link></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar (1).png" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><Link href="author-2.html">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Price</span>
                                                <h6 className="price gem"><i className="icon-gem" />120</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="side-bar">
                    <div className="widget widget-recently">
                        <h5 className="title-widget">Largest Purchases</h5>
                        <div className="card-small-main">
                            <img src="assets/images/box-item/box (11).png" alt="" />
                            <div className="card-bottom">
                                <h5><Link href="#">Gucci Box</Link></h5>
                                <span className="date">16hr ago</span>
                            </div>
                        </div>
                     
                    </div>


                    <div className="widget widget-history">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Live Purchases</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (9).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Pokemon Box</Link></h6>
                                    <span><Link href="#">$300</Link></span>
                                </div>
                            </div>
                            <span className="time">Just now</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (10).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Apple Box</Link></h6>
                                    <span><Link href="#">$200</Link></span>
                                </div>
                            </div>
                            <span className="time">1hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (4).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Designer Box</Link></h6>
                                    <span><Link href="#">$150</Link></span>
                                </div>
                            </div>
                            <span className="time">2hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (11).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Gucci Box</Link></h6>
                                    <span><Link href="#">$300</Link></span>
                                </div>
                            </div>
                            <span className="time">4hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (6).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Supreme Box</Link></h6>
                                    <span><Link href="#">@100</Link></span>
                                </div>
                            </div>
                            <span className="time">16hr ago</span>
                        </div>
                    </div>


                    <div className="widget widget-creators">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Top Champions</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">1. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (1).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Michael Burns</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">2. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar (5).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">3. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (4).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Rhys James</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">4. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (3).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Ash Roggins</Link></h6>
                                    <span><Link href="#"></Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="order">5. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (2).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Tom Sons</Link></h6>
                                    <span><Link href="#"></Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showLootBoxOne && (
                <>
                    {console.log('Rendering LootBoxOne')}
                    <LootBoxOne onClose={handleCloseLootBoxOne} />
                </>
            )}
            
        </>
    )    

}
