import React from 'react';
import topView from 'react-native-top-view';
import AlertContainer from './AlertContainer';

export default function a(
  title: React.ReactNode,
  content: React.ReactNode,
  actions = [{ text: '确定' }],
) {
  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <AlertContainer
      title={title}
      content={content}
      actions={actions}
      onAnimationEnd={onAnimationEnd}
    />,
  );
}
