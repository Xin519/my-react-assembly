import React, {useState, useEffect} from 'react'

function Checkbox({checked, disabled, onChange, children}) {
    const [usechecked, setusechecked] = useState(checked === true)

    // useEffect(() => {
    //     onChange()
    // }, [usechecked]);

    const change = e => {
        setusechecked(!usechecked)
        onChange(e)
    }

  return (
    <div>
        <label className={usechecked?'ant-checkbox-wrapper ant-checkbox-wrapper-checked': 'ant-checkbox-wrapper'}>
            <span className={usechecked? 'ant-checkbox ant-checkbox-checked': 'ant-checkbox'}>
                <input className='ant-checkbox-input' type='checkbox' value checked={usechecked} disabled={disabled === true} onChange={change} />
                <span className='ant-checkbox-inner'></span>
            </span>
            {children !== undefined && <span>{children}</span>}
        </label>
    </div>
  )
}

Checkbox.Group = function() {
    return (
        <div></div>
    )
}

export default Checkbox
