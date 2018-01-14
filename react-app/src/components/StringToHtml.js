import React from "react";

const StringToHtml = (props) => (
  <p dangerouslySetInnerHTML={{ __html: props.htmlString }} />
);

export default StringToHtml;
