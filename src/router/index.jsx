import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import LayoutBox from '../view/layout/index'

export const IndexRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='*' element={<LayoutBox />} />
            </Routes>
        </HashRouter>
    )
}