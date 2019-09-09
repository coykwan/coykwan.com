import Head from "next/head";

import Header from "./Header";

import "./Layout.scss";
import "./index.scss";

const Layout = props => {
  const appTitle = `> Coy Kwan`;

  return (
    <div className="Layout">
      <Head>
        <title>Coy Kwan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Layout;