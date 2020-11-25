import React, { useEffect } from "react";
import { connect } from "react-redux";
import { contentFetchData } from "../stores/actions/scholarship";

const RoadMap = (props) => {
  const { payload, loading, err } = props;
  useEffect(() => {
    const { getContent } = props;
    getContent();
  }, []); // eslint-disable-next-line
  return (
    <div id="roadmap">
      <div className="title">
        <h1>Timeline Scholarship</h1>
      </div>
      <div class="timeline">
        <ol>
          <li>
            {loading ? (
              <div className="title">loading ...</div>
            ) : (
              <div>
                <h3 className="title">Registration</h3>
                <br />
                {payload[0].date_regis}
              </div>
            )}
          </li>
          <li>
            {loading ? (
              <div className="title">loading ...</div>
            ) : (
              <div>
                <h3 className="title">Essay and CV Screening</h3>
                <br />
                {payload[0].date_esay_cvscreen}
              </div>
            )}
          </li>
          <li>
            {loading ? (
              <div className="title">loading ...</div>
            ) : (
              <div>
                <h3 className="title">On-campus Interview</h3>
                <br />
                {payload[0].date_interview}
              </div>
            )}
          </li>
          <li>
            {loading ? (
              <div className="title">loading ...</div>
            ) : (
              <div>
                <h3 className="title">Announcement of Selected Scholars</h3>
                <br />
                {payload[0].date_announce}
              </div>
            )}
          </li>
        </ol>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getContent: () => dispatch(contentFetchData())
});

const mapStateToProps = (state) => {
  return {
    payload: state.contentWebsite.payload,
    loading: state.contentWebsite.loading,
    err: state.contentWebsite.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoadMap);
