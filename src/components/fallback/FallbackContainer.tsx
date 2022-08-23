import React from 'react';

type Props = {
  children: React.ReactNode;
};

const FallbakContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid red',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};

export default FallbakContainer;
