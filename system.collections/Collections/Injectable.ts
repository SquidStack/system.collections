import 'reflect-metadata';

export function Injectable(){
    return function injectionTarget<T extends { new(...args: any[]): {} }>(constructor: T): T | void {
        return class extends constructor {
            constructor(...args: any[]) {
                var providers = Reflect.getOwnMetadata('design:paramtypes',constructor)
                var deps:Array<any> = [];
                providers.forEach((Dependancy:any) => deps.push(new Dependancy()))
                super(...deps);
            }
        }
    }
}