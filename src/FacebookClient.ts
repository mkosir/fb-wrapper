import FB from 'fb';

export default class FacebookClient {
  constructor(facebookToken: number, facebookAppID: string, facebookAppSecret: string) {
    FB.options({ version: 'v3.2' });
    FB.setAccessToken(facebookToken);
    FB.extend({ appId: facebookAppID, appSecret: facebookAppSecret });
  }

  //// Methods
  public async postOnWall(msg: string) {
    const res = await FB.api('me/feed', 'post', { message: msg });
    return res;
  }

  public async getInfo() {
    const res = await FB.api('me?fields=id,name');
    return res;
  }

  public async getFeed() {
    const res = await FB.api('me/feed');
    return res;
  }
}
