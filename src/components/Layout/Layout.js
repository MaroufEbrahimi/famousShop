import React from "react";

import Wrapper from "../../HOC/Wrapper";

const Layout = (props) => {
  return (
    <Wrapper>
      <main className="content">{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
