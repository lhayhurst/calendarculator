var assert = require('assert');
var fs = require('fs');
console.log();
describe('load config test', function () {
  it('should load the config file', function () {
    var jsonfile = __dirname + "/../config/ignore.json";
     assert(fs.existsSync(jsonfile) == true );
    var obj = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));
    assert(obj != null);
    console.log(obj);
    assert.equal(Object.keys(obj).length, 3);

    var mealtimes = obj["mealtimes"];
    assert(mealtimes != null );
    assert(mealtimes.length == 2);
    assert(mealtimes[0] == "lunch")

    //build out the regex
    RegExp.escape = function(string) {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    };
    var regexStr = mealtimes.map(RegExp.escape).join("|");
    console.log(regexStr);
    var regex = new RegExp(regexStr);


  });
});