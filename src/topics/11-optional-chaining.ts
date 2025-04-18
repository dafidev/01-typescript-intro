export interface Passenger {
    name: string;
    children?: string[];
}

const passanger1: Passenger ={
    name: "Fernando"
}

const passanger2: Passenger ={
    name: "Melisa",
    children: ['Natalia', 'Elizabeth']
}

const printChildren = (passanger: Passenger) => {
    
    const howmanyChildren = passanger.children?.length || 0;
    console.log(passanger.name ,howmanyChildren)
}

printChildren(passanger1)