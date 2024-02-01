import React, { useState, useEffect } from 'react';
import './PictureScroller.css'; // Importera CSS-filen

const PictureScroller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    //Articles in picture scroller
    const articleData = [
        {
        imgSrc: '/images/gallery/1.jpg',
        text: 'Looking out over Ulvsunda lake.',
        },
        {
        imgSrc: '/images/gallery/2.jpg',
        text: 'Somewhere in Bromma.',
        },
        {
        imgSrc: '/images/gallery/3.jpg',
        text: 'Looking over Bellsta River.',
        },
        {
        imgSrc: '/images/gallery/4.jpg',
        text: 'Hornsbergs strand.',
        },
        {
        imgSrc: '/images/gallery/5.jpg',
        text: 'Some stairs in the hood.',
        }
    ];

    let intervalId;

    //Change picture view interval 
    useEffect(() => {
    if (isPlaying) {
        intervalId = setInterval(() => {
        changeImage(1);
        }, 10000); // Set time
    }

    return () => clearInterval(intervalId);
    }, [isPlaying]);

    const changeImageDirectionPre = (direction) => {
    clearInterval(intervalId);
    changeImage(direction);
    };

    const changeImage = (direction) => {
    const newIndex = currentIndex + direction;
    setCurrentIndex((prevIndex) => {
        if (newIndex < 0) {
        return prevIndex;
        } else if (newIndex >= articleData.length) {
        return prevIndex;
        } else {
        return newIndex;
        }
    });
    };

    const togglePlayStop = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const updateImage = () => {
    articleData.forEach((article, index) => {
        document.querySelector(`.article-${index}`).classList.toggle('hide', index !== currentIndex);
    });
    };

    useEffect(() => {
    updateImage();
    }, [currentIndex]);

    return (
    <section className="picture-scroller">
        
        <div className="picture-scroller__button-container">
            <button
                className="picture-scroller__button-left"
                onClick={() => changeImageDirectionPre(-1)}
            >
                <img src="/images/left-arrow-color.png" alt="Left arrow" />
            </button>
            <button
                className="picture-scroller__button-right"
                onClick={() => changeImageDirectionPre(1)}
            >
                <img src="/images/right-arrow-color.png" alt="Right arrow" />
            </button>
        </div>

        <section className="picture-scroller__article-container">
        {articleData.map((article, index) => (
            <article
            key={index}
            className={`picture-scroller__article article-${index} ${
                index === currentIndex ? '' : 'hide'
            }`}
            >
            <figure className="picture-scroller__article__img-container">
                <img src={article.imgSrc} alt={`Article ${index + 1}`} />
            </figure>
            <p>{article.text}</p>
            </article>
        ))}
        </section>
        <div className="picture-scroller__play-stop-container">
        <button
            className="picture-scroller__button-play"
            onClick={togglePlayStop}
        >
            {isPlaying ? (
            <img src="/images/stop.png" alt="Stop" />
            ) : (
            <img src="/images/play.png" alt="Play" />
            )}
        </button>
        </div>
    </section>
    );
};

export default PictureScroller;
