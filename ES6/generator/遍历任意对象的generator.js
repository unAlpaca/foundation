function* objectEntries(obj) {
    let proKeys = Reflect.ownKeys(obj);

    for (let proKey of proKeys) {
        yield [proKey, obj[proKey]]
    }
}

let jane = {
    first: 'Jane',
    last: 'Doe',
    age: 18,
    fullName: 'Jane Doe',
    gender: 'female',
    toies: [
        'car', 'dool', 'mirrior'
    ],
    brothor: [
        {
            first: 'Jim',
            last: 'Doe',
            age: 18,
            fullName: 'Jim Doe',
            gender: 'male',
            toies: [
                'car', 'sword'
            ],
        }
    ]
}

for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}:${value}`);

}