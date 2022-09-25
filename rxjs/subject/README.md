### Subject
* Normally, we can subscribe the observable and we can not trigger it 
* maybe we want to emit it
* we can do it with **Subject**
* subject is return **new observable**

```ts
const notif = new Subject<IType>();
// we can trigger this by using 'next()'
notif.next({});

```

### Example

```ts
interface INotificationType {
    message:string;
}

class Notification {
    public _notificationSubject = new Subject<INotificationType>();

    public sendSuccessNotification(message:string) {
        _notificationSubject.next({message:message})
    }

}

export const notification = new Notification()

// anyfile.tsx

notification.sendSuccessNotification('message');
```