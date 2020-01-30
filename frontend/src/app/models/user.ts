export class User {
    constructor(
        public first_name: string = '',
        public last_name: string = '',
        public email: string = '',
        public phone: string = '',
        public address_1: string = '',
        public address_2: string = '',
        public city: string = '',
        public zipcode: number = null,
        public state: string = '',
        public id?: number,
    ) {}
}
