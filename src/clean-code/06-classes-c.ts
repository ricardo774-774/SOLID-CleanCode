(() =>{

    // Codigo aplicando el principio de responsabilidad unica.
    // Mandando objetos.
    // Priorizar la composicion frente a la herencia.

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date
        gender: Gender;
        name: string;
    }

    interface UserProps {
        email: string;
        password: string;
        premium: boolean;
    }

    interface SettingProps {
        lastOpenFolder: string,
        workingDirectory: string,
    }

    interface UserSettingProps {
        birthdate: Date
        email: string;
        gender: Gender;
        lastOpenFolder: string,
        name: string;
        password: string;
        premium: boolean;
        workingDirectory: string,
    }

    class Person {
        public birthdate :Date;
        public gender    :Gender;
        public name      :string;

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

    class User {
        public email     :string;
        public password  :string;
        public premium   :boolean;

        constructor({
            email, 
            password, 
            premium, 
        }: UserProps) {

            this.email = email;
            this.password = password;
            this.premium = premium;

        }

        checkIsPremium() {
            return this.premium;
        }
    };

    class Setting {
        public workingDirectory :string;
        public lastOpenFolder   :string;

        constructor({
            lastOpenFolder,
            workingDirectory,
        }: SettingProps ){

            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    };

    class UserSettings {
        public person: Person;
        public user: User;
        public setting: Setting;

        constructor({
            name, gender, birthdate,
            email, password, premium,
            workingDirectory, lastOpenFolder,
        }: UserSettingProps ){

            this.person = new Person({ name, gender, birthdate});
            this.user = new User({ email, password, premium });
            this.setting = new Setting({ workingDirectory, lastOpenFolder });

        }
    }

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

    console.log({ userSettings, isPremium: userSettings.user.checkIsPremium() });


})()