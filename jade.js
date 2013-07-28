var FS, PATH, BORSCHIK, INHERIT, base;

FS = require('fs');
PATH = require('path');
BORSCHIK = require('borschik');
INHERIT = BORSCHIK.require('inherit');
base = BORSCHIK.require('./tech');

exports.Tech = INHERIT(base.Tech, {

    File: exports.File = INHERIT( base.File, {

        parseInclude: function(content) {
            var rgx, _this, uniqStr, res = [], t, i;

            _this = this;
            rgx = /^(\s*)\/\/-\s*borschik:include:\s*(.*)$/gim;
            uniqStr = '\00borschik\00';

            if (Buffer.isBuffer(content))
                content = content.toString('utf8');

            var includes = [],
                texts = content
                    .replace(rgx, function(_, space, file) {
                        includes.push({
                            file: _this.pathTo(file),
                            space: space
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
        },

        processInclude: function(baseFile, content) {
            var parsed, item, i, processed, result;

            parsed = content || this.content;

            for ( i = 0; i < parsed.length; i++ ) {
                item = parsed[i];

                if ( typeof item === 'string' )
                    continue;

                if (!FS.existsSync(item.file)) {
                    throw new Error('File ' + item.file + ' does not exists, base file is ' + baseFile);
                }

                processed = this.child('include', item.file).process(baseFile);

                if (typeof item.space === 'string') {

                    result = processed.split('\n').map(function(row) {
                        return item.space + row;
                    }).join('\n');

                } else {
                    result = JSON.stringify(processed);
                }
                parsed[i] = result;
            }
            return parsed.join('');
        }
    })
});