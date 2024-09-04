import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule,TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  http = inject(HttpClient);
  isFormValid = false;
  touched = {
    email: false,
    name: false,
    message:false
  };
  
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;

post = {
  endPoint: 'https://ismail-guendogdu.de/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

  getFieldIsValid(name: string, ngForm: NgForm):boolean{
    if (!ngForm.form.controls[name].touched) {
      return true;
    }
    return ngForm.form.controls[name].valid;
  }

onSubmit(ngForm: NgForm) {
  this.isFormValid = ngForm.form.valid;
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
    ngForm.resetForm();
  }else{
    console.log(ngForm.errors);
  }
}

}
