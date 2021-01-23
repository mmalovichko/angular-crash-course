import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {NotFoundError} from '../../errors/NotFoundError';
import {BadRequestError} from '../../errors/BadRequestError';
import {GeneralError} from '../../errors/GeneralError';


export abstract class DataService<T> {

  protected constructor(private http: HttpClient, private _url: string) {
  }

  get<T>() {
    return this.http.get<T>(this._url)
      .pipe(
        catchError(err => {
          throw this.handleError(err);
        })
      );
  }

  update(body) {
    return this.http.post(this._url, body)
      .pipe(
        catchError(err => {
          throw this.handleError(err);
        })
      );
  }

  delete(id) {
    return this.http.delete<T>(`${this._url}${id}`)
      .pipe(
        catchError(err => {
          throw this.handleError(err);
        })
      );
  }

  private handleError(err) {
    console.log(err);

    if (err.status === 404) {
      throw new NotFoundError(err.message);//should be throwError()

    } else if (err.status === 400) {
      throw new BadRequestError(err.message);
    }

    throw new GeneralError(err.message);
  }
}
