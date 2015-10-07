function RabbitLyrics(options) {
    if (!options.audioElement || !options.lyricsElement) {
        return;
    }
    
    this.audioElement = jQuery(options.audioElement);
    this.lyricsElement = jQuery(options.lyricsElement);
    
    // Do not initialize twice on the same element
    if (this.lyricsElement.data('lyricsEnabled')) {
        return;
    }
    
    switch (options.size) {
        case 'tiny':
        case 'medium':
        case 'full':
            this.size = options.size;
            break;
        default:
            this.size = 'medium';
    }
    
    this.applySize().parseLyrics().enableLyrics();
}

RabbitLyrics.prototype.applySize = function () {
    this.lyricsElement.addClass(this.size);
    return this;
};

RabbitLyrics.prototype.parseLyrics = function () {
    var lines = this.lyricsElement.text().trim().split('\n');
    
    var inner = jQuery('<div class="inner"></div>');
    this.lyricsElement.html('');
    this.lyricsElement.append(inner);
    
    var lastTime = 0;
    
    for (var i = 0; i < lines.length; i++) {
        var lineElement = jQuery('<div class="line"></div>');
        inner.append(lineElement);
        
        var line = lines[i].trim();
        
        var times = line.match(/\[\d+:\d+\.\d+\]/g) || [];
        var beginningTime = line.match(/^\[\d+:\d+\.\d+\]/g) || [];
        var endingTime = line.match(/\[\d+:\d+\.\d+\]$/g) || [];
        
        line = line.replace(/\[\d+:\d+\.\d+\]/g, '');
        
        if (!line) {
            line = '&nbsp;';
        }
        
        lineElement.html(line);
        
        if (times.length > 0) {
            inner.find('.no-end').removeClass('no-end').data('end', this.decodeTimeStamp(times[0]));
        }
        
        if (times.length === 2 && beginningTime.length > 0 && endingTime.length > 0) {
            // Have both beginning and ending time stamp
            lineElement.data('start', this.decodeTimeStamp(beginningTime[0]));
            lineElement.data('end', this.decodeTimeStamp(endingTime[0]));
            lastTime = this.decodeTimeStamp(endingTime[0]);
        } else if (times.length === 1 && beginningTime.length > 0) {
            // Only have beginning time stamp, or only have a time stamp, no text
            lineElement.data('start', this.decodeTimeStamp(beginningTime[0]))
                    .addClass('no-end');
            lastTime = this.decodeTimeStamp(beginningTime[0]);
        } else if (endingTime.length > 0) {
            // Only have ending time stamp
            lineElement.data('end', this.decodeTimeStamp(endingTime[0]));
            lastTime = this.decodeTimeStamp(endingTime[0]);
        } else {
            // Do not have any time stamps
            lineElement.html(line)
                    .data('start', lastTime)
                    .addClass('no-end');
        }
    }
    
    console.log('lyrics parsed');
    return this;
};

RabbitLyrics.prototype.enableLyrics = function () {
    var that = this;
    
    this.lyrics = [];
    
    this.lyricsElement.find('.line').each(function () {
        that.lyrics.push({
            start: jQuery(this).data('start'),
            end: jQuery(this).data('end'),
            element: jQuery(this)
        });
    });
    
    this.audioElement.bind('timeupdate', function () {
        var time = that.time = that.audioElement[0].currentTime;
        
        for (var i = 0; i < that.lyrics.length; i++) {
            var lrc = that.lyrics[i];
            if (lrc.start < time && lrc.end > time) {
                lrc.element.addClass('active');
            } else {
                lrc.element.removeClass('active');
            }
        }
    });
    
    this.lyricsElement.data('lyricsEnabled');
    console.log('lyrics enabled');
    
    return this;
};

RabbitLyrics.prototype.decodeTimeStamp = function (timeStamp) {
    var time = null;
    
    if (timeStamp) {
        var results = timeStamp.match(/\[(\d+):(\d+\.\d+)\]/);

        if (results.length === 3) {
            time = parseInt(results[1]) * 60 + parseFloat(results[2]);
        }
    }
    return time;
};

jQuery(function () {
    jQuery('.rabbit-lyrics').each(function () {
        var audio = jQuery(jQuery(this).data('audio'));
        if (audio.length === 0) {
            return;
        }
        
        var size = jQuery(this).data('size');
        
        if (!size) {
            size = 'medium';
        }
        
        new RabbitLyrics({
            audioElement: audio,
            lyricsElement: this,
            size: size // tiny, medium, full
        });
    });
});