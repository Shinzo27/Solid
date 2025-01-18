export interface INotification {
    sendNotification(message: string): void;
}

export class EmailNotification implements INotification {
    sendNotification(message: string): void {
        console.log("Sending email notification...");
        console.log(message);
    }
}   

export class SMSNotification implements INotification {
    sendNotification(message: string): void {
        console.log("Sending SMS notification...");
        console.log(message);
    }
}

export class PushNotification implements INotification {
    sendNotification(message: string): void {
        console.log("Sending push notification...");
        console.log(message);
    }
}