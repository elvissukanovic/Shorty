import { BodyLinkData } from './models/BodyLinkData';
import { HeaderLinkData } from './models/HeaderLinkData';

const shortyStore = require('./DataStore');

/* eslint-disable no-debugger */
export default class DataManager {
  static async ResetData() {
    shortyStore.deleteAll();
    DataManager.CreateAllBodyLinks();
    const gg = await shortyStore.readAll();
    console.log(gg);
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
  };

  //  ---------------------------------------------------------------------------------------
  //  Header links
  //  ---------------------------------------------------------------------------------------

  static LoadAllHeaderLinks = async (): Promise<HeaderLinkData[]> => {
    let retData: HeaderLinkData[] = [];
    retData = await shortyStore.readAllBody();
    return retData;
  };

  //  ---------------------------------------------------------------------------------------
  //  Body links
  //  ---------------------------------------------------------------------------------------

  static LoadAllBodyLinks = async (): Promise<BodyLinkData[]> => {
    let retData: BodyLinkData[] = [];
    retData = await shortyStore.readAllBody();
    return retData;
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

  static SaveAllHeaderLinks = () => {
    const oooo = [
      {
        id: 0,
        name: 'GIT',
        path: 'C:\\inetpub',
      },
      {
        id: 1,
        name: 'DOCS',
        path: 'C:\\inetpub',
      },
      {
        id: 2,
        name: 'REMOTES',
        path: 'D:\\_tmp\\shorty ikone',
      },
      {
        id: 3,
        name: 'NAVIS',
        path: 'D:\\_tmp\\prod',
      },
    ];
    localStorage.setItem('shortyHeaderLinks', JSON.stringify(oooo));
  };

  static SaveAllBodyLinks = (allLinks: BodyLinkData[]) => {
    console.log(allLinks);
    localStorage.removeItem('shortyBodyLinks');
    localStorage.setItem('shortyBodyLinks', JSON.stringify(allLinks));
  };
}
