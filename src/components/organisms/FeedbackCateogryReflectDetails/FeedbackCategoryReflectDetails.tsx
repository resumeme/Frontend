import { Divider, Box } from '@chakra-ui/react';
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
  const indexedSnapshots = getIndexedSnapshotObject(snapshotData);
  return (
    <>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => {
            const currentBlockId = data.componentId;
            const currentComments: FeedbackComment[] = indexedComments[currentBlockId];
            const currentSnapshots = indexedSnapshots[data.originComponentId!];
            const isReflectFeedback = data.originComponentId !== data.componentId;
            const isOpen = currentComments && !isReflectFeedback;
            return (
              <React.Fragment key={index}>
                {editTargetIndex === index && FormComponent ? (
                  <FormComponent
                    defaultValues={{
                      ...data,
                      componentId: undefined,
                      reflectFeedback: undefined,
                      type: undefined,
                      originComponentId: undefined,
                      createdDate: undefined,
                    }}
                    isEdit
                    blockId={data.componentId}
                    quitEdit={() => setEditTargetIndex(null)}
                  />
                ) : (
                  <Box
                    position={'relative'}
                    role="group"
                  >
                    <DetailsComponent
                      data={data}
                      onEdit={() => setEditTargetIndex(index)}
                      isCurrentUser={isCurrentUser}
                    />
                  </Box>
                )}
                {currentComments && (
                  <AccordionToggle
                    text="첨삭 코멘트가 달려있어요! (੭˙ ˘ ˙)੭"
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
                    {isReflectFeedback && currentSnapshots && (
                      <DetailsComponent
                        data={currentSnapshots}
                        isCurrentUser={false}
                      />
                    )}
                  </AccordionToggle>
                )}
                {index !== arrayData.length - 1 && (
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

const getIndexedSnapshotObject = <T extends ReadCategories>(snapshotData: T[]) => {
  const indexedSnapshot: { [blockId: string]: T } = {};
  snapshotData.forEach((snapshotBlock) => {
    indexedSnapshot[snapshotBlock.originComponentId!] = snapshotBlock;
  });
  return indexedSnapshot;
};
