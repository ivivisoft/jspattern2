/**
 * @author root on 17-7-9.
 */

describe('decorator pattern', function () {
    it('implements with inherit', function () {
        expect(function () {
            var sale = new Sale(100).decorate('fedtax').decorate('quebec').decorate('money');
            console.log(sale.getPrice());
        }).not.toThrowError();
    });
    it('implements with javascript list', function () {
        expect(function () {
            var sale = new SaleYet(100);
            sale.decorate('fedtax');
            sale.decorate('quebec');
            sale.decorate('money');
            console.log(sale.getPrice());
        }).not.toThrowError();
    })
});