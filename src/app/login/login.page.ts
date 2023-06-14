import {
  ionForm,
  IonForm,
  DynamicFormType,
  FieldValidationResponse,
} from "ionform";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  email!: string;
  password!: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async ngAfterViewInit() {}

  async ngOnInit() {
    const myForm: IonForm = ionForm("myform");

    const stringKeyValuePairs = {
      password: "mypassword",

      repeatPassword: "",
    };

    myForm.createForm({ jsonForm: stringKeyValuePairs });
  }

  // async login() {
  //   try {
  //     const result = await this.afAuth.signInWithEmailAndPassword(
  //       this.email,
  //       this.password
  //     );
  //     if (result.user) {
  //       this.router.navigate(['/home']);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
