import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { RefreshControl, StyleSheet, useColorScheme } from 'react-native';
import Animated, { AnimatedScrollViewProps } from 'react-native-reanimated';

import { ThemedView } from '@/shared/components/ThemedView';


export interface ScrollViewProps 
  extends AnimatedScrollViewProps
{
  children: ReactNode
};

export default function ScrollView(props: ScrollViewProps) {
  const {children, ...otherProps} = props;

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView scrollEventThrottle={16} {...otherProps}>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 16,
    overflow: 'hidden',
  },
});
