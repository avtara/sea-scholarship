import React, { useEffect } from "react";
import { connect } from "react-redux";
import { contentFetchData } from "../stores/actions/scholarship";
import sanitizeHtml from "sanitize-html";

const FaqSection = (props) => {
  const { payload, loading, err } = props;
  useEffect(() => {
    const { getContent } = props;
    getContent();
    // eslint-disable-next-line
  }, []);
  return (
    <section id="faq">
      <div className="title">
        <h1>FAQ</h1>
      </div>
      <div>
        {loading ? (
          <div className="program-content">loading ...</div>
        ) : (
          <div
            className="program-content"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(payload[0].faq_content)
            }}
          />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(FaqSection);
