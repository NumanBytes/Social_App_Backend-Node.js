import transport from "../../config/nodeMailer"


const loginEmail = ()=> {
    transport.sendMail({
        from: "numanrazzaq350@gmail.com",
        to: "numaan.razaq@gmail.com",
        subject: "Test login",
        message: "abcdefgijklmnop"
    },
    (err, res) => {
        if(err) 
        console.log(err);
        else console.log(res);
    }
    );
};

export default loginEmail;
