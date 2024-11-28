import React, { ComponentType, useState, useEffect } from 'react';

type WithConditionProps = {
  show: boolean;
};

function WithCondition<P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P & WithConditionProps> {
  return function WithLoadingComponent({ show, ...props }: P & WithConditionProps) {
    if (show) {
        return <WrappedComponent {...props as P} />;
    }
    return null
  };
}

export default WithCondition;