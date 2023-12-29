<?php

namespace App\Notifications;

use App\Models\Request;
use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RequestFulfilledNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $request;
    private $task;

    /**
     * Create a new notification instance.
     */
    public function __construct(Request $request, Task $task)
    {
        $this->request = $request;
        $this->task = $task;
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
            ->line('Your request has be fulfilled')
            ->line('Request ID: ' . $this->request->id)
            ->line('Task ID: ' . $this->task->id)
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
