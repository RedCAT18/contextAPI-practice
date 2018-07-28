import React from 'react';

const createUseConsumer = Consumer => mapContextToProps => WrappedComponent => {
  //bring context as props when there's no mapContextToProps
  const defaultMapContextToPtops = context => ({ context });

  function useConsumer(props) {
    return (
      <Consumer>
        {context => {
          //extract values what you want from context
          const contextProps = (mapContextToProps || defaultMapContextToPtops)(
            context
          );
          return <WrappedComponent {...contextProps} {...props} />;
        }}
      </Consumer>
    );
  }
  //set displayName
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'component';
  useConsumer.displayName = `useConsumer(${displayName})`;
  return useConsumer;
};

export default createUseConsumer;
