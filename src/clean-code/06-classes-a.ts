(() =>{

    // Codigo sin aplicar el principio de responsabilidad unica.

    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public bithdate: Date,
        ){}
    };

    class User extends Person {
        constructor(
            public email: string,
            public premium: boolean,
            private password: string,
            name: string,
            gender: Gender,
            bithdate: Date,
        ) {
            super( name, gender, bithdate );
        }

        checkIsPremium() {
            return this.premium;
        }
    };

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            premium: boolean,
            password: string,
            name: string,
            gender: Gender,
            bithdate: Date,
        ) {
            super( email, premium, password, name, gender ,bithdate );
        }
    };

    const userSettings = new UserSettings(
        './users/desktop/...',
        './documents/personal-proyects/',
        'ricardovelecal@gmail.com',
        true,
        '1234',
        'Ricardo Velez',
        'M',
        new Date('2002-10-28'),
    );

    console.log({ userSettings, isPremium: userSettings.checkIsPremium() });


})()