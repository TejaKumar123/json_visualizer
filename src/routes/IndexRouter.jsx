import { Route, Routes } from 'react-router-dom'
import Json from '../pages/Json'

const IndexRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Json />} />
        </Routes>
    )
}

export default IndexRouter