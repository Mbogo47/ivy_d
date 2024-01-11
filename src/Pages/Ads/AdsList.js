import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
// import Section from "../../Jobs/JobList2/Section";
import Popular from "./components/Popular";
import Fliter from "./components/Fliter";
import Sidebar from "./components/SideBar";
import Ad from "./components/Ad";
import Pagination from "./components/Pagination";
import HeroSwiper from "./components/HeroSwiper"
import {getAdsAsync, deleteAdsAsync} from '../../store/reducers/ads.reducer'

const AdsList = () => {
  document.title = "Ads List | Petshelpful";
  const dispatch = useDispatch()
  const ads = useSelector(state => state.ads.ads);

  const fetchData = async () => {
    const response = await dispatch(getAdsAsync());
  };
  const deleteAd = async (id) => {
    const response = await dispatch(deleteAdsAsync(id));
  };


  useEffect(()=>{
    fetchData()
  },[])
  return (
    <React.Fragment>
      {/* <Section /> */}
      <HeroSwiper/>
      {/* <section className="section">
        <Container>
          {/* <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                {/* <Fliter /> 
                <Popular ads={ads}/>
                <Ad deleteAd={deleteAd} ads={ads}/>
                <Pagination />
              </div>
            </Col>
            <Sidebar />
          </Row> 
        </Container>
      </section> */}
    </React.Fragment>
  );
};

export default AdsList;
