import { http, HttpResponse } from 'msw';

type AddCommentParams = {
  postId: string;
};

type AddCommentRequestBody = {
  author: User;
  comment: string;
};

type AddCommentResponseBody = {
  commentUrl: string;
};

http.post<AddCommentParams, AddCommentRequestBody, AddCommentResponseBody, '/post/:postId'>(
  '/post/:postId',
  async ({ params, request }) => {
    // Request path parameters are narrowed to the
    // provided "AddCommentParams" type.
    const { postId } = params;

    // The request body JSON is narrowed to the
    // provided "AddCommentRequestBody" type.
    const commentData = await request.json();
    commentData.comment;

    // The JSON response body type must satisfy
    // the "AddCommentResponseBody" type.
    return HttpResponse.json({
      commentUrl: `/post/${postId}?commentId=${cypto.randomUUID()}`,
    });
  },
);
