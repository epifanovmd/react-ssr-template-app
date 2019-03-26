/*tslint:disable*/
import {BaseRequest} from "./BaseRequest";
import {Users} from "./dto/Users.g";

export class UsersApiRequest extends BaseRequest {
  constructor(protected baseurl: string) {
    super(baseurl);
  }

  get(config?: Object): Promise<Users[]> {
    return this.fetch(
      `/users`,
      Object.assign({
        method : "GET"
      }, config))
      .then((response) => response.json())
      .catch(BaseRequest.handleError);
  }
}