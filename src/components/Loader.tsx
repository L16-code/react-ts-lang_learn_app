
import gif from '../assets/Spinner@1x-1.0s-200px-200px.gif';
import { Container, Box } from '@mui/material';

const Loader = () => {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Full viewport height
                }}
            >
                <img src={gif} alt="loading" />
            </Box>
        </Container>
    );
};

export default Loader;
