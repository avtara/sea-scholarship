import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import {
  universityFetchData,
  facultyFetchData
} from "../stores/actions/scholarship";

const FacultySection = (props) => {
  const {
    payloadUniv,
    loadingUniv,
    errUniv,
    payloadFaculty,
    loadingFaculty,
    errFaculty
  } = props;
  console.log(loadingFaculty);
  console.log(loadingUniv);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    const { getUniversity, getFaculty } = props;
    getUniversity();
    getFaculty();
    // eslint-disable-next-line
  }, []);

  console.log(payloadFaculty.data);
  return (
    <div id="faculty-section">
      <div className="title">
        <h1>Partner Universities</h1>
      </div>
      <div className="faculty-content"></div>
      <Slider {...settings}>
        {loadingUniv ? (
          <h1>Loading ...</h1>
        ) : (
          payloadUniv.data.map((univ) => (
            <div key={univ.id} className="university">
              <div className="flex-70">
                <h1 className="title">{univ.univ_name}</h1>
                <ul className="list-faculty">
                  {loadingFaculty ? (
                    <h1>Loading ...</h1>
                  ) : (
                    payloadFaculty.data
                      .filter((faculty) => faculty.univ_id.id === univ.id)
                      .map((fac) => (
                        <li key={fac.id}>
                          <p>{fac.name}</p>
                        </li>
                      ))
                  )}
                  {errFaculty && <h3>{errFaculty.message}</h3>}
                </ul>
              </div>
              <div className="flex-30">
                <div className="wrap-img">
                  <img
                    src={univ.univ_logo}
                    alt={`Logo ${univ.univ_name}`}
                    className="logo-univ"
                  />
                </div>
              </div>
            </div>
          ))
        )}
        {errUniv && <h3>{errUniv.message}</h3>}
      </Slider>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUniversity: () => dispatch(universityFetchData()),
  getFaculty: () => dispatch(facultyFetchData())
});

const mapStateToProps = (state) => {
  return {
    payloadUniv: state.universityPartner.payload,
    loadingUniv: state.universityPartner.loading,
    errUniv: state.universityPartner.error,
    payloadFaculty: state.facultyPartner.payload,
    loadingFaculty: state.facultyPartner.loading,
    errFaculty: state.facultyPartner.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacultySection);
