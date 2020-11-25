import React, { useEffect } from "react";
import sanitizeHtml from "sanitize-html";
import { connect } from "react-redux";
import { contentFetchData } from "../stores/actions/scholarship";

const ProgramSection = (props) => {
  const { payload, loading, err } = props;
  useEffect(() => {
    const { getContent } = props;
    getContent();
    // eslint-disable-next-line
  }, []);
  return (
    <section className="program">
      <div className="flex-container">
        <div className="title">
          <h1>Undergraduate Scholarship Program</h1>
        </div>
        {loading ? (
          <div className="program-content">loading ...</div>
        ) : (
          <div className="program-content">{payload[0].program_content}</div>
        )}
        <div className="title">
          <h1>Requirements and Benefit For Student</h1>
        </div>
        <div className="flex-half">
          {loading ? (
            <div className="program-content">loading ...</div>
          ) : (
            <div className="card">
              <div className="card-title">Freshman Program</div>
              <div
                className="card-content"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(payload[0].freshman_program)
                }}
              />
            </div>
          )}
        </div>
        <div className="flex-half">
          {loading ? (
            <div className="program-content">loading ...</div>
          ) : (
            <div className="card">
              <div className="card-title">Senior Program</div>
              <div
                className="card-content"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(payload[0].senior_program)
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgramSection);
