export interface BodyLinkData {
  _id: string;
  order: number;
  type: string;
  name: string;
  // paths
  docpath: string;
  gitpath: string;
  vspath: string;
  devopspath: string;
  navpath: string;
  webpath: string;

  reloadList: any;
}
