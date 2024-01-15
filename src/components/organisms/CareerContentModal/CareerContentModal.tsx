import { Text } from '@chakra-ui/react';
import { Modal } from '../../molecules/Modal';

const CareerContentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={'lg'}
    >
      <Text whiteSpace={'pre-line'}>
        {`현) ▵▵▵ 시니어 풀스택 개발자 재직 중
          전) ◻◻◻ 프론트엔드 개발자 5년 근무
          전) ⎔⎔⎔ 인턴 프론트엔드 개발자 2년 근무`}
      </Text>
    </Modal>
  );
};

export default CareerContentModal;
