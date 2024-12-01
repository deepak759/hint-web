"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Link from "next/link";
import AppView from "../assets/images/app-view-img.svg";
import Arrow from "../assets/images/arrow.svg";
import DocImg from "../assets/images/doctor-img.svg";
import DocAltHome from "../assets/images/doctor-athome-img.svg";
import PhysiotherapyImg from "../assets/images/physiotherapy-img.svg";
import MedicineImg from "../assets/images/medicine-img.svg";
import PathologyImg from "../assets/images/pathology-img.svg";
import NursingImg from "../assets/images/nursing-img.svg";
import AppImage from "../assets/images/app-img.svg";
import PlayStoreImg from "../assets/images/google-play-store-logo.svg";
import AppStoreImg from "../assets/images/app-store-logo.svg";
import Image1 from "../assets/images/user-pic/akshay-mishra.jpeg";
import Image2 from "../assets/images/user-pic/amar-tiwari.jpeg";
import Image3 from "../assets/images/user-pic/amit-pandey.jpeg";
import Image4 from "../assets/images/user-pic/archana-pandey.jpeg";
import Image5 from "../assets/images/user-pic/arjun-chaudhary.jpeg";
import Image6 from "../assets/images/user-pic/atul-chaudhary.jpeg";
import Image7 from "../assets/images/user-pic/chandra-dev-patel.jpeg";
import Image8 from "../assets/images/user-pic/deepanshu-verma.jpeg";
import Image9 from "../assets/images/user-pic/dhirendra-kumar.jpeg";
import Image10 from "../assets/images/user-pic/geetika-singh.jpeg";
import Image11 from "../assets/images/user-pic/jitendra-sengar.jpeg";
import Image12 from "../assets/images/user-pic/pooja-verma.jpeg";
import Image13 from "../assets/images/user-pic/rishi-nag.jpeg";
import Image14 from "../assets/images/user-pic/sangram-singh.jpeg";
import Image15 from "../assets/images/user-pic/shaurya-yadav.jpeg";
import { GLOBAL_CONSTANTS } from "@/utils/constants/global.constants";
import hintVideo from "../assets/video/hint-video.mp4";

