import React, { useState } from 'react'
import { Layout } from 'antd';
import SideNenu from '../../components/sandBox/SideNenu'
import TopHeader from '../../components/sandBox/TopHeader'
import ItemRoute from './route/ItemRoute'
import { useParams } from 'react-router-dom'
 
const { Content } = Layout;

export default function NewsSandBox() {
    const [collapsed, setCollapsed] = useState(false);

    const setToggle = collapsed => {
        setCollapsed(collapsed)
    }

    const myUseParams = useParams()['*']
    const myUseParamsParent = myUseParams.split('/')[0]
    const dom = myUseParamsParent !== 'home'? <SideNenu collapsed={collapsed} />: <SideNenu collapsed={collapsed} />

    return (
        <Layout>
            {/* <TopHeader collapsed={collapsed} setToggle={setToggle}  /> */}
            <Layout className="site-layout">
            
                <SideNenu collapsed={collapsed} />

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow: 'auto'
                    }}>
                    
                    <ItemRoute />

                </Content>
                
            </Layout>
            

        </Layout>
    )
}
