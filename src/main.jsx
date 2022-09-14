import React from 'react'
import ReactDOM from 'react-dom/client'
import {IndexRouter} from './router/index'
import './index.css'
import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>
)
