import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { testimoniFetchData } from "../stores/actions/scholarship";

const TestimoniSection = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { loading, payload } = props;
  useEffect(() => {
    const { getTestimoni } = props;
    getTestimoni();
  }, []);

  return (
    <section id="testimoni-section">
      <div className="flex-container">
        <div className="title">
          <h1>Testimoni</h1>
        </div>
      </div>
      <Slider {...settings}>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          payload.data.map((data) => (
            <div key={data.id} className="testimoni">
              <div className="flex-60">
                <h1 className="title">{data.story}</h1>
                <h3>{data.name}</h3>
              </div>
              <div className="flex-40">
                <div className="wrap-img">
                  <img src={data.image} alt={`Logo`} className="photo" />
                </div>
              </div>
            </div>
          ))
        )}
      </Slider>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTestimoni: () => dispatch(testimoniFetchData())
});

const mapStateToProps = (state) => {
  return {
    payload: state.testimoni.payload,
    loading: state.testimoni.loading,
    err: state.testimoni.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestimoniSection);
