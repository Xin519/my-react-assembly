import { PropsWithChildren, forwardRef } from 'react'

const getSize = size => {
    if (Array.isArray(size) && size.length === 2) {
        return size
    }

    const width = (size) || '1em';
    const height = (size) || '1em';

    return [width, height];
}

const Icon = forwardRef((props, ref) => {

    const {
        style,
        className,
        spin,
        size = '1em',
        children,
        ...rest
    } = props;

    const [width, height] = getSize(size);

    return (
        <svg ref={ref} style={style} width={width} height={height} fill="currentColor" {...rest}>
            {children}
        </svg>
    );
})

export default Icon