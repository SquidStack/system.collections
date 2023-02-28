import { IObserver, ISubject } from "../types";



export class Subject<V> implements ISubject<V>{
    
    private observers: IObserver<V>[];

    constructor(){
        this.observers = [];
    }

    subscribe(observer: IObserver<V>): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.warn('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<V>): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject:  Observer does not exist');
        }
        this.observers.splice(observerIndex, 1);
    }

    publish(eventData:V): void {
        for (const observer of this.observers) {
            observer.update(eventData);
        }
    }

}