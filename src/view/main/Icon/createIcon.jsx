import Icon from './Icon'
import { forwardRef } from 'react'

export default function (options) {
    const { content, iconProps = {}, viewBox = '0 0 1024 1024' } = options;

    return forwardRef((props, ref) => {
        return <Icon ref={ref} viewBox={viewBox} {...iconProps} {...props}>
            {content}
        </Icon>
    })
}
