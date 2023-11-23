import CONSTANTS from '~/constants';

export type ErrorMessage = keyof typeof CONSTANTS.ERROR_MESSAGES;

export type ResumeMeErrorResponse = {
  code: ErrorMessage;
  message: string;
};
