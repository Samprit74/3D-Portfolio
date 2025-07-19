import { animate, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ from, to, text }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            const animation = animate(from, to, {
                duration: 3,  // Fixed typo from "durtion" to "duration"
                ease: "easeOut",
                onUpdate: (value) => {
                    setCount(Math.floor(value));
                }
            });

            return () => animation.stop();
        }
    }, [isInView, from, to]);

    return (
        <div className="counter" ref={ref}>
            <h1>{count}+</h1>  {/* Changed from {to}+ to {count}+ to show animation */}
            <p>{text}</p>
        </div>
    );
};

export default Counter;