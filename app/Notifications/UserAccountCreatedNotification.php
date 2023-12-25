<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserAccountCreatedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */

    private $user;
    private $password;
    public function __construct(User $user, $password)
    {
        $this->user = $user;
        $this->password = $password;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)

            // TODO: get company name from env
            ->subject("Welcome to ENRIX")
            ->greeting("Hello!!, " . $this->user->name)
            ->line('Welcome to the team.')
            ->line('Your password is: ' . $this->password)
            ->action('Login into your account', url('/login'))
            ->line('Kindly reset your password after login!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [];
    }
}
