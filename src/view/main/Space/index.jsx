import Space from './Space';
import { ConfigProvider } from './ConfigProvider';

export default function () {
    return <div>
        <ConfigProvider space={{ size: 20 }}>
            <Space direction="horizontal" key="123">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </Space>
            
        </ConfigProvider>
    </div>
}