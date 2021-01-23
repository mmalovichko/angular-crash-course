export class LikeOutputModel {
  constructor(private _likes: number, private _liked: boolean) {
  }
  liked(): boolean {
    return this._liked;
  }
}
