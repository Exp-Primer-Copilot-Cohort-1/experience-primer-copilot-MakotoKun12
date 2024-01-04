function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
        },
        skills: ['cooking', 'baking', 'frying']
    }
    return member.skills[0];
}