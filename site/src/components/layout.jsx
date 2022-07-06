import * as React from 'react';

function Layout(props) {
  return (
    <main className="container mx-auto">
      {props.children}
    </main>
  );
}

export default Layout;
