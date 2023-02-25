
export class Singleton {

    private static instance:Singleton;
    private state:Map<any,any>;

    private constructor(){
        this.state = new Map();
    }

    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public add<K,V>(key:K,value:V){
        this.state.set(key,value);
        return this;
    }

    public resolve<K,V>(key:K):V{
        return this.state.get(key);
    }
}