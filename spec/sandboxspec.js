/**
 * @author andy on 6/30/17.
 */


describe('sandbox pattern', function () {
    it('sandbox using', function () {
        expect(function () {
            SandBox(function (box) {
                console.log('callback is invoke!');
                box.getElement();
                box.getStyle();
                box.attachEvent();
                box.detachEvent();
                box.makeRequest();
                box.getResponse();
            });
        }).not.toThrowError();
    })
});