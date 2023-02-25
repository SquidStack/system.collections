
export interface IObserver<V> {
    // Receive update from subject.
    update(eventData?:V): void;
}

export interface ISubject<V> {
    // Attach an observer to the subject.
    subscribe(observer: IObserver<V>): void;

    // Detach an observer from the subject.
    unsubscribe(observer: IObserver<V>): void;

    // Notify all observers about an event.
    publish(value?:V): void;
}

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