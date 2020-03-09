import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../images/graduation.jpeg'
import mountain from '../../images/mountains.jpg'
import project from '../../images/Project.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <div style={{ maxWidth: 900, margin: "auto", padding: 15 }}>
            <h2>These are a few things you should know about me.</h2>

            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={8500}>
                <Carousel.Item>
                    <img
                        style={{ borderRadius: 5 }}
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>I have a bachelor's degree in marketing and I recently finished a 9 month web-development program at Lambda School.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ borderRadius: 5 }}
                        className="d-block w-100"
                        src={mountain}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>Having been born and raised in Utah, I have grown to love the outdoors. I enjoy skiing, snowboarding, camping, hiking, backpacking, rock-climbing (mostly bouldering), and many other outdoor activities.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ borderRadius: 5 }}
                        className="d-block w-100"
                        src={project}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>I have a passion for learning and I love working with other people.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;