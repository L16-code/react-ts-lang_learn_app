
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../redux/store"
import { logout } from "../redux/slices"

const styles = {
  margin:"0.5rem",
  textDecoration:"none",
  color:"white"
}
const Header = () => {
  const dispatch =useDispatch();
  // const isAuthenticated = useSelector()
  const isAuthenticated=useSelector((state:RootState) => state.root.isAuthenticated)
  const Logouthandler=()=>{
    dispatch(logout());
  }
  return <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" mr={"auto"} textTransform={"uppercase"}>
        Learning...
      </Typography>
      <Link style={styles} to={"/"}>Home</Link>
      {/* <Link style={styles} to={"/login"}>Login</Link> */}
      {isAuthenticated ?  <Button sx={{
        // backgroundColor:"white"
        color:"white"
      }} onClick={Logouthandler}>Logout</Button>:<Link style={styles} to="/login">Login</Link>}

    </Toolbar>
  </AppBar>
}

export default Header