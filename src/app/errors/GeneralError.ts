import {AbstractError} from './AbstractError';

export class GeneralError implements AbstractError{
  constructor(public error: string) { }

  getMessage(): string {
    return this.error;
  }

}
