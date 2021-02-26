import { AbstractControl, ValidationErrors } from '@angular/forms'

export class Custom {

    static Match(control:AbstractControl):ValidationErrors|null{
        let Password = control.get('password');
        let confirmPass = control.get('confirmPass');
        if(confirmPass.value!==Password.value){
            return ({Match:true})
        }else{
            return null;
        }
    }
}