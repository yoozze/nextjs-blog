import React from 'react';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Image({ alt, src, ...other }: ImageProps): JSX.Element {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${process.env.BASE_PATH}${src}`} alt={alt} {...other} />
    );
}

export default Image;
