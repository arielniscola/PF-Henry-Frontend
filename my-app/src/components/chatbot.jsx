import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {Link,} from 'react-router-dom';

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	// botAvatar: "img.png",
	floating: true
};

export default function Chatbot() {
    return(
        <div>
        <ThemeProvider theme={theme}>
        <ChatBot

            // This appears as the header
            // text for the chat bot
            headerTitle="GeekBot"
            steps={[
                {
                    id: "1",
                    message: "Hola ! Cual es tu nombre?",
                    trigger: "2"
                },
                {
                    id: "2",
                    user: true,
                    trigger: "3"
                },
                {
                    id: "3",
                    message: 'Hola {previousValue} ! en que te puedo ayudar?',
                    trigger: "4"
                },
                {
                    id: "4",
                    options: [
                    { value: 1, label: "Sobre nosotros", trigger: "5" },
                    { value: 2, label: "Nuestras redes", trigger: "6" },
                    { value: 3, label: "Contacto", trigger: "7" },
                    { value: 4, label: "Nothing", trigger: "9" }
                    ]
                },
                {
                    id: "5",
                    component: <div><p>Nuestra empresa tiene como principal objetivo brindar un servicio de organización para eventos con el fin de evitar el trabajo administrativo y facilitar la coordinación entre cliente y dueño del complejo. </p>
                    <p>El cliente puede buscar un complejo, edificio o salones y 
                    alquilarlos o hacer reservaciones. El cliente tendría la posibilidad de ver los 
                    horarios y días disponibles así también la posibilidad de realizar las
                    transacciones a través de la app. Por otra parte, los dueños pueden crear una 
                    imagen visual de sus edificios y así también de los horarios disponibles que 
                    este tiene, costos, el dueño podría establecer con un calendario sus horarios 
                    y días de trabajo.</p></div>,
                    trigger: "8"
                },
                {
                    id: "6",
                    component: <div>
                        <h1>Puedes encontrarnos en: </h1>
                        <ul>
                            <li><a href='https://www.linkedin.com' target="__blank" >Linkedin</a></li>
                            <li><a href='https://www.facebook.com' target="__blank">Facebook</a></li>
                            <li><a href='https://www.instagram.com' target="__blank">Instagram</a></li>
                            <li><a href='https://www.whatsapp.com' target="__blank">WhatsApp</a></li>
                        </ul>
                    </div>,
                    trigger: "8"
                },
                {
                    id: "7",
                    component: <div> Para enviarnos un mensaje desde la seccion de contacto !
                    </div>,
                    trigger: "8"
                },
                {
                    id: "8",
                    message: "Algo mas ?",
                    trigger: "4"
                },
                {
                    id: "9",
                //   message: "Thank you for your visiting",
                    options: [
                    { value: 1, label: "Sobre nosotros", trigger: "5" },
                    { value: 2, label: "Product Complaint", trigger: "6" },
                    { value: 3, label: "About US", trigger: "7" },
                    { value: 4, label: "Nothing", trigger: "9" }
                    ],
                }
                ]}
            {...config}
        />
    </ThemeProvider>
        </div>
    )
}