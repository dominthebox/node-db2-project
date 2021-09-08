// STRETCH
const cars = [
    {
        vin: 'JH4KA3240KC018604',
        make: 'subaru',
        model: 'WRX',
        mileage: 59876,
        title: 'clean',
        transmission: 'manuel',
    },
    {
        vin: 'JNKCV54E46M706213',
        make: 'ford',
        model: 'mustang',
        mileage: 69890,
        title: 'dirty',
        transmission: 'automatic',
    },
    {
        vin: 'JH4KA4640JC021212',
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