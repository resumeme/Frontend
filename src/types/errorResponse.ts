import CONSTANTS from '~/constants';

export type ResumeMeErrorResponse = {
  code: keyof typeof CONSTANTS.ERROR_MESSAGES;
  message: string;
};
