import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { FieldValues, UseFormReset } from 'react-hook-form';

export const useHandleFormState = <T extends FieldValues>(
  isDirty: boolean,
  reset: UseFormReset<T>,
) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showForm, setShowForm] = useState(false);

  // Confirm 모달의 작성 취소 확인 버튼 이벤트핸들러
  const handleDeleteForm = () => {
    reset();
    setShowForm(false);
  };

  const handleCancel = () => {
    if (isDirty) {
      onOpen();
    } else {
      setShowForm(false);
    }
  };

  return { isOpen, onClose, showForm, handleCancel, setShowForm, handleDeleteForm };
};
