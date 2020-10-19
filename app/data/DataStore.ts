import { BodyLinkData } from './models/BodyLinkData';
import { HeaderLinkData } from './models/HeaderLinkData';

/* eslint-disable no-underscore-dangle */
const Datastore = require('nedb-promises');

const dbPath = `${process.cwd()}/shorty.db`;

class ShortyStore {
  db: any;

  constructor() {
    this.db = Datastore.create({
      filename: dbPath,
      timestampData: true,
    });
  }

  read(_id: any) {
    return this.db.findOne({ _id }).exec();
  }

  readAll() {
    return this.db.find();
  }

  handleResponse = (err: any, docs: any) => {
    if (err) {
      console.log(err);
      return err;
    }
    return docs;
  };

  //  --------------------------------------------------------------------------
  //  Header
  //  --------------------------------------------------------------------------

  readAllHeader() {
    return this.db.find({ type: 'header' }, this.handleResponse);
  }

  updateHeaderLinks = (headerLinks: HeaderLinkData[]) => {
    headerLinks.map(async (each) => {
      return this.db.update({ _id: each._id }, each, {}, this.handleResponse);
    });
  };

  //  --------------------------------------------------------------------------
  //  Body
  //  --------------------------------------------------------------------------

  readAllBody() {
    return this.db.find({ type: 'body' }, this.handleResponse);
  }

  updateBodyLink = (bodyLink: BodyLinkData) => {
    return this.db.update(
      { _id: bodyLink._id },
      bodyLink,
      {},
      this.handleResponse
    );
  };

  deleteBodyLink = (id: string) => {
    this.db.remove({ _id: id }, {}, this.handleResponse);
  };

  moveUpBodyLink = (bodyLink: BodyLinkData) => {
    this.db.update(
      { type: 'body' },
      { $inc: { order: +1 } },
      { multi: true },
      this.handleResponse
    );
    this.db.update(
      { _id: bodyLink._id },
      { $set: { order: 0 } },
      {},
      this.handleResponse
    );
  };

  deleteAll() {
    // return this.db.deleteAll();
    this.db.remove({}, { multi: true }, (err: any, numRemoved: number) => {
      console.log(`deleted: ${numRemoved}`);
      console.log(err);
    });
  }
}

module.exports = new ShortyStore();
