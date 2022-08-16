import React from 'react'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom';

export default function ProductBox({ arrs = [] }) {
    const navigate = useNavigate();
    const approvalFn = e => navigate('/approval/list', { state: e })

    return arrs.map((i, index) => (
        <div className="product-i cc" data-product="idoc" key={index} onClick={() => approvalFn(i)}>
            <div className="head-img">
                <Image src={`/src/image/${index + 1}.png`} />
            </div>
            <div className="con-box">
                <div className="title-h2">
                    <span>{i}</span>
                </div>
            </div>
        </div>
    ))


}
