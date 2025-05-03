import { Route, Routes } from "react-router-dom"
import VideoGrid from "./VideoGrid"
import ShortsGrid from "./ShortsGrid"
import styled from "styled-components"

const PageContents=()=>{
return(
    <PageContentsWrapper>
<Routes>
<Route path="/" element={<VideoGrid/>}/>
<Route path="/shorts" element={<ShortsGrid/>}/>
<Route path="/subscriptions" element={<ShortsGrid/>}/>
<Route path="/feed/you" element={<ShortsGrid/>}/>
</Routes>
    </PageContentsWrapper>

)

}

export default PageContents

const PageContentsWrapper=styled.div`
    
    margin-top: 70px;
  margin-left: 90px;

`