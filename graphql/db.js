export const people = [
    {
        id: "0",
        name: "Lgy",
        age: 31,
        gender: "male"
    },
    {
        id: "1",
        name: "Lgy2",
        age: 32,
        gender: "male"
    },
    {
        id: "2",
        name: "Lgy3",
        age: 33,
        gender: "male"
    },
    {
        id: "3",
        name: "Lgy4",
        age: 30,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
}