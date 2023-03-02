import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const HomeScreen = () => {
    return (<>
        Hola
        <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="Foo"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </>)
}