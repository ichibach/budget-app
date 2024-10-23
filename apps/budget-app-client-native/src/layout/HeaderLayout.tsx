import { ThemedView } from "@/shared/components/ThemedView";
import { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';




export interface HeaderLayoutProps 
  extends PropsWithChildren 
{};


export function HeaderLayout (props: HeaderLayoutProps) {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={{ paddingTop: insets.top, ...style.container }}>
      { props.children }
    </ThemedView>
  )
}


const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
});


