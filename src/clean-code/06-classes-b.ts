(() =>{

    // Codigo sin aplicar el principio de responsabilidad unica.
    // Mandando objetos

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date
        gender: Gender;
        name: string;
    }

    interface UserProps extends PersonProps{
        email: string;
        password: string;
        premium: boolean;
    }

    interface UserSettingProps extends UserProps {
        lastOpenFolder: string,
        workingDirectory: string,
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({
            birthdate,
            gender, 
            name, 
        }: PersonProps){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    };

    class User extends Person {
        
        public email     :string;
        public password  :string;
        public premium   :boolean;

        constructor({
            birthdate,
            email, 
            gender, 
            name, 
            password, 
            premium, 
        }: UserProps) {
            super({ name, gender, birthdate });
            this.email = email;
            this.password = password;
            this.premium = premium;
        }

        checkIsPremium() {
            return this.premium;
        }
    };

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            password,
            premium,
            workingDirectory,
        }: UserSettingProps){
            super({ email, premium, password, name, gender ,birthdate });

            this.lastOpenFolder = lastOpenFolder,
            this.workingDirectory = workingDirectory

        }
    };

    const userSettings = new UserSettings({
        workingDirectory :'./users/desktop/...',
        lastOpenFolder: './documents/personal-proyects/',
        email: 'ricardovelecal@gmail.com',
        premium: true,
        password: '1234',
        name: 'Ricardo Velez',
        gender: 'M',
        birthdate :new Date('2002-10-28'),
    });

    console.log({ userSettings, isPremium: userSettings.checkIsPremium() });


})()