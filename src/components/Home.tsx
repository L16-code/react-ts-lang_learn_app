import { Button, Container, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../redux/store"

const languages=[
    {
        name:"Japanese",
        code:"ja"
    },
    {
        name:"Hindi",
        code:"hi"
    },
    {
        name:"Spanish",
        code:"es"
    },
    {
        name:"France",
        code:"fr"
    },
]
const Home = () => {
    const isAuthenticated=useSelector((state:RootState) => state.root.isAuthenticated)
    const navigate=useNavigate()
    const langusgeSelectorHandler=(language:string):void=>{
        if(isAuthenticated){
            navigate(`/learn?language=${language}`)
        }else{
            navigate("/login")
        }

        // navigate("/learn",{
        //     state:{
        //         language
        //     }
        // })
    }
    if (!isAuthenticated) {
        return (
            <Container maxWidth={"sm"}>
                <Typography variant="h4" p={"2rem"} textAlign={"center"} color="error">
                    You must be logged in to access this page.
                </Typography>
            </Container>
        );
    }
    return <Container maxWidth={"sm"}>
        <Typography variant="h3" p={"2rem"} textAlign={"center"}> Wellcome , Begin Your Journey Of Learning</Typography>
        <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
        >
            {languages.map((item)=>(
                <Button onClick={()=>langusgeSelectorHandler(item.code)} key={item.code} variant="contained"> {item.name}</Button>
            ))}
        </Stack>
        <Typography textAlign={"center"}> Choose Any Lang From Above </Typography>
    </Container>
}

export default Home