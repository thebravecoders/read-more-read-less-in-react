import './read-more-read-less.css';
import { useState, useRef, useEffect } from 'react';

const ReadMoreReadLess = (props) => {

    const { readMoreString, readLessString, defaultState, children } = props;

    const containerRef = useRef(), containerHeight = useRef();

    const [isReadMore, setReadMore] = useState(true);

    useEffect(() => {

        const height = containerRef.current.scrollHeight;
        containerHeight.current = height;
        setReadMore(false)

    }, [])


    useEffect(() => {

        const setHeightHandler = () => {
            const height = containerRef.current.scrollHeight;
            if (height) {
                containerHeight.current = height;
                console.log(containerHeight.current)
            }
        }

        window.addEventListener('resize', setHeightHandler)

        return () => window.removeEventListener('resize', setHeightHandler)

    }, [])


    const btnReadMoreText = readMoreString || "Read More."
    const btnReadLessText = readLessString || "Read Less."



    const toggleReadMoreReadLess = () => {
        setReadMore(prevState => !prevState)
    }

    return (
        <div>
            <div className="read-more-read-less" ref={containerRef} style={{ height: isReadMore ? containerHeight.current : 0 }}>
                {isReadMore && children}
            </div>
            <button className="read-more-read-less-btn" onClick={toggleReadMoreReadLess}>
                {isReadMore ? btnReadLessText : btnReadMoreText}
            </button>
        </div>
    )

}


export default ReadMoreReadLess;