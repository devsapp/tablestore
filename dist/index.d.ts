import { InputProps } from './common/entity';
export default class ComponentDemo {
    /**
     * demo 实例
     * @param inputs
     * @returns
     */
    test(inputs: InputProps): Promise<{
        hello: string;
    }>;
    createTable(params: any): Promise<any>;
    insertTable(params: any): Promise<any>;
}
