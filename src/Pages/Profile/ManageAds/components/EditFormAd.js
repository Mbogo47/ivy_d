// EditAdForm.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "./EditAd.js"; // Import your EditForm component
import { getAdsAsync } from "../../../../store/reducers/ads.reducer";

const EditAdFormWrapper = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ads.ads);

  useEffect(() => {
    // Fetch the ads if not already available
    if (ads.length === 0) {
      dispatch(getAdsAsync());
    }
  }, [dispatch, ads]);

  // Find the selected ad based on the id
  const selectedAd = ads.find((ad) => ad.id === parseInt(id, 10));

  return (
    <div>
      {selectedAd && <EditForm modal petAd={selectedAd} />}
      {/* Render the EditForm with the selectedAd data */}
    </div>
  );
};

export default EditAdFormWrapper;
