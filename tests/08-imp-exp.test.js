import { getHeroeById,getHeroesByOwner } from '../src/base-pruebas/08-imp-exp';

describe('Pruebas 08', () => {  

test('getHeroesByOwner debe devolver un arreglo con los heroes de DC', () => {  

    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },
    ]);
    
})  

test('getHeroesByOwner debe devolver un arreglo con los heroes de Marvel', () => {  

    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    
})  

})