export default function Home() {
  const reviewData = [
    { img: Image1, name: GLOBAL_CONSTANTS.NAME1, review: GLOBAL_CONSTANTS.REVIEW1 },
    { img: Image2, name: GLOBAL_CONSTANTS.NAME2, review: GLOBAL_CONSTANTS.REVIEW2 },
    { img: Image3, name: GLOBAL_CONSTANTS.NAME3, review: GLOBAL_CONSTANTS.REVIEW3 },
    { img: Image4, name: GLOBAL_CONSTANTS.NAME4, review: GLOBAL_CONSTANTS.REVIEW4 },
    { img: Image5, name: GLOBAL_CONSTANTS.NAME5, review: GLOBAL_CONSTANTS.REVIEW5 },
    { img: Image6, name: GLOBAL_CONSTANTS.NAME6, review: GLOBAL_CONSTANTS.REVIEW6 },
    { img: Image7, name: GLOBAL_CONSTANTS.NAME7, review: GLOBAL_CONSTANTS.REVIEW7 },
    { img: Image8, name: GLOBAL_CONSTANTS.NAME8, review: GLOBAL_CONSTANTS.REVIEW8 },
    { img: Image9, name: GLOBAL_CONSTANTS.NAME9, review: GLOBAL_CONSTANTS.REVIEW9 },
    { img: Image10, name: GLOBAL_CONSTANTS.NAME10, review: GLOBAL_CONSTANTS.REVIEW10 },
    { img: Image11, name: GLOBAL_CONSTANTS.NAME11, review: GLOBAL_CONSTANTS.REVIEW11 },
    { img: Image12, name: GLOBAL_CONSTANTS.NAME12, review: GLOBAL_CONSTANTS.REVIEW12 },
    { img: Image13, name: GLOBAL_CONSTANTS.NAME13, review: GLOBAL_CONSTANTS.REVIEW13 },
    { img: Image14, name: GLOBAL_CONSTANTS.NAME14, review: GLOBAL_CONSTANTS.REVIEW14 },
    { img: Image15, name: GLOBAL_CONSTANTS.NAME15, review: GLOBAL_CONSTANTS.REVIEW15 },
  ];
 
  return (
    <div className="container-fluid main-container">
      <div className="row doc-container">
        <div className="col">
          <h1 className="main-heading mb-4">
            Find The Best Doctor Near By You!
          </h1>
          <Link href="/auth" className="btn btn-primary" role="button">
            {GLOBAL_CONSTANTS.GETSTARTED}
            <Image src={Arrow} alt="Arrow" />
          </Link>
        </div>
        <div className="col text-end">
          <Image src={DocImg} alt="doc-image" className="doc-img" />
        </div>
      </div>
      <div className="row video-container pt-4 pb-4">
        <div className="col">
          <Image src={AppView} alt="AppView" />

          <div className="content">{GLOBAL_CONSTANTS.APPVIEWCONTENT}</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="sub-title mt-4 mb-3" id="our-services">
            {GLOBAL_CONSTANTS.OURSERVICES}
          </h2>
        </div>
      </div>
      <div id="our-services" className="row">
        <div className="col">
          <div className="service-main-section">
            <div className="doc-home-section">
              <div className="doc-img-section">
                <Image src={DocAltHome} alt="doctor's home" />
              </div>
              <div className="text-content">
                <h3 className="sub-heading pb-2">
                  {GLOBAL_CONSTANTS.DOCATHOME}
                </h3>
                <p className="content">{GLOBAL_CONSTANTS.DOCATHOMECONTENT}</p>
              </div>
            </div>
            <div className="medicine-section">
              <div className="doc-img-section">
                <Image src={MedicineImg} alt="medicine" />
              </div>
              <div className="text-content">
                <h3 className="sub-heading pb-2">
                  {GLOBAL_CONSTANTS.MEDICINE}
                </h3>
                <p className="content">{GLOBAL_CONSTANTS.MEDICINECONTENT}</p>
              </div>
            </div>
            <div className="pathology-section">
              <div className="doc-img-section">
                <Image src={PathologyImg} alt="Pathology" />
              </div>
              <div className="text-content">
                <h3 className="sub-heading pb-2">
                  {GLOBAL_CONSTANTS.PATHOLOGY}
                </h3>
                <p className="content">{GLOBAL_CONSTANTS.PATHOLOGYCONTENT}</p>
              </div>
            </div>
            <div className="nursing-section">
              <div className="doc-img-section">
                <Image src={NursingImg} alt="nursing" />
              </div>
              <div className="text-content">
                <h3 className="sub-heading pb-2">{GLOBAL_CONSTANTS.NURSING}</h3>
                <p className="content">{GLOBAL_CONSTANTS.NURSINGCONTENT}</p>
              </div>
            </div>
            <div className="physiotherapy-section">
              <div className="doc-img-section">
                <Image src={PhysiotherapyImg} alt="Physiotherapy" />
              </div>
              <div className="text-content">
                <h3 className="sub-heading pb-2">
                  {GLOBAL_CONSTANTS.PHYSIOTHERAPY}
                </h3>
                <p className="content">
                  {GLOBAL_CONSTANTS.PHYSIOTHERAPYCONTENT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-us" className="row">
        <div className="col">
          <h4 className="about-us mb-4">{GLOBAL_CONSTANTS.ABOUTUS_NAVLINKS}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col about-us-section">
          <div className="content">
            <p className="info">{GLOBAL_CONSTANTS.ABOUTUSCONTENT}</p>
          </div>
          <div className="video-section">
            <video width="100%" controls>
              <source src={hintVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4 className="testimonials-us mb-4 mt-5">{GLOBAL_CONSTANTS.TESTIMONIALS}</h4>
        </div>
      </div>
      <div className="row background-carosouel pt-5">
        <div className="col">
          <div className="custom-carosouel">
            <Carousel className="mobile-device">
              {reviewData.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="wrapper-main">
                    <div className="card-wrapper" key={index}>
                      <div className="card-container">
                        <div className="img">
                          <Image src={item.img} alt={item.name} />
                        </div>
                        <div className="name">{item.name}</div>
                        <div className="review">
                          {item.review.length > 200
                            ? item.review.substring(0, 200) + "..."
                            : item.review}
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <Carousel className="desktop-device">
              <Carousel.Item interval={2000}>
                <div className="wrapper-main">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image1} alt={GLOBAL_CONSTANTS.NAME1} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME1}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW1.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW1.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW1}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image2} alt={GLOBAL_CONSTANTS.NAME2} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME2}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW2.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW2.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW2}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image3} alt={GLOBAL_CONSTANTS.NAME3} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME3}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW3.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW3.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW3}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <div className="wrapper-main">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image4} alt={GLOBAL_CONSTANTS.NAME4} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME4}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW4.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW4.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW4}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image5} alt={GLOBAL_CONSTANTS.NAME5} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME5}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW5.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW5.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW5}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image6} alt={GLOBAL_CONSTANTS.NAME6} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME6}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW6.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW6.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW6}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <div className="wrapper-main">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image7} alt={GLOBAL_CONSTANTS.NAME7} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME7}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW7.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW7.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW7}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image8} alt={GLOBAL_CONSTANTS.NAME8} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME8}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW8.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW8.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW8}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image9} alt={GLOBAL_CONSTANTS.NAME9} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME9}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW9.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW9.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW9}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <div className="wrapper-main">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image10} alt={GLOBAL_CONSTANTS.NAME10} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME10}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW10.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW10.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW10}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image11} alt={GLOBAL_CONSTANTS.NAME11} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME11}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW11.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW11.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW11}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image12} alt={GLOBAL_CONSTANTS.NAME12} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME12}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW12.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW12.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW12}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <div className="wrapper-main">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image13} alt={GLOBAL_CONSTANTS.NAME13} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME13}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW13.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW13.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW13}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image14} alt={GLOBAL_CONSTANTS.NAME14} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME14}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW14.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW14.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW14}
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img">
                        <Image src={Image15} alt={GLOBAL_CONSTANTS.NAME15} />
                      </div>
                      <div className="name">{GLOBAL_CONSTANTS.NAME15}</div>
                      <div className="review">
                        {GLOBAL_CONSTANTS.REVIEW15.length > 200
                          ? GLOBAL_CONSTANTS.REVIEW15.substring(0, 200) + "..."
                          : GLOBAL_CONSTANTS.REVIEW15}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div id="hint-us" className="row background-primary-col">
        <div className="col">
          <div className="download-section pad-40 pt-5 pb-5">
            <div className="app-img-section">
              <Image src={AppImage} alt="App image" />
            </div>
            <div className="text-section ps-5">
              <div className="text">{GLOBAL_CONSTANTS.DOWNLOADTEXT}</div>
              <div className="content">{GLOBAL_CONSTANTS.DOCATHOMECONTENT}</div>
              <div className="logo-section">
                <Image src={PlayStoreImg} alt="google-play-store-logo" />
                <Image src={AppStoreImg} alt="app-store-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
