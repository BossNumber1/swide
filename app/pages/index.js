import Head from "next/head";
import React from "react";
import Swiper from "swiper";
import Image from "next/image";

export default function Home() {
    React.useEffect(() => {
        var swiper = new Swiper(".swiper-container", {
            spaceBetween: 30,
            effect: "fade",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }, []);

    return (
        <>
            <Head>
                <title>swiper demo</title>
                <meta name="description" content="swipe demo" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {/* Swiper */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {/* <div> */}
                            <Image
                                src="/one.jpg"
                                alt="pic1"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <Image
                                src="/two.jpg"
                                alt="pic2"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <Image
                                src="/ae.jpg"
                                alt="pic3"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <Image
                                src="/222.jpeg"
                                alt="pic4"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <Image
                                src="/ava.jpg"
                                alt="pic4"
                                width="300px"
                                height="150px"
                            />
                        </div>
                    </div>
                    {/* Add Pagination */}
                    <div className="swiper-pagination swiper-pagination-white"></div>
                    {/* Add Arrows */}
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </div>
            </main>
        </>
    );
}
