
// export class Person {
//      public name?: string;
//     private address?: string;

//     constructor( name: string, address: string) {
//         this.name = name;
//         this.address = address; 
//     }
// }

export class Person {

   constructor(
    public fristName: string,
    public lastName: string,
    private address: string = 'No Address') {}
}

// export class Hero extends Person {
//     constructor(
//        public alterEgo: string,
//        public age: number, 
//        public realName: string
//     ) {
//         super(realName, 'New York');
//     }

// }

export class Hero {

    constructor(
       public alterEgo: string,
       public age: number, 
       public realName: string,
       public person: Person
    ) {}

}

const tony = new Person('Tony','Stark', 'New York')

const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);
//ironman.address is private but it can be compiled and run due to ts is based on js. 