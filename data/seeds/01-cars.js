// STRETCH
const cars = [
    {
        vin: '1234567891234',
        make: 'subaru',
        model: 'WRX',
        mileage: 59876,
        title: 'clean',
        transmission: 'manuel',
    },
    {
        vin: '2345678912345',
        make: 'ford',
        model: 'mustang',
        mileage: 69890,
        title: 'dirty',
        transmission: 'automatic',
    },
    {
        vin: '3456789123456',
        make: 'lamborghini',
        model: 'diablo',
        mileage: 22654,
        title: 'clean',
        transmission: 'manuel',
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}