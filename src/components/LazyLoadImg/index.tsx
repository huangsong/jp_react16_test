import React, { FunctionComponent, ReactElement, useRef, useEffect, useState } from 'react';
import { CSSProperties, ImgHTMLAttributes } from 'react';


import LoadingImg from './loading';

interface LazyLoadPropsType {
    loadingImg?: string;
    src: string;
    errorImg?: string;
    style?: CSSProperties;
    imgOptions?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;
    options?: IntersectionObserver;
}

// IntersectionObserver polyfill
require('intersection-observer');

const LazyLoadImg: FunctionComponent<LazyLoadPropsType> = ({ src, loadingImg, errorImg, style, options = {}, imgOptions = {} }): ReactElement => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [imgURL, setImgURL] = useState(loadingImg || LoadingImg);

    useEffect(() => {
        const imgObj = imgRef.current;

        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                if (item.isIntersecting) {
                    setImgURL(src);

                    imgObj!.onload = () => {
                        intersectionObserver.unobserve(item.target);
                    };

                    imgObj!.onerror = () => {
                        setImgURL(errorImg || '');
                    };
                }
            });
        }, options);

        intersectionObserver.observe(imgObj!);

        return () => {
            intersectionObserver.unobserve(imgObj!);
        };
    }, [errorImg, options, src]);

    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                ...style,
            }}
        >
            <img src={imgURL} alt="" {...imgOptions} ref={imgRef} style={{ width: '100%', height: '100%', cursor: 'pointer' }} />
        </div>
    );
};

export default LazyLoadImg;