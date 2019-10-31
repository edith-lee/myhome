import React, { Component } from "react";
import { Button } from "antd";
import { withRouter } from "react-router";
import "./article.less";

class Article extends Component {
  componentDidMount = () => {
    console.log(this.props.match.params.fileId);
  };
  returnPage = () => {
    this.props.history.goBack();
  };
  render() {
    const htmlContent = `<p><span style='color: rgb(255, 0, 0);'><em><strong>1111</strong></em></span></p>`;
    return (
      <div className="articleWrap">
        <div className="articleTitle">title</div>
        <div className="articleTime">2019-10-29</div>
        <div
          className="articleContent"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
        <div className="articleFooterWrap">
          <div className="articleMarkWrap">
            <div className="articleMark">react</div>
            <div className="articleMark">js</div>
          </div>
          <div>
            <Button onClick={this.returnPage}>返回</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Article);
