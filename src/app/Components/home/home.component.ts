import {Component, OnInit} from '@angular/core';
import {MailSender} from "../../Modules/MailSender";
import {MailSenderService} from "../../Services/mail-sender.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mailSender: MailSender= new MailSender();

  constructor(private mailSenderService: MailSenderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mailSenderService.SendMail(this.mailSender).subscribe(result => window.location.reload());
    this.toastr.success('Thank you for the feedback '+this.mailSender.name, 'Message Sent!');
  }


}
