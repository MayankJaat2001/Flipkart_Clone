import { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide.jsx"
import {styled,Box} from '@mui/material';
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";
import MidSection from "./MidSection";

const Container=styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
const Home=() =>{
    const {products}=  useSelector(state=>state.getProducts);
    console.log(products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <>
        <NavBar/>
        <Container>
        <Banner/> 
        <MidSlide products={products} title="Deal of the Day" timer={true}/>  
        <MidSection/>
        <Slide products={products} title="Discounts for You" timer={false}/>  
        <Slide products={products} title="Suggested Items" timer={false}/>  
        <Slide products={products} title="Top Selection" timer={false}/>  
        <Slide products={products} title="Recommended items" timer={false}/>  
        <Slide products={products} title="Trending Offers" timer={false}/>  
        <Slide products={products} title="Season's Top Picks" timer={false}/>  
        <Slide products={products} title="Top Deals on Accessories" timer={false}/>  
        </Container>
        </>
    )
}
export default Home;