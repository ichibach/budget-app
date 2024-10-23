import { PropsWithChildren } from "react";
import { Modal } from "react-native";



export interface AddWalletModalProps 
  extends PropsWithChildren 
{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AddWalletModal (props: AddWalletModalProps) {
  const { children, isOpen, setIsOpen } = props;


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      {children}
    </Modal>
  )
}