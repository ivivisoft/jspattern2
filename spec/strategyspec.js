/**
 * @author root on 17-7-10.
 */


describe('strategy pattern', function () {
    it('strategy pattern test', function () {
        expect(function () {
            var data = {
                first_name: 'Super',
                last_name: 'Man',
                age: "unknown",
                username: 'o_0'
            };
            validator.config = {
                first_name: 'isNonEmpty',
                age: 'isNumber',
                username: 'isAlphaNum'
            };
            validator.validate(data);
            if (validator.hasErrors) {
                console.log(validator.messages.join('\n'));
            }
        }).not.toThrowError();
    });
});