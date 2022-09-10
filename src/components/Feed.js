import { Box } from "@mui/system";
import Post from "./post";


const Feed = () => {
  return (
    <Box  flex={4} padding={2}> 
    <Post  image={"https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/09/06122437/Disha-Patani.jpg"} name={'Disha Patani'}/>
    <Post  image={"https://im.rediff.com/movies/2019/jul/02movie1.jpg?w=670&h=900"} name={'Shahid Kapoor'}/>
    <Post image={"https://i.pinimg.com/originals/79/a9/bf/79a9bf61677dd2a9271d42a5e2d721d9.jpg"} name={'Rocky Bhai'}/>

    
    
      
    </Box>
  )
}

export default Feed
