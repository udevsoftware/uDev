import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Logo from '../../assets/logo.png';

export const HomeScreen = () => {
    return (<>
        Hola
        <FloatingWhatsApp
        phoneNumber="1140374130"
        accountName="uDev Solutions"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar={Logo}
        chatMessage="¡Para mas información comunicate con nosotros por whatsapp!"
        placeholder="Ingrese su consulta"
        statusMessage=""
      />
    </>)
}