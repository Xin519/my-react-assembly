import Icon from './Icon'
import { forwardRef } from 'react'

const loadedSet = new Set()

export default function (scriptUrl) {
    if (
        typeof scriptUrl === 'string'
        && scriptUrl.length
        && !loadedSet.has(scriptUrl)
    ) {
        const script = document.createElement('script');
        script.setAttribute('src', scriptUrl);
        script.setAttribute('data-namespace', scriptUrl);
        document.body.appendChild(script);

        loadedSet.add(scriptUrl);
    }

    const Iconfont = forwardRef((props, ref) => {
        const {type, ...rest} = props

        return (
            <Icon {...rest} ref={ref}>
                { type ? <use xlinkHref={`#${type}`} /> : null}
            </Icon>
        )
    })

    return Iconfont

}
