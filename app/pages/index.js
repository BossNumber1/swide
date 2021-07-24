import Head from "next/head";
import React from "react";
import Swiper from "swiper";

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
                            <img src="https://clck.ru/WNUCT" />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <img src="https://clck.ru/WNUH2" />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <img src="https://clck.ru/WNUJP" />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <img src="https://clck.ru/WNUKN" />
                        </div>
                        <div className="swiper-slide">
                            {/* <div> */}
                            <img src="https://clck.ru/WNUMS" />
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
