import { Component } from "react";
import Base64 from "js-base64";
import template from "./Base64Page.rt";

var base64 = Base64.Base64;

class Base64Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
      encode: true
    };
    this.textAreaChange = this.textAreaChange.bind(this);
  }

  changeType() {
    const encode = !this.state.encode;

    this.setState({
      encode: encode,
      output: encode
        ? base64.encode(this.state.output)
        : base64.decode(this.state.output)
    });
  }

  textAreaChange(e) {
      this.setState({
        input: e.target.value,
        output: this.state.encode
        ? base64.encode(e.target.value)
        : base64.decode(e.target.value)
      });
  }

  render() {
    return template.apply(this);
  }
}

export default Base64Page;
