import React from 'react';
import { ConfigContext } from './ConfigProvider'
import cs from 'classnames'


const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
};

function getNumberSize(size) {
    return typeof size === 'string' ? spaceSize[size] : size || 0;
}

export default function (props) {
    const { space } = React.useContext(ConfigContext);

    const {
        className,
        style,
        children,
        size = space?.size || 'small',
        direction = 'horizontal',
        align,
        split,
        wrap = false,
        ...otherProps
    } = props;



    const otherStyles = {};

    const [horizontalSize, verticalSize] = React.useMemo(
        () =>
            ((Array.isArray(size) ? size : [size, size])).map(item =>
                getNumberSize(item),
            ),
        [size]
    );

    const childNodes = React.Children.toArray(props.children);

    const nodes = childNodes.map((child, i) => {
        const key = child && child.key || `space-item-${i}`;

        return <div key={key}>
            <div className='space-item'>
                {child}
            </div>
            {i < childNodes.length && split && childNodes.length > 1 && (
                <span className={`${className}-split`} style={style} key={`${key} 123`}>
                    {split}
                </span>
            )}
        </div>
    })

    const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;
    const cn = cs(
        'space',
        `space-${direction}`,
        {
            [`space-align-${mergedAlign}`]: mergedAlign,
        },
        className,
    );

    otherStyles.columnGap = horizontalSize;
    otherStyles.rowGap = verticalSize;

    if (wrap) {
        otherStyles.flexWrap = 'wrap';
    }

    return <div
        className={cn}
        style={{
            ...otherStyles,
            ...style
        }}
        {...otherProps}
    >
        {nodes}
    </div>
}