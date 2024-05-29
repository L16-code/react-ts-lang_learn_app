import { Container } from '@mui/material'
import gif from '../assets/Spinner@1x-1.0s-200px-200px.gif'
import '../css/Loader.css'
// import { Image } from '@mui/icons-material'
const Loader = () => {
    return <Container className="loader-container">
        <img src={gif} alt="loading" />
    </Container>
}

export default Loader