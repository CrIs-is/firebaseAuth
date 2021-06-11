import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class FormValidate{

    public static confirmPassword(form:  FormGroup): ValidationErrors | null {       
        // return (control: AbstractControl): ValidationErrors | null => {
        //     const forbidden = nameRe.test(control.value);
        //     return forbidden ? {forbiddenName: {value: control.value}} : null;
        //   };
        if(form.controls.password.value !== form.controls.passwordConfirm.value ){
            
            return ({passwordConfirm: true});
        }
        return null
    }
}