import { Divider, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { AccordionToggle } from '~/components/atoms/AccordionToggle';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackView } from '~/components/molecules/FeedbackView';
import { FeedbackComment } from '~/types/event/feedback';
import { ReadMentor } from '~/types/mentor';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { FormComponentProps } from '~/types/props/formComponentProps';
import { ReadCategories } from '~/types/resume/categories';
import { getIndexedCommentsObject } from '~/utils/getIndexedCommentsObject';

type CategoryDetailsProps<T extends ReadCategories> = {
  arrayData: T[];
  commentsData: FeedbackComment[];
  snapshotData: T[];
  mentorData: Pick<ReadMentor, 'imageUrl' | 'nickname'>;
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  FormComponent?: React.ComponentType<FormComponentProps<T>>;
  isCurrentUser: boolean;
};

const FeedbackCategoryReflectDetails = <T extends ReadCategories>({
  arrayData,
  commentsData,
  snapshotData,
  mentorData,
  DetailsComponent,
  FormComponent,
  isCurrentUser,
}: CategoryDetailsProps<T>) => {
  const [editTargetIndex, setEditTargetIndex] = useState<number | null>(null);
  const indexedComments = getIndexedCommentsObject(commentsData);
  const indexedDetails = getIndexedDetails(arrayData);
  return (
    <>
      {snapshotData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {snapshotData.map((snapshotItem: T, index: number) => {
            const currentComponentId = snapshotItem.componentId;
            const currentDetail = indexedDetails[snapshotItem.originComponentId!];
            const currentComments: FeedbackComment[] = indexedComments[snapshotItem.componentId];
            const isReflectFeedback = currentComponentId !== currentDetail?.componentId;
            const isOpen = currentComments && !isReflectFeedback;
            return (
              <React.Fragment key={index}>
                {currentDetail && (
                  <>
                    {editTargetIndex === index && FormComponent ? (
                      <FormComponent
                        defaultValues={{
                          ...currentDetail,
                          componentId: undefined,
                          reflectFeedback: undefined,
                          type: undefined,
                          originComponentId: undefined,
                          createdDate: undefined,
                        }}
                        isEdit
                        blockId={currentDetail.componentId}
                        onCancel={() => setEditTargetIndex(null)}
                      />
                    ) : (
                      <Box
                        position={'relative'}
                        role="group"
                      >
                        <DetailsComponent
                          data={currentDetail}
                          onEdit={() => setEditTargetIndex(index)}
                          isCurrentUser={isCurrentUser}
                        />
                      </Box>
                    )}
                  </>
                )}
                {currentComments && (
                  <AccordionToggle
                    text="피드백 코멘트가 달려있어요! (੭˙ ˘ ˙)੭"
                    w={'full'}
                    isOpen={isOpen}
                  >
                    <>
                      {currentComments.map((currentComment) => (
                        <FeedbackView
                          key={currentComment.commentId}
                          commentId={currentComment.commentId}
                          lastModifiedAt={currentComment.lastModifiedAt}
                          content={currentComment.content}
                          mentorData={mentorData}
                        />
                      ))}
                    </>
                    {isReflectFeedback && (
                      <SnapshotSection>
                        <DetailsComponent
                          data={snapshotItem}
                          isCurrentUser={false}
                        />
                      </SnapshotSection>
                    )}
                  </AccordionToggle>
                )}
                {index !== snapshotData.length - 1 && (
                  <Divider
                    my={'3rem'}
                    borderColor={'gray.300'}
                  />
                )}
              </React.Fragment>
            );
          })}
        </BorderBox>
      )}
    </>
  );
};

export default FeedbackCategoryReflectDetails;

const getIndexedDetails = <T extends ReadCategories>(arrayData: T[]) => {
  const indexedDetails: { [blockId: string]: T } = {};
  arrayData.forEach((detailItem) => {
    indexedDetails[detailItem.originComponentId!] = detailItem;
  });
  return indexedDetails;
};

const SnapshotSection = ({ children }: { children: React.ReactNode }) => {
  const BGCOLOR = '#fbfffc';
  return (
    <Box
      mt={'1rem'}
      p={'2rem'}
      bg={BGCOLOR}
      position={'relative'}
      borderTop={'1px solid'}
      borderBottom={'1px solid'}
      borderColor={'gray.300'}
      pt={'3rem'}
    >
      <Box
        position={'absolute'}
        top={-2}
        left={1}
        border={'1px solid'}
        borderColor={'gray.300'}
        borderRadius={'1rem'}
        bg={'gray.100'}
        px={'1rem'}
        py={'0.3rem'}
      >
        <Text
          fontSize={'xs'}
          fontWeight={'bold'}
          color={'gray.800'}
        >
          수정 전
        </Text>
      </Box>
      {children}
    </Box>
  );
};
