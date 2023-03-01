

export class HttpClient{

    private _client:XMLHttpRequest;
    private defaultHeaders:{[key:string]:string}
    constructor(){
        this._client = new XMLHttpRequest();
        this.defaultHeaders = {
            "Content-Type":"application/json"
        }
    }

    public async get<T>(url:string):Promise<T>{
        return new Promise((resolve,reject) => {
            this._client.open("GET",url,true);
            if(this._client.readyState === this._client.DONE){
                if(this._client.status == 0 || (this._client.status >= 200 || this._client.status < 400)){
                    resolve(this._client.response);
                }else{
                    reject({
                        status:this._client.status,
                        reasonPhrase:this._client.responseText
                    })
                }
            }
            this._client.send();
            this.reset();
        })
    }

    public setHeaders(options:{[key:string]:string}):HttpClient{
        if(!options) throw Error("No header passed in");
        if(options && Object.entries(options).length == 0) throw Error("header object defined but was empty")
        this.defaultHeaders = options;
        return this;
    }

    public async post<B,T>(url:string,body:B):Promise<T>{
        return new Promise<T>((resolve,reject) => {

            this._client.open("POST",url,true);

            Object.entries(this.defaultHeaders).forEach(([key,value]) => {
                this._client.setRequestHeader(key,value)
            });
            
            if(this._client.readyState === this._client.DONE){
                if(this._client.status == 0 || (this._client.status >= 200 || this._client.status < 400)){
                    resolve(this._client.response);
                }else{
                    reject({
                        status:this._client.status,
                        reasonPhrase:this._client.responseText
                    })
                }
            }
            this._client.send(JSON.stringify(body));
            this.reset();
        })
    }

    private reset(){
        this._client = new XMLHttpRequest();
    }
}