import React from 'react'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <div>
        {children}
      </div>
    </React.Fragment>
  );
}

export default Layout;