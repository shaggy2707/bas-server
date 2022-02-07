import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../form/Button';
import FormField from '../form/FormField';

function Loginpage() {
    return (
        <div className='container my-6'>
            <form className="w-full max-w-sm">
                <FormField label="E-mail" identity="email" type="email" placeholder="e-mail" />
                <FormField label="Wachtwoord" identity="password" type="password" placeholder="wachtwoord" />
                <Button label="Inloggen" form={true} />
            </form>
        </div>
    );
}

export default Loginpage;
