exports = module.exports = function jade(borschik) {

    var base = borschik.getTech('jade');

    if (exports.Tech) {
        return exports;
    }

    exports.Tech = base.Tech._inherit({

        File: exports.File = base.File._inherit({

            parseInclude: function(content) {
                var rgx, _this, uniqStr, res = [], t, i;

                _this = this;
                rgx = /\/\/-\s*borschik:include:\s*(.*)$/gim;
                uniqStr = '\00borschik\00';

                if (Buffer.isBuffer(content))
                    content = content.toString('utf8');

                var includes = [],
                    texts = content
                        .replace(rgx, function(_, file) {

                            includes.push({
                                file: _this.pathTo(file),
                                type: 'comment'
                            });
                            return uniqStr;
                        })
                        .split(uniqStr);

                // zip texts and includes
                while((t = texts.shift()) != null) {
                    t && res.push(t);
                    (i = includes.shift()) && res.push(i);
                }
                return res;
            }

        })
    });

    return exports;
};
