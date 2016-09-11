/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
import ava from 'ava';

import {
    UNIT_CONVERSION_CONSTANTS,
    km,
    nm,
    km_ft,
    ft_km,
    kn_ms,
    radiansToDegrees,
    degreesToRadians
} from '../../src/assets/scripts/utilities/unitConverters';

ava('.km() converts kilometers to nautical miles', t => {
    const result = km(10);
    const expectedResult = 10 * UNIT_CONVERSION_CONSTANTS.NM_KM;

    t.true(result === expectedResult);
});

ava('.km() sets a default for the nm parameter', t => {
    const result = km();
    const expectedResult = 0 * UNIT_CONVERSION_CONSTANTS.NM_KM;

    t.true(result === expectedResult);
});

ava('.nm() converts nautical miles to kilometers', t => {
    const result = nm(10);
    const expectedResult = 10 / UNIT_CONVERSION_CONSTANTS.NM_KM;

    t.true(result === expectedResult);
});

ava('.nm() sets a default for the km parameter', t => {
    const result = nm();
    const expectedResult = 0 / UNIT_CONVERSION_CONSTANTS.NM_KM;

    t.true(result === expectedResult);
});

ava('.km_ft() converts kilometers to feet', t => {
    const result = km_ft(10);
    const expectedResult = 10 / UNIT_CONVERSION_CONSTANTS.KM_FT;

    t.true(result === expectedResult);
});

ava('.km_ft() sets a default for the km parameter', t => {
    const result = km_ft();
    const expectedResult = 0 / UNIT_CONVERSION_CONSTANTS.KM_FT;

    t.true(result === expectedResult);
});

ava('.ft_km() converts feet to kilometers', t => {
    const result = ft_km(10);
    const expectedResult = 10 * UNIT_CONVERSION_CONSTANTS.KM_FT;

    t.true(result === expectedResult);
});

ava('.ft_km() sets a default for the ft parameter', t => {
    const result = ft_km();
    const expectedResult = 0 * UNIT_CONVERSION_CONSTANTS.KM_FT;

    t.true(result === expectedResult);
});

ava('.kn_ms() converts knots to m/s', t => {
    const speed = 190;
    const expectedResult = speed * UNIT_CONVERSION_CONSTANTS.KN_MS;
    const result = kn_ms(speed);

    t.true(result === expectedResult);
});

ava('.radiansToDegrees() converts radians to degrees', t => {
    const result = radiansToDegrees(2.1467549799530254);
    const expectedResult = 123;
    
    t.true(result === expectedResult);
});

ava('.degreesToRadians() converts degrees to radians', t => {
    const result = degreesToRadians(123);
    const expectedResult = 2.1467549799530254;

    t.true(result === expectedResult);
});