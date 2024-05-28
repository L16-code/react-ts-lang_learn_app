import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

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
    const navigate=useNavigate()
    const langusgeSelectorHandler=(language:string):void=>{
        navigate(`/learn?language=${language}`)
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