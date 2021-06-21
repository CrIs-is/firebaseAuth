import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import * as moment from "moment";

export class FormValidate{

    public static confirmPassword(form:  FormGroup): ValidationErrors | null {       
        if(form.controls.password.value !== form.controls.passwordConfirm.value ){
            return ({passwordConfirm: true});
        }
        return null
    }

    public static esMayorDeEdad(control: AbstractControl): ValidationErrors | null{
        let fecha: Date = new Date(control.value);
        let edad =  moment(new Date()).diff(fecha,'years');
        if(edad >= 18){
            return null;
        }
        else{
            return ({esMenor: true})
        }
        
    }
}