import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Container,
    TextField,
    Button,
    Box,
    Typography,
    CssBaseline,
    Avatar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices';
import { useNavigate } from 'react-router-dom';

type DataValue={
    username: string;
    password: string;
}
// Validation schema
const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});
const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data:DataValue)=> {
        console.log(data);
        dispatch(login(data));
        navigate('/')
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Username"
                                autoComplete="username"
                                autoFocus
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ''}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
