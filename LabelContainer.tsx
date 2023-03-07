import React, { FC, PureComponent, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

type LabelContainerProps = ViewProps & {
  renderContent: (value: number) => ReactNode;
};
type LabelContainerState = { value: number };

class LabelContainer extends PureComponent<
  LabelContainerProps,
  LabelContainerState
> {
  state = {
    value: Number.NaN,
  };

  setValue = (value: number) => {
    this.setState({ value });
  };

  render() {
    const { renderContent, ...restProps } = this.props;
    const { value } = this.state;
    return <View {...restProps}>{renderContent(value)}</View>;
  }
}

export default LabelContainer;
