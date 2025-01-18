import { EmailNotification, INotification, PushNotification, SMSNotification } from "./NotificationService";

class Notification {
    private notification: INotification;

    constructor(notification: INotification){
        this.notification = notification;
    }

    sendNotification(message: string){
        this.notification.sendNotification(message);
    }
}

const emailNotification = new Notification(new EmailNotification());
emailNotification.sendNotification("Hello, world!");
const smsNotification = new Notification(new SMSNotification());
smsNotification.sendNotification("Hello, world!");
const pushNotification = new Notification(new PushNotification());
pushNotification.sendNotification("Hello, world!");