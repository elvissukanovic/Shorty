import { BodyLinkData } from './models/BodyLinkData';

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

  //  --------------------------------------------------------------------------
  //  Header
  //  --------------------------------------------------------------------------

  readAllHeader() {
    return this.db.find({ type: 'header' }, (err: any, docs: any) => {
      if (err) {
        console.log(err);
        return err;
      }
      return docs;
    });
  }
  //  --------------------------------------------------------------------------
  //  Body
  //  --------------------------------------------------------------------------

  readAllBody() {
    return this.db.find({ type: 'body' }, (err: any, docs: any) => {
      if (err) {
        console.log(err);
        return err;
      }
      return docs;
    });
  }

  updateBodyLink = (bodyLink: BodyLinkData) => {
    return this.db.update(
      { _id: bodyLink._id },
      bodyLink,
      {},
      (err: any, docs: any) => {
        if (err) {
          console.log(err);
          return err;
        }
        return docs;
      }
    );
  };

  deleteBodyLink = (id: string) => {
    this.db.remove({ _id: id }, {}, (err: any, docs: any) => {
      if (err) {
        console.log(err);
        return err;
      }
      return docs;
    });
  };

  moveUpBodyLink = (bodyLink: BodyLinkData) => {
    this.db.update(
      { type: 'body' },
      { $inc: { order: +1 } },
      { multi: true },
      (err: any, docs: any) => {
        if (err) {
          console.log(err);
          return err;
        }
        return docs;
      }
    );
    this.db.update(
      { _id: bodyLink._id },
      { $set: { order: 0 } },
      {},
      (err: any, docs: any) => {
        if (err) {
          console.log(err);
          return err;
        }
        return docs;
      }
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
