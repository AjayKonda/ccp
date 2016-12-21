export class Notification {
    send_option: number;
    account_id: number;
    role_id: number;
    dept_id: number;
    year: number;
    college_id: number;
    title: string;
    message: string;
    file_url: string;
    priority: number;
    action_required: number;
    action_question: string;
    action_choices: any;
    action_choice1: string;
    action_choice2: string;
    action_choice3: string;
    action_choice4: string;
    constructor() {
        this.send_option = 1;
        this.dept_id = 0;
        this.year = 0;
    }
}