import React, { Component } from "react";
import AvatarImg from "./../../utils/image/avatar.jpg";
import Wechat from "./../../utils/image/wechat.png";
import "./contact.less";

export default class Contact extends Component {
  render() {
    return (
      <div className="contactWrap">
        <div className="cardWrap">
          <div className="cardFront">
            <img src={AvatarImg} alt="" />
            <p>Edith</p>
            <p>1996.04</p>
            <p>陕西 · 西安</p>
            <p>一枚前端程序媛</p>
            <p>太原理工大学 软件工程本科</p>
          </div>
          <div className="cardBack">
            <p>wechat</p>
            <img src={Wechat} alt="" />
            <div>
              <p className="Github">
                <span>Email：</span>
                <a href="mailto:Edith_Luckend@163.com" target="_blank">
                  {" "}
                  Edith_Luckend@163.com
                </a>
              </p>
            </div>
            <div>
              <p className="Github">
                <span>Github：</span>
                <a href="https://github.com/edith-lee" target="_blank">
                  {" "}
                  https://github.com/edith-lee
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
