import {AbstractError} from './AbstractError';

export class BadRequestError implements AbstractError {
  constructor(public error: string) {
    this.error = 'Bad request error: ' + error;
  }

  getMessage(): string {
    return this.error;
  }
}
