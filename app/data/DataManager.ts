import { BodyLinkData } from './models/BodyLinkData';
import { HeaderLinkData } from './models/HeaderLinkData';

const shortyStore = require('./DataStore');

/* eslint-disable no-debugger */
export default class DataManager {
  static async ResetData() {
    /*
    shortyStore.deleteAll();
    DataManager.CreateAllHeaderLinks();
    DataManager.CreateAllBodyLinks();
    const gg = await shortyStore.readAll();
    console.log(gg);
  */
  }

  static CreateAllBodyLinks = async () => {
    const oooo = [
      {
        order: 0,
        type: 'body',
        company: 'ADRIAPLIN',
        docpath: 'D:\\_tmp\\shorty ikone',
        gitpath: 'D:\\_tmp\\shorty ikone',
        vspath: 'D:\\_tmp\\shorty ikone',
        devopspath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        navpath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        webpath: 'www.google.com',
      },
      {
        order: 1,
        type: 'body',
        company: 'E 3',
        docpath: 'D:\\_tmp\\shorty ikone',
        gitpath: 'D:\\_tmp\\shorty ikone',
        vspath: 'D:\\_tmp\\shorty ikone',
        devopspath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        navpath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        webpath: 'www.google.com',
      },
      {
        order: 2,
        type: 'body',
        company: 'Business Solutions d.o.o.',
        docpath: 'D:\\_tmp\\shorty ikone',
        gitpath: 'D:\\_tmp\\shorty ikone',
        vspath: 'D:\\_tmp\\shorty ikone',
        devopspath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        navpath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        webpath: 'www.google.com',
      },
      {
        order: 3,
        type: 'body',
        company: 'AFIT',
        docpath: 'D:\\_tmp\\shorty ikone',
        gitpath: 'D:\\_tmp\\shorty ikone',
        vspath: 'D:\\_tmp\\shorty ikone',
        devopspath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        navpath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        webpath: 'www.google.com',
      },
      {
        order: 4,
        type: 'body',
        company: 'GEOPLIN',
        docpath: 'D:\\_tmp\\shorty ikone',
        gitpath: 'D:\\_tmp\\shorty ikone',
        vspath: 'D:\\_tmp\\shorty ikone',
        devopspath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        navpath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        webpath: 'www.google.com',
      },
      {
        order: 5,
        type: 'body',
        company: 'ASUS',
        docpath: 'D:\\_tmp\\shorty ikone',
        gitpath: 'D:\\_tmp\\shorty ikone',
        vspath: 'D:\\_tmp\\shorty ikone',
        devopspath: 'C:\\_GIT\\SimplePublisher\\SimplePublisher.sln',
        webpath: 'www.google.com',
      },
    ];
    oooo.forEach((each) => {
      shortyStore.db.insert(each);
    });
    return DataManager.LoadAllBodyLinks();
  };

  static CreateAllHeaderLinks = async () => {
    const tmp = [
      {
        type: 'header',
        name: 'GIT',
        path: '',
      },
      {
        type: 'header',
        name: 'DOCS',
        path: '',
      },
      {
        type: 'header',
        name: 'NAVIS',
        path: '',
      },
      {
        type: 'header',
        name: 'REMOTES',
        path: '',
      },
    ];
    tmp.forEach((each) => {
      shortyStore.db.insert(each);
    });
    return DataManager.LoadAllHeaderLinks();
  };

  //  ---------------------------------------------------------------------------------------
  //  Header links
  //  ---------------------------------------------------------------------------------------

  static LoadAllHeaderLinks = async (): Promise<HeaderLinkData[]> => {
    let retData: HeaderLinkData[] = [];
    retData = await shortyStore.readAllHeader();
    return retData;
  };

  static UpdateHeaderLinks = (headerLinks: HeaderLinkData[]) => {
    shortyStore.updateHeaderLinks(headerLinks);
  };

  //  ---------------------------------------------------------------------------------------
  //  Body links
  //  ---------------------------------------------------------------------------------------

  static LoadAllBodyLinks = async (): Promise<BodyLinkData[]> => {
    let retData: BodyLinkData[] = [];
    retData = await shortyStore.readAllBody();
    return retData;
  };

  static CreateBodyLink = (bodyLink: BodyLinkData) => {
    shortyStore.createBodyLink(bodyLink);
  };

  static UpdateBodyLink = (bodyLink: BodyLinkData) => {
    shortyStore.updateBodyLink(bodyLink);
  };

  static DeleteBodyLink = (bodyLinkId: string) => {
    return shortyStore.deleteBodyLink(bodyLinkId);
  };

  static MoveUpBodyLink = (bodyLink: BodyLinkData) => {
    shortyStore.moveUpBodyLink(bodyLink);
  };

  static CreateEmptyBodyLink = (): BodyLinkData => {
    const tmp: BodyLinkData = {} as BodyLinkData;
    tmp.type = 'body';
    tmp.order = 0;
    tmp.name = '';
    tmp.docpath = '';
    tmp.gitpath = '';
    tmp.vspath = '';
    tmp.devopspath = '';
    tmp.navpath = '';
    tmp.webpath = '';
    return tmp;
  };
}
