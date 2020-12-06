import React, { useState, useEffect, useRef} from 'react';

export default function ScreenSize() {

    const [windowSize, setWindowSize] = useState( {
        width: window.innerWidth,
        height: window.innerHeight
    } );
    //const [elemHeight, setElemHeight] = useState(0);

    //let [elemRef, setElemenRef] = useState(useRef(null));
    /*
    const setHeight = (outerRef) => {
        setElemenRef(oldRef => outerRef);//elemRef = outerRef;
        setElemHeight(oldHeight => outerRef.current.offsetHeight);
    }

    useEffect(() => {
        const onScroll = (event) => {
            if (elemRef) {
                if (document.scrollingElement.scrollTop <= elemHeight) {
                    //console.log(`Scrolao sam ga preko >= ${elemHeight}`);
                    elemRef.current.classList.add('sticky');
                } else {                    
                    elemRef.current.classList.remove('sticky');
                }
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    });*/

    useEffect(() => {        

        const setSize = () => {
            setWindowSize(oldSize => ({
                width: window.innerWidth,
                height: window.innerHeight
            }));
        }

        window.addEventListener('resize', setSize);

        return () => {
            window.addEventListener('resize', setSize);
        }
    }, []);

    return windowSize;
}