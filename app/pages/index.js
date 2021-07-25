import Head from "next/head";
import React from "react";
import Swiper from "swiper";
import Image from "next/image";

export default function Home() {
    React.useEffect(() => {
        var swiper = new Swiper(".swiper-container", {
            pagination: {
                el: ".swiper-pagination",
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
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Image
                                src="/one.jpg"
                                alt="pic1"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            <Image
                                src="/two.jpg"
                                alt="pic2"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            <Image
                                src="/ae.jpg"
                                alt="pic3"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            <Image
                                src="/222.jpeg"
                                alt="pic4"
                                width="300px"
                                height="150px"
                            />
                        </div>
                        <div className="swiper-slide">
                            <Image
                                src="/ava.jpg"
                                alt="pic4"
                                width="300px"
                                height="150px"
                            />
                        </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-white" />
                </div>
            </main>
        </>
    );
}
