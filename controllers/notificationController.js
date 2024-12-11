// In `notificationController.js`
const Notification = require('../models/NotificationModel');

exports.sendNotification = (req, res) => {
    const { userId, message } = req.body;
    const newNotification = new Notification({ userId, message });

    newNotification
        .save()
        .then(() => res.json({ message: 'Notification sent successfully!' }))
        .catch((err) => res.status(500).json({ error: 'Error sending notification: ' + err.message }));
};

exports.getNotifications = (req, res) => {
    const { userId } = req.params;

    Notification.find({ userId })
        .then((notifications) => res.json(notifications))
        .catch((err) => res.status(500).json({ error: 'Error fetching notifications: ' + err.message }));
};
