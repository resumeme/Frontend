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
  mentorData: ReadMentor;
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
  const commentComponentIds = Object.keys(indexedComments).map((index) => parseInt(index));
  if (!snapshotData) return;
  const indexedSnapshots = getIndexedSnapshotObject(snapshotData);
  return (
    <>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => {
            const currentBlockId = data.componentId;
            const targetComments: FeedbackComment[] = indexedComments[currentBlockId];
            const hasComment = commentComponentIds.includes(currentBlockId);
            const isOpen = hasComment ?? !data.reflectFeedback;
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
                {hasComment && (
                  <AccordionToggle
                    text="첨삭 코멘트가 달려있어요! (੭˙ ˘ ˙)੭"
                    w={'full'}
                    isOpen={isOpen}
                  >
                    <>
                      {targetComments.map((currentComment) => (
                        <FeedbackView
                          key={currentComment.commentId}
                          commentId={currentComment.commentId}
                          lastModifiedAt={currentComment.lastModifiedAt}
                          content={currentComment.content}
                          mentorData={mentorData}
                        />
                      ))}
                    </>
                    {data.reflectFeedback && (
                      <DetailsComponent
                        data={indexedSnapshots[data.componentId]}
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
  snapshotData.forEach((commentItem) => {
    const componentId = commentItem.componentId;
    indexedSnapshot[componentId] = commentItem;
  });
  return indexedSnapshot;
};
