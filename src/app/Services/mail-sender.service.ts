import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MailSender} from "../Modules/MailSender";

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
  constructor(private http:HttpClient) { }

  SendMail(mail:MailSender) {
    return this.http.post<MailSender>("https://portfolio-backend-vzrl.onrender.com/api/mail", mail)

  }
}
