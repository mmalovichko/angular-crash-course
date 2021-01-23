import {AbstractError} from './AbstractError';

export class NotFoundError implements AbstractError{
  constructor(public error: string){
    this.error = 'Not Found Error: ' + error;
  }

  getMessage(): string {
    return this.error;
  }
}
