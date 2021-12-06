const TableStore = require('tablestore');
import logger from './common/logger';
import { InputProps } from './common/entity';
const SAT = require('./sat');

export default class ComponentDemo {
  /**
   * demo 实例
   * @param inputs
   * @returns
   */
  public async test(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs.props)}`);
    logger.info('command test');
    return { hello: 'world' };
  }

  public async createTable(params) {
    const { props, credentials, argsObj } = params;
    let endpoint = '';
    let instancename = '';
    argsObj.forEach((key, i) => {
      if (key === 'instance') {
        instancename = argsObj[i + 1];
      };
      if (key === 'endpoint') {
        endpoint = argsObj[i + 1];
      }
    })
    const { AccessKeyID, AccessKeySecret } = credentials;
    const tableClient = new TableStore.Client({
      accessKeyId: AccessKeyID,
      accessKeySecret: AccessKeySecret,
      endpoint,
      instancename,
    });
    return await tableClient.createTable(props);
  }

  public async insertTable(params) {
    const { props, credentials, argsObj } = params;
    let endpoint = '';
    let instancename = '';
    let tablename = '';
    let primaryKey = '';
    let primaryValue = '';
    argsObj.forEach((key, i) => {
      if (key === 'instance') {
        instancename = argsObj[i + 1];
      };
      if (key === 'endpoint') {
        endpoint = argsObj[i + 1];
      }
      if (key === 'tablename') {
        tablename = argsObj[i + 1];
      }
      if (key === 'primaryKey') {
        primaryKey = argsObj[i + 1];
      }
      if (key === 'primaryValue') {
        primaryValue = argsObj[i + 1];
      }
    });
    const { AccessKeyID, AccessKeySecret } = credentials;
    SAT.init(endpoint, instancename, AccessKeyID, AccessKeySecret);

    return await SAT.table(tablename, [primaryKey]).put([parseInt(primaryValue)], props, 'I'); //注册用户
  }

}
