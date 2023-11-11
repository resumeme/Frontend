import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

export const useHandleFormState = (isDirty: boolean) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showForm, setShowForm] = useState(false);
  const handleCancel = () => {
    if (isDirty) onOpen();
    else setShowForm(false);
  };
  return { isOpen, onClose, showForm, handleCancel, setShowForm };
};
