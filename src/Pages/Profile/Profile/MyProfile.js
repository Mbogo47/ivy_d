import React, {useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./components/LeftSideContent";
import RightSideContent from "./components/RightSideContent";
import Section from "./components/Section";
import { GetUserProfileAsync } from "../../../store/reducers/auth.reducer";

const MyProfile = () => {
  document.title = "My Profile | Petshelpful";
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getProfileDat()
 }, []);

 const getProfileDat = async (event) => {
   setLoading(true);
   try {
     const response = await dispatch(GetUserProfileAsync());
     console.log(response)
     setProfileData(response)
   } catch (error) {
     toast.error(error?.response?.data?.error);
   } finally {
     setLoading(false);
   }
 }
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent profileData={profileData}/>
            <RightSideContent profileData={profileData}/>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
