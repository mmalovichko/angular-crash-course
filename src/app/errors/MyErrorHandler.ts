import {ErrorHandler} from '@angular/core';
import {AbstractError} from './AbstractError';

export class MyErrorHandler implements ErrorHandler {
  handleError(error: AbstractError): void {
    console.log(error);
    console.log('My own error: ' + error.getMessage());
  }
}
