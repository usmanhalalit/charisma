isClear = true;

function context(description, spec) {
  describe(description, spec);
};

function build() {
  $('body').append('<div id="element"></div>');
};

function buildDivTarget() {
  $('body').append('<div id="hint"></div>');
};

function buildComboboxTarget() {
  $('body').append(
    '<select id="hint">' +
      '<option value="Cancel this rating!">cancel hint default</option>' +
      '<option value="cancel-hint-custom">cancel hint custom</option>' +

      '<option value="">cancel number default</option>' +
      '<option value="0">cancel number custom</option>' +

      '<option value="bad">bad hint imutable</option>' +
      '<option value="1">bad number imutable</option>' +

      '<option value="targetText">targetText is setted without targetKeep</option>' +

      '<option value="score: bad">targetFormat</option>' +
    '</select>'
  );
};

function buildTextareaTarget() {
  $('body').append('<textarea id="hint"></textarea>');
};

function buildTextTarget() {
  $('body').append('<input id="hint" type="text" />');
};

function clear() {
  if (isClear) {
    $('#element').remove();
    $('#hint').remove();
  }
};

describe('Raty', function() {
  beforeEach(function() { build(); });
  afterEach(function()  { clear(); });

  it ('has the right values', function() {
    // given
    var raty = $.fn.raty

    // when
    var opt = raty.defaults

    // then
    expect(opt.cancel).toBeFalsy();
    expect(opt.cancelHint).toEqual('Cancel this rating!');
    expect(opt.cancelOff).toEqual('cancel-off.png');
    expect(opt.cancelOn).toEqual('cancel-on.png');
    expect(opt.cancelPlace).toEqual('left');
    expect(opt.click).toBeUndefined();
    expect(opt.half).toBeFalsy();
    expect(opt.halfShow).toBeTruthy();
    expect(opt.hints).toContain('bad', 'poor', 'regular', 'good', 'gorgeous');
    expect(opt.iconRange).toBeUndefined();
    expect(opt.mouseover).toBeUndefined();
    expect(opt.noRatedMsg).toEqual('Not rated yet!');
    expect(opt.number).toBe(5);
    expect(opt.path).toEqual('');
    expect(opt.precision).toBeFalsy();
    expect(opt.readOnly).toBeFalsy();
    expect(opt.round.down).toEqual(.25);
    expect(opt.round.full).toEqual(.6);
    expect(opt.round.up).toEqual(.76);
    expect(opt.score).toBeUndefined();
    expect(opt.scoreName).toEqual('score');
    expect(opt.single).toBeFalsy();
    expect(opt.size).toBe(16);
    expect(opt.space).toBeTruthy();
    expect(opt.starHalf).toEqual('star-half.png');
    expect(opt.starOff).toEqual('star-off.png');
    expect(opt.starOn).toEqual('star-on.png');
    expect(opt.target).toBeUndefined();
    expect(opt.targetFormat).toEqual('{score}');
    expect(opt.targetKeep).toBeFalsy();
    expect(opt.targetText).toEqual('');
    expect(opt.targetType).toEqual('hint');
    expect(opt.width).toBeUndefined();
  });

  describe('common features', function() {
    it ('is chainable', function() {
      // given
      var self = $('#element');

      // when
      var ref = self.raty();

      // then
      expect(ref).toBe(self);
    });

    it ('creates the default markup', function() {
      // given
      var self = $('#element');

      // when
      self.raty();

      // then
      var imgs  = self.children('img'),
          score = self.children('input');

      expect(imgs.eq(0)).toHaveAttr('title', 'bad');
      expect(imgs.eq(1)).toHaveAttr('title', 'poor');
      expect(imgs.eq(2)).toHaveAttr('title', 'regular');
      expect(imgs.eq(3)).toHaveAttr('title', 'good');
      expect(imgs.eq(4)).toHaveAttr('title', 'gorgeous');
      expect(imgs).toHaveAttr('src', 'star-off.png');
      expect(score).toHaveAttr('type', 'hidden');
      expect(score).toHaveAttr('name', 'score');
      expect(score.val()).toEqual('');
    });
  });

  describe('#star', function() {
    it ('starts all off', function() {
      // given
      var self = $('#element');

      // when
      self.raty();

      // then
      expect(self.children('img')).toHaveAttr('src', 'star-off.png');
    });

    context('on :mouseover', function() {
      it ('turns on the stars', function() {
        // given
        var self = $('#element').raty(),
            imgs = self.children('img');

        // when
        imgs.eq(4).mouseover();

        // then
        expect(imgs).toHaveAttr('src', 'star-on.png');
      });

      context('and :mouseout', function() {
        it ('clears all stars', function() {
          // given
          var self = $('#element').raty(),
              imgs = self.children('img');

          // when
          imgs.eq(4).mouseover().mouseout();

          // then
          expect(imgs).toHaveAttr('src', 'star-off.png');
        });
      });
    });

    context('on rating', function() {
      it ('changes the score', function() {
        // given
        var self = $('#element').raty(),
            imgs = self.children('img');

        // when
        imgs.eq(1).mouseover().click();

        // then
        expect(self.children('input')).toHaveValue(2);
      });

      context('on :mouseout', function() {
        it ('keeps the stars on', function() {
          // given
          var self = $('#element').raty(),
              imgs = self.children('img');

          // when
          imgs.eq(4).mouseover().click().mouseout();

          // then
          expect(imgs).toHaveAttr('src', 'star-on.png');
        });
      });
    });
  });

  describe('options', function() {
    describe('#numberMax', function() {
      it ('limits to 20 stars', function() {
        // given
        var self = $('#element').raty({ number: 50, score: 50 });

        // when
        var score = self.raty('score');

        // then
        expect(self.children('img').length).toEqual(20);
        expect(self.children('input')).toHaveValue(20);
      });

      context('with custom numberMax', function() {
        it ('chages the limit', function() {
          // given
          var self = $('#element').raty({ numberMax: 10, number: 50, score: 50 });

          // when
          var score = self.raty('score');

          // then
          expect(self.children('img').length).toEqual(10);
          expect(self.children('input')).toHaveValue(10);
        });
      });
    });

    describe('#starOff', function() {
      it ('changes the icons', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ starOff: 'icon.png' });

        // then
        expect(self.children('img')).toHaveAttr('src', 'icon.png');
      });
    });

    describe('#starOn', function() {
      it ('changes the icons', function() {
        // given
        var self = $('#element').raty({ starOn: 'icon.png' }),
            imgs = self.children('img');

        // when
        imgs.eq(3).mouseover();

        // then
        expect(imgs.eq(0)).toHaveAttr('src', 'icon.png');
        expect(imgs.eq(1)).toHaveAttr('src', 'icon.png');
        expect(imgs.eq(2)).toHaveAttr('src', 'icon.png');
        expect(imgs.eq(3)).toHaveAttr('src', 'icon.png');
        expect(imgs.eq(4)).toHaveAttr('src', 'star-off.png');
      });
    });

    describe('#iconRange', function() {
      it ('uses icon intervals', function() {
        // given
        var self = $('#element');

        // when
        self.raty({
          iconRange: [
            { range: 2, on: 'a.png', off: 'a-off.png' },
            { range: 3, on: 'b.png', off: 'b-off.png' },
            { range: 4, on: 'c.png', off: 'c-off.png' },
            { range: 5, on: 'd.png', off: 'd-off.png' }
          ]
        });

        // then
        var imgs = self.children('img');

        expect(imgs.eq(0)).toHaveAttr('src', 'a-off.png');
        expect(imgs.eq(1)).toHaveAttr('src', 'a-off.png');
        expect(imgs.eq(2)).toHaveAttr('src', 'b-off.png');
        expect(imgs.eq(3)).toHaveAttr('src', 'c-off.png');
        expect(imgs.eq(4)).toHaveAttr('src', 'd-off.png');
      });

      context('when off icon is not especified', function() {
        it ('uses the :starOff icon', function() {
          // given
          var self = $('#element');

          // when
          self.raty({
            iconRange: [
              { range: 2, on: 'on.png', off: 'off.png' },
              { range: 3, on: 'on.png', off: 'off.png' },
              { range: 4, on: 'on.png', off: 'off.png' },
              { range: 5, on: 'on.png' }
            ]
          });

          // then
          expect(self.children('img').eq(4)).toHaveAttr('src', 'star-off.png');
        });
      });

      context('on mouseover', function() {
        it ('uses the on icon', function() {
          // given
          var self = $('#element').raty({
              iconRange: [
                { range: 2, on: 'a.png', off: 'a-off.png' },
                { range: 3, on: 'b.png', off: 'b-off.png' },
                { range: 4, on: 'c.png', off: 'c-off.png' },
                { range: 5, on: 'd.png', off: 'd-off.png' }
              ]
            }),
            imgs = self.children('img');

          // when
          imgs.eq(4).mouseover();

          // then
          expect(imgs.eq(0)).toHaveAttr('src', 'a.png');
          expect(imgs.eq(1)).toHaveAttr('src', 'a.png');
          expect(imgs.eq(2)).toHaveAttr('src', 'b.png');
          expect(imgs.eq(3)).toHaveAttr('src', 'c.png');
          expect(imgs.eq(4)).toHaveAttr('src', 'd.png');
        });

        context('when on icon is not especified', function() {
          it ('uses the :starOn icon', function() {
            // given
            var self = $('#element').raty({
                  iconRange: [
                    { range: 2, off: 'off.png', on: 'on.png' },
                    { range: 3, off: 'off.png', on: 'on.png' },
                    { range: 4, off: 'off.png', on: 'on.png' },
                    { range: 5, off: 'off.png' }
                  ]
                }),
                imgs = self.children('img');

            // when
            imgs.eq(4).mouseover();

            // then
            expect(imgs.eq(0)).toHaveAttr('src', 'on.png');
            expect(imgs.eq(1)).toHaveAttr('src', 'on.png');
            expect(imgs.eq(2)).toHaveAttr('src', 'on.png');
            expect(imgs.eq(3)).toHaveAttr('src', 'on.png');
            expect(imgs.eq(4)).toHaveAttr('src', 'star-on.png');
          });
        });
      });

      context('on mouseout', function() {
        it ('changes to off icons', function() {
          // given
          var self = $('#element').raty({
                iconRange: [
                  { range: 2, on: 'a.png', off: 'a-off.png' },
                  { range: 3, on: 'b.png', off: 'b-off.png' },
                  { range: 4, on: 'c.png', off: 'c-off.png' },
                  { range: 5, on: 'd.png', off: 'd-off.png' },
                ]
              }),
              imgs = self.children('img');

          // when
          imgs.eq(4).mouseover();

          self.mouseleave();

          // then
          expect(imgs.eq(0)).toHaveAttr('src', 'a-off.png');
          expect(imgs.eq(1)).toHaveAttr('src', 'a-off.png');
          expect(imgs.eq(2)).toHaveAttr('src', 'b-off.png');
          expect(imgs.eq(3)).toHaveAttr('src', 'c-off.png');
          expect(imgs.eq(4)).toHaveAttr('src', 'd-off.png');
        });

        it ('keeps the score value', function() {
          // given
          var self = $('#element').raty({
                iconRange  : [
                  { range: 2, on: 'a.png', off: 'a-off.png' },
                  { range: 3, on: 'b.png', off: 'b-off.png' },
                  { range: 4, on: 'c.png', off: 'c-off.png' },
                  { range: 5, on: 'd.png', off: 'd-off.png' }
                ],
                score      : 1
              });

          // when
          self.children('img').eq(4).mouseover();

          self.mouseleave();

          // then
          expect(self.children('input')).toHaveValue(1);
        });

        context('when off icon is not especified', function() {
          it ('uses the :starOff icon', function() {
            // given
            var self = $('#element').raty({
                iconRange: [
                  { range: 2, on: 'on.png', off: 'off.png' },
                  { range: 3, on: 'on.png', off: 'off.png' },
                  { range: 4, on: 'on.png', off: 'off.png' },
                  { range: 5, on: 'on.png' }
                ]
              }),
              img = self.children('img').eq(4);

            // when
            img.mouseover();

            self.mouseleave();

            // then
            expect(img).toHaveAttr('src', 'star-off.png');
          });
        });
      });
    });

    describe('#click', function() {
      it ('has `this` as the self element', function() {
        // given
        var self = $('#element').raty({
            click: function() {
              $(this).data('self', this);
            }
          });

        // when
        self.children('img:first').mouseover().click();

        // then
        expect(self.data('self')).toBe(self);
      });

      it ('is called on star click', function() {
        // given
        var self = $('#element').raty({
              click: function() {
                $(this).data('clicked', true);
              }
            });

        // when
        self.children('img:first').mouseover().click();

        // then
        expect(self.data('clicked')).toBeTruthy();
      });

      it ('receives the score', function() {
        // given
        var self = $('#element').raty({
              click: function(score) {
                $(this).data('score', score);
              }
            });

        // when
        self.children('img:first').mouseover().click();

        // then
        expect(self.data('score')).toEqual(1);
      });

      context('with :cancel', function() {
        it ('executes cancel click callback', function() {
          // given
          var self = $('#element').raty({
              cancel: true,
              click : function(score) {
                $(this).data('score', null);
              }
             });

          // when
          self.children('.raty-cancel').mouseover().click().mouseleave();

          // then
          expect(self.data('score')).toBeNull();
        });
      });
    });

    describe('#score', function() {
      it ('starts with value', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ score: 1 });

        // then
        expect(self.children('input')).toHaveValue(1);
      });

      it ('turns on 1 stars', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ score: 1 });

        // then
        var imgs = self.children('img');

        expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
        expect(imgs.eq(1)).toHaveAttr('src', 'star-off.png');
        expect(imgs.eq(2)).toHaveAttr('src', 'star-off.png');
        expect(imgs.eq(3)).toHaveAttr('src', 'star-off.png');
        expect(imgs.eq(4)).toHaveAttr('src', 'star-off.png');
      });

      it ('accepts callback', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ score: function() { return 1; } });

        // then
        expect(self.raty('score')).toEqual(1);
      });

      context('with negative number', function() {
        it ('gets none score', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ score: -1 });

          // then
          expect(self.children('input').val()).toEqual('');
        });
      });

      context('with :readOnly', function() {
        it ('becomes readOnly too', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ readOnly: true });

          // then
          expect(self.children('input')).toHaveAttr('readonly', 'readonly');
        });
      });
    });

    describe('#scoreName', function() {
      it ('changes the score field name', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ scoreName: 'entity.score' });

        // then
        expect(self.children('input')).toHaveAttr('name', 'entity.score');
      });
    });

    it ('accepts callback', function() {
      // given
      var self = $('#element');

      // when
      self.raty({ scoreName: function() { return 'custom'; } });

      // then
      expect(self.data('settings').scoreName).toEqual('custom');
    });

    describe('#readOnly', function() {
      it ('Applies "Not rated yet!" on stars', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ readOnly: true });

        // then
        expect(self.children('img')).toHaveAttr('title', 'Not rated yet!');
      });

      it ('removes the pointer cursor', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ readOnly: true });

        // then
        expect(self).not.toHaveCss({ cursor: 'pointer' });
        expect(self).not.toHaveCss({ cursor: 'default' });
      });

      it ('accepts callback', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ readOnly: function() { return true; } });

        // then
        expect(self.data('settings').readOnly).toEqual(true);
      });

      it ('avoids trigger mouseover', function() {
        // given
        var self = $('#element').raty({ readOnly: true }),
            imgs = self.children('img');

        // when
        imgs.eq(1).mouseover();

        // then
        expect(imgs).toHaveAttr('src', 'star-off.png');
      });

      it ('avoids trigger click', function() {
        // given
        var self = $('#element').raty({ readOnly: true }),
            imgs = self.children('img');

        // when
        imgs.eq(1).mouseover().click().mouseleave();

        // then
        expect(imgs).toHaveAttr('src', 'star-off.png');
        expect(self.children('input').val()).toEqual('');
      });

      it ('avoids trigger mouseleave', function() {
        // given
        var self = $('#element').raty({
              readOnly: true,
              mouseout: function() {
                $(this).data('mouseleave', true);
              }
            }),
            imgs = self.children('img');

        imgs.eq(1).mouseover();

        // when
        self.mouseleave();

        // then
        expect(self.data('mouseleave')).toBeFalsy();
      });

      context('with :score', function() {
        context('as integer', function() {
          it ('applies the score title on stars', function() {
            // given
            var self = $('#element');

            // when
            self.raty({ readOnly: true, score: 3 });

            // then
            expect(self.children('img')).toHaveAttr('title', 'regular');
          });
        });

        context('as float', function() {
          it ('applies the integer score title on stars', function() {
            // given
            var self = $('#element');

            // when
            self.raty({ readOnly: true, score: 3.1 });

            // then
            expect(self.children('img')).toHaveAttr('title', 'regular');
          });
        });
      });

      context('with :cancel', function() {
        it ('hides the button', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ cancel: true, readOnly: true, path: '../lib/img' });

          // then
          expect(self.children('.raty-cancel')).toBeHidden();
        });
      });
    });

    describe('#hints', function() {
      it ('changes the hints', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ hints: ['1', '/', 'c', '-', '#'] });

        // then
        var imgs = self.children('img');

        expect(imgs.eq(0)).toHaveAttr('title', 1);
        expect(imgs.eq(1)).toHaveAttr('title', '/');
        expect(imgs.eq(2)).toHaveAttr('title', 'c');
        expect(imgs.eq(3)).toHaveAttr('title', '-');
        expect(imgs.eq(4)).toHaveAttr('title', '#');
      });

      it ('receives the number of the star when is undefined', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ hints: [undefined, 'a', 'b', 'c', 'd'] });

        // then
        var imgs = self.children('img');

        expect(imgs.eq(0)).toHaveAttr('title', 'bad');
        expect(imgs.eq(1)).toHaveAttr('title', 'a');
        expect(imgs.eq(2)).toHaveAttr('title', 'b');
        expect(imgs.eq(3)).toHaveAttr('title', 'c');
        expect(imgs.eq(4)).toHaveAttr('title', 'd');
      });

      it ('receives empty when is empty string', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ hints: ['', 'a', 'b', 'c', 'd'] });

        // then
        var imgs = self.children('img');

        expect(imgs.eq(0)).toHaveAttr('title', '');
        expect(imgs.eq(1)).toHaveAttr('title', 'a');
        expect(imgs.eq(2)).toHaveAttr('title', 'b');
        expect(imgs.eq(3)).toHaveAttr('title', 'c');
        expect(imgs.eq(4)).toHaveAttr('title', 'd');
      });

      it ('receives the number of the star when is null', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ hints: [null, 'a', 'b', 'c', 'd'] });

        // then
        var imgs = self.children('img');

        expect(imgs.eq(0)).toHaveAttr('title', 1);
        expect(imgs.eq(1)).toHaveAttr('title', 'a');
        expect(imgs.eq(2)).toHaveAttr('title', 'b');
        expect(imgs.eq(3)).toHaveAttr('title', 'c');
        expect(imgs.eq(4)).toHaveAttr('title', 'd');
      });

      context('whe has less hint than stars', function() {
        it ('receives the default hint index', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ hints: ['1', '2', '3', '4'] });

          // then
          var imgs = self.children('img');

          expect(imgs.eq(0)).toHaveAttr('title', 1);
          expect(imgs.eq(1)).toHaveAttr('title', 2);
          expect(imgs.eq(2)).toHaveAttr('title', 3);
          expect(imgs.eq(3)).toHaveAttr('title', 4);
          expect(imgs.eq(4)).toHaveAttr('title', 'gorgeous');
        });
      });

      context('whe has more stars than hints', function() {
        it ('sets star number', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ number: 6, hints: ['a', 'b', 'c', 'd', 'e'] });

          // then
          var imgs = self.children('img');

          expect(imgs.eq(0)).toHaveAttr('title', 'a');
          expect(imgs.eq(1)).toHaveAttr('title', 'b');
          expect(imgs.eq(2)).toHaveAttr('title', 'c');
          expect(imgs.eq(3)).toHaveAttr('title', 'd');
          expect(imgs.eq(4)).toHaveAttr('title', 'e');
          expect(imgs.eq(5)).toHaveAttr('title', 6);
        });
      });
    });

    describe('#mouseover', function() {
      it ('receives the score as int', function() {
        // given
        var self = $('#element').raty({
            mouseover: function(score) {
              $(this).data('score', score);
            }
          });

        // when
        self.children('img:first').mouseover();

        // then
        expect(self.data('score')).toEqual(1);
      });

      it ('receives the event', function() {
        // given
        var self = $('#element').raty({
            mouseover: function(score, evt) {
              $(this).data('evt', evt);
            }
          });

        // when
        self.children('img:first').mouseover();

        // then
        expect(self.data('evt').type).toEqual('mouseover');
      });

      context('with :cancel', function() {
        it ('receives null as score', function() {
          // given
          var self = $('#element').raty({
                cancel    : true,
                mouseover : function(score) {
                  self.data('null', score);
                }
              });

          // when
          self.children('.raty-cancel').mouseover();

          // then
          expect(self.data('null')).toBeNull();
        });
      });
    });

    describe('#mouseout', function() {
      it ('receives the score as int', function() {
        // given
        var self = $('#element').raty({
            mouseout: function(score) {
              $(this).data('score', score);
            }
          });

        // when
        self.children('img:first').mouseover().click().mouseout();

        // then
        expect(self.data('score')).toEqual(1);
      });

      it ('receives the event', function() {
        // given
        var self = $('#element').raty({
            mouseout: function(score, evt) {
              $(this).data('evt', evt);
            }
          });

        // when
        self.children('img:first').mouseover().click().mouseout();

        // then
        expect(self.data('evt').type).toEqual('mouseout');
      });

      context('without score setted', function() {
        it ('pass undefined on callback', function() {
          // given
          var self = $('#element').raty({
                cancel  : true,
                mouseout: function(score) {
                  self.data('undefined', score === undefined);
                }
              });

          // when
          self.children('img:first').mouseenter().mouseleave();

          // then
          expect(self.data('undefined')).toBeTruthy();
        });
      });

      context('with :score rated', function() {
        it ('pass the score on callback', function() {
          // given
          var self = $('#element').raty({
                score   : 1,
                mouseout: function(score) {
                  self.data('score', score);
                }
              });

          // when
          self.children('img:first').mouseenter().mouseleave();

          // then
          expect(self.data('score')).toEqual(1);
        });
      });

      context('with :cancel', function() {
        it ('receives the event', function() {
          // given
          var self = $('#element').raty({
              cancel  : true,
              mouseout: function(score, evt) {
                $(this).data('evt', evt);
              }
            });

          // when
          self.children('.raty-cancel').mouseover().click().mouseout();

          // then
          expect(self.data('evt').type).toEqual('mouseout');
        });

        context('without score setted', function() {
          it ('pass undefined on callback', function() {
            // given
            var self = $('#element').raty({
                  mouseout: function(score) {
                    self.data('undefined', score === undefined);
                  },
                  cancel  : true
                });

            // when
            self.children('.raty-cancel').mouseenter().mouseleave();

            // then
            expect(self.data('undefined')).toBeTruthy();
          });
        });

        context('with :score rated', function() {
          it ('pass the score on callback', function() {
            // given
            var self = $('#element').raty({
                  mouseout: function(score) {
                    self.data('score', score);
                  },
                  cancel  : true,
                  score   : 1
                });

            // when
            self.children('.raty-cancel').mouseenter().mouseleave();

            // then
            expect(self.data('score')).toEqual(1);
          });
        });
      });
    });

    describe('#number', function() {
      it ('changes the number of stars', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ number: 1 });

        // then
        expect(self.children('img').length).toEqual(1);
      });

      it ('accepts number as string', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ number: '10' });

        // then
        expect(self.children('img').length).toEqual(10);
      });

      it ('accepts callback', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ number: function() { return 1; } });

        // then
        expect(self.children('img').length).toEqual(1);
      });
    });

    describe('#path', function() {
      context('without last slash', function() {
        it ('receives the slash', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ path: 'path' });

          // then
          expect(self[0].opt.path).toEqual('path/');
        });
      });

      context('with last slash', function() {
        it ('keeps it', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ path: 'path/' });

          // then
          expect(self[0].opt.path).toEqual('path/');
        });
      });

      it ('changes the path', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ path: 'path' });

        // then
        expect(self.children('img')).toHaveAttr('src', 'path/star-off.png');
      });

      context('without path', function() {
        it ('sets receives empty', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ path: null });

          // then
          expect(self.children('img')).toHaveAttr('src', 'star-off.png');
        });
      });

      context('with :cancel', function() {
        it ('changes the path', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ cancel: true, path: 'path' })

          // then
          expect(self.children('.raty-cancel')).toHaveAttr('src', 'path/cancel-off.png');
        });
      });

      context('with :iconRange', function() {
        it ('changes the path', function() {
          // given
          var self = $('#element');

          // when
          self.raty({
            path     : 'path',
            iconRange: [{ range: 5 }]
          });

          // then
          expect(self.children('img')).toHaveAttr('src', 'path/star-off.png');
        });
      });
    });

    describe('#cancelOff', function() {
      it ('changes the icon', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ cancel: true, cancelOff: 'off.png' });

        // then
        expect(self.children('.raty-cancel')).toHaveAttr('src', 'off.png');
      });
    });

    describe('#cancelOn', function() {
      it ('changes the icon', function() {
        // given
        var self = $('#element').raty({ cancel: true, cancelOn: 'icon.png' });

        // when
        var cancel = self.children('.raty-cancel').mouseover();

        // then
        expect(cancel).toHaveAttr('src', 'icon.png');
      });
    });

    describe('#cancelHint', function() {
      it ('changes the cancel hint', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ cancel: true, cancelHint: 'hint' });

        // then
        expect(self.children('.raty-cancel')).toHaveAttr('title', 'hint');
      });
    });

    describe('#cancelPlace', function() {
      it ('changes the place off cancel button', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ cancel: true, cancelPlace: 'right' });

        // then
        var cancel = self.children('img:last');

        expect(cancel).toHaveClass('raty-cancel');
        expect(cancel).toHaveAttr('title', 'Cancel this rating!');
        expect(cancel).toHaveAttr('alt', 'x');
        expect(cancel).toHaveAttr('src', 'cancel-off.png');
      });
    });

    describe('#cancel', function() {
      it ('creates the element', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ cancel: true });

        // then
        var cancel = self.children('.raty-cancel');

        expect(cancel).toHaveClass('raty-cancel');
        expect(cancel).toHaveAttr('title', 'Cancel this rating!');
        expect(cancel).toHaveAttr('alt', 'x');
        expect(cancel).toHaveAttr('src', 'cancel-off.png');
      });

      context('on mouseover', function() {
        it ('turns on', function() {
          // given
          var self = $('#element').raty({ cancel: true });

          // when
          var cancel = self.children('.raty-cancel').mouseover();

          // then
          expect(cancel).toHaveAttr('src', 'cancel-on.png');
        });

        context('with :score', function() {
          it ('turns off the stars', function() {
            // given
            var self  = $('#element').raty({ score: 3, cancel: true }),
                imgs  = self.children('img:not(.raty-cancel)');

            // when
            self.children('.raty-cancel').mouseover();

            // then
            expect(imgs).toHaveAttr('src', 'star-off.png');
          });
        });
      });

      context('when :mouseout', function() {
        it ('turns on', function() {
          // given
          var self = $('#element').raty({ cancel: true });

          // when
          var cancel = self.children('.raty-cancel').mouseover().mouseout();

          // then
          expect(cancel).toHaveAttr('src', 'cancel-off.png');
        });

        context('with :score', function() {
          it ('turns the star on again', function() {
            // given
            var self  = $('#element').raty({ score: 4, cancel: true }),
                imgs  = self.children('img:not(.raty-cancel)');

            // when
            self.children('.raty-cancel').mouseover().mouseout();

            // then
            expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
            expect(imgs.eq(1)).toHaveAttr('src', 'star-on.png');
            expect(imgs.eq(2)).toHaveAttr('src', 'star-on.png');
            expect(imgs.eq(3)).toHaveAttr('src', 'star-on.png');
            expect(imgs.eq(4)).toHaveAttr('src', 'star-off.png');
          });
        });
      });

      context('on click', function() {
        it ('cancel the rating', function() {
          // given
          var self = $('#element').raty({ cancel: true, score: 1 });

          // when
          self.children('.raty-cancel').click().mouseout();

          // then
          var stars = self.children('img:not(.raty-cancel)');

          expect(stars).toHaveAttr('src', 'star-off.png');
          expect(self.children('input').val()).toEqual('');
        });
      });

      context('when starts :readOnly', function() {
        it ('starts hidden', function() {
          // given
          var self = $('#element').raty({ cancel: true, readOnly: true, path: '../img' });

          // when
          self.raty('readOnly', true);

          // then
          expect(self.children('.raty-cancel')).toBeHidden();
        });

        context('on click', function() {
          it ('does not cancel the rating', function() {
            // given
            var self = $('#element').raty({ cancel: true, readOnly: true, score: 5 });

            // when
            self.children('.raty-cancel').click().mouseout();

            // then
            var stars = self.children('img:not(.raty-cancel)');

            expect(stars).toHaveAttr('src', 'star-on.png');
            expect(self.children('input').val()).toEqual('5');
          });
        });
      });

      context('when become :readOnly', function() {
        it ('becomes hidden', function() {
          // given
          var self = $('#element').raty({ cancel: true, path: '../img' });

          // when
          self.raty('readOnly', true);

          // then
          expect(self.children('.raty-cancel')).toBeHidden();
        });
      });
    });

    describe('#targetType', function() {
      beforeEach(function() { buildDivTarget(); });

      context('with missing target', function() {
        it ('throws error', function() {
          // given
          var self = $('#element');

          // when
          var lambda = function() { self.raty({ target: 'missing' }); };

          // then
          expect(lambda).toThrow(new Error('Target selector invalid or missing!'));
        });
      });

      context('as hint', function() {
        it ('receives the hint', function() {
          // given
          var self = $('#element').raty({ target: '#hint', targetType: 'hint' });

          // when
          self.children('img:first').mouseover();

          // then
          expect($('#hint')).toHaveHtml('bad');
        });

        context('with :cancel', function() {
          it ('receives the :cancelHint', function() {
            // given
            var self = $('#element').raty({ cancel: true, target: '#hint', targetType: 'hint' });

            // when
            self.children('.raty-cancel').mouseover();

            // then
            expect($('#hint')).toHaveHtml('Cancel this rating!');
          });
        });
      });

      context('as score', function() {
        it ('receives the score', function() {
          // given
          var self = $('#element').raty({ target: '#hint', targetType: 'score' });

          // when
          self.children('img:first').mouseover();

          // then
          expect($('#hint')).toHaveHtml(1);
        });

        context('with :cancel', function() {
          it ('receives the :cancelHint', function() {
            // given
            var self = $('#element').raty({ cancel: true, target: '#hint', targetType: 'score' });

            // when
            self.children('.raty-cancel').mouseover();

            // then
            expect($('#hint')).toHaveHtml('Cancel this rating!');
          });
        });
      });

    });

    describe('#targetText', function() {
      beforeEach(function() { buildDivTarget(); });

      it ('set target with none value', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ target: '#hint', targetText: 'none' });

        // then
        expect($('#hint')).toHaveHtml('none');
      });
    });

    describe('#targetFormat', function() {
      context('with :target', function() {
        beforeEach(function() { buildDivTarget(); });

        it ('stars empty', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ target: '#hint', targetFormat: 'score: {score}' });

          // then
          expect($('#hint')).toBeEmpty();
        });

        context('with missing score key', function() {
          it ('throws error', function() {
            // given
            var self = $('#element');

            // when
            var lambda = function() { self.raty({ target: '#hint', targetFormat: '' }); };

            // then
            expect(lambda).toThrow(new Error('Template "{score}" missing!'));
          });
        });

        context('on mouseover', function() {
          it ('set target with format on mouseover', function() {
            // given
            var self = $('#element').raty({ target: '#hint', targetFormat: 'score: {score}' });

            // when
            self.children('img:first').mouseover();

            // then
            expect($('#hint')).toHaveHtml('score: bad');
          });
        });

        context('on mouseout', function() {
          it ('clears the target', function() {
            // given
            var self = $('#element').raty({
                  target      : '#hint',
                  targetFormat: 'score: {score}'
                });

            // when
            self.children('img:first').mouseover().mouseout();

            // then
            expect($('#hint')).toBeEmpty();
          });

          context('with :targetKeep', function() {
            context('without score', function() {
              it ('clears the target', function() {
                // given
                var self = $('#element').raty({
                      target      : '#hint',
                      targetFormat: 'score: {score}',
                      targetKeep  : true
                    });

                // when
                self.children('img:first').mouseover().mouseleave();

                // then
                expect($('#hint')).toBeEmpty();
              });
            });

            context('with score', function() {
              it ('keeps the template', function() {
                // given
                var self = $('#element').raty({
                      score       : 1,
                      target      : '#hint',
                      targetFormat: 'score: {score}',
                      targetKeep  : true
                    });

                // when
                self.children('img:first').mouseover().mouseleave();

                // then
                expect($('#hint')).toHaveHtml('score: bad');
              });
            });
          });
        });
      });
    });

    describe('#precision', function() {
      beforeEach(function() { buildDivTarget(); });

      it ('enables the :half options', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ precision: true });

        // then
        expect(self.data('settings').half).toBeTruthy();
      });

      it ('changes the :targetType to score', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ precision: true });

        // then
        expect(self.data('settings').targetType).toEqual('score');
      });

      context('with :target', function() {
        context('with :targetKeep', function() {
          context('with :score', function() {
            it ('sets the float with one fractional number', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                precision : true,
                score     : 1.23,
                target    : '#hint',
                targetKeep: true,
                targetType: 'score'
              });

              // then
              expect($('#hint')).toHaveHtml('1.2');
            });
          });
        });
      });
    });

    describe('#target', function() {
      context('on mouseover', function() {
        context('as div', function() {
          beforeEach(function() { buildDivTarget(); });

          it ('sets the hint', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').mouseover();

            // then
            expect($('#hint')).toHaveHtml('bad');
          });
        });

        context('as text field', function() {
          beforeEach(function() { buildTextTarget(); });

          it ('sets the hint', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').mouseover();

            // then
            expect($('#hint')).toHaveValue('bad');
          });
        });

        context('as textarea', function() {
          beforeEach(function() { buildTextareaTarget(); });

          it ('sets the hint', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').mouseover();

            // then
            expect($('#hint')).toHaveValue('bad');
          });
        });

        context('as combobox', function() {
          beforeEach(function() { buildComboboxTarget(); });

          it ('sets the hint', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').mouseover();

            // then
            expect($('#hint')).toHaveValue('bad');
          });
        });
      });

      context('on mouseout', function() {
        context('as div', function() {
          beforeEach(function() { buildDivTarget(); });

          it ('gets clear', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').mouseover().click().mouseleave();

            // then
            expect($('#hint')).toBeEmpty();
          });
        });

        context('as textarea', function() {
          beforeEach(function() { buildTextareaTarget(); });

          it ('gets clear', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').click().mouseover().mouseleave();

            // then
            expect($('#hint')).toHaveValue('');
          });
        });

        context('as text field', function() {
          beforeEach(function() { buildTextTarget(); });

          it ('gets clear', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').click().mouseover().mouseleave();

            // then
            expect($('#hint')).toHaveValue('');
          });
        });

        context('as combobox', function() {
          beforeEach(function() { buildComboboxTarget(); });

          it ('gets clear', function() {
            // given
            var self = $('#element').raty({ target: '#hint' });

            // when
            self.children('img:first').click().mouseover().mouseleave();

            // then
            expect($('#hint')).toHaveValue('');
          });
        });
      });
    });

    describe('#size', function() {
      it ('calculate the right icon size', function() {
        // given
        var self  = $('#element'),
            size  = 24,
            stars = 5,
            space = 4;

        // when
        self.raty({ size: size });

        // then
        expect(self.width()).toEqual((stars * size) + (stars * space));
      });

      context('with :cancel', function() {
        it ('addes the cancel and space witdh', function() {
          // given
          var self    = $('#element'),
              size    = 24,
              stars   = 5,
              cancel  = size,
              space   = 4;

          // when
          self.raty({ cancel: true, size: size });

          // then
          expect(self.width()).toEqual(cancel + space + (stars * size) + (stars * space));
        });
      });
    });

    describe('#space', function() {
      context('when off', function() {
        it ('takes off the space', function() {
          // given
          var self  = $('#element');
              size  = 16,
              stars  = 5;

          // when
          self.raty({ space: false });

          // then
          expect(self.width()).toEqual(size * stars);
        });

        context('with :cancel', function() {
          it ('takes off the space', function() {
            // given
            var self    = $('#element');
                size    = 16,
                stars   = 5,
                cancel  = size;

            // when
            self.raty({ cancel: true, space: false });

            // then
            expect(self.width()).toEqual(cancel + (size * stars));
          });
        });
      });
    });

    describe('#single', function() {
      context('on mouseover', function() {
        it ('turns on just one icon', function() {
          // given
          var self = $('#element').raty({ single: true }),
              imgs = self.children('img');

          // when
          imgs.eq(2).mouseover();

          // then
          expect(imgs.eq(0)).toHaveAttr('src', 'star-off.png');
          expect(imgs.eq(1)).toHaveAttr('src', 'star-off.png');
          expect(imgs.eq(2)).toHaveAttr('src', 'star-on.png');
          expect(imgs.eq(3)).toHaveAttr('src', 'star-off.png');
          expect(imgs.eq(4)).toHaveAttr('src', 'star-off.png');
        });

        context('with :iconRange', function() {
          it ('shows just on icon', function() {
            // given
            var self = $('#element').raty({
                  single    : true,
                  iconRange  : [
                    { range: 2, on: 'a.png', off: 'a-off.png' },
                    { range: 3, on: 'b.png', off: 'b-off.png' },
                    { range: 4, on: 'c.png', off: 'c-off.png' },
                    { range: 5, on: 'd.png', off: 'd-off.png' }
                  ]
                }),
                imgs = self.children('img');

            // when
            imgs.eq(3).mouseover();

            // then
            expect(imgs.eq(0)).toHaveAttr('src', 'a-off.png');
            expect(imgs.eq(1)).toHaveAttr('src', 'a-off.png');
            expect(imgs.eq(2)).toHaveAttr('src', 'b-off.png');
            expect(imgs.eq(3)).toHaveAttr('src', 'c.png');
            expect(imgs.eq(4)).toHaveAttr('src', 'd-off.png');
          });
        });
      });

      context('on click', function() {
        context('on mouseout', function() {
          it ('keeps the score', function() {
            // given
            var self = $('#element').raty({ single: true })
                imgs = self.children('img');

            // when
            imgs.eq(2).mouseover().click().mouseleave();

            // then
            expect(imgs.eq(0)).toHaveAttr('src', 'star-off.png');
            expect(imgs.eq(1)).toHaveAttr('src', 'star-off.png');
            expect(imgs.eq(2)).toHaveAttr('src', 'star-on.png');
            expect(imgs.eq(3)).toHaveAttr('src', 'star-off.png');
            expect(imgs.eq(4)).toHaveAttr('src', 'star-off.png');
          });

          context('and :iconRange', function() {
            it ('keeps the score', function() {
              // given
              var self = $('#element').raty({
                    single    : true,
                    iconRange  : [
                      { range: 2, on: 'a.png', off: 'a-off.png' },
                      { range: 3, on: 'b.png', off: 'b-off.png' },
                      { range: 4, on: 'c.png', off: 'c-off.png' },
                      { range: 5, on: 'd.png', off: 'd-off.png' }
                    ]
                  }),
                  imgs = self.children('img');

              // when
              imgs.eq(3).mouseover().click().mouseleave();

              // then
              expect(imgs.eq(0)).toHaveAttr('src', 'a-off.png');
              expect(imgs.eq(1)).toHaveAttr('src', 'a-off.png');
              expect(imgs.eq(2)).toHaveAttr('src', 'b-off.png');
              expect(imgs.eq(3)).toHaveAttr('src', 'c.png');
              expect(imgs.eq(4)).toHaveAttr('src', 'd-off.png');
            });
          });
        });
      });
    });

    describe('#width', function() {
      it ('set custom width', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ width: 200 });

        // then
        expect(self.width()).toEqual(200);
      });

      describe('when it is false', function() {
        it ('does not apply the style', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ width: false });

          // then
          expect(self).not.toHaveCss({ width: '100px' });
        });
      });

      describe('when :readOnly', function() {
        it ('set custom width when readOnly', function() {
          // given
          var self = $('#element');

          // when
          self.raty({ readOnly: true, width: 200 });

          // then
          expect(self.width()).toEqual(200);
        });
      });
    });

    describe('#half', function() {
      context('as false', function() {
        context('#halfShow', function() {
          context('as false', function() {
            it ('rounds down while less the full limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : false,
                halfShow: false,
                round   : { down: .25, full: .6, up: .76 },
                score   : .5 // score.5 < full.6 === 0
              });

              var imgs = self.children('img');

              // then
              expect(imgs.eq(0)).toHaveAttr('src', 'star-off.png');
              expect(imgs.eq(1)).toHaveAttr('src', 'star-off.png');
            });

            it ('rounds full when equal the full limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : false,
                halfShow: false,
                round   : { down: .25, full: .6, up: .76 },
                score   : .6 // score.6 == full.6 === 1
              });

              var imgs = self.children('img');

              // then
              expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
            });
          });
        });
      });

      context('as true', function() {
        context('#halfShow', function() {
          context('as false', function() {
            it ('ignores round down while less down limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: false,
                round   : { down: .25, full: .6, up: .76 },
                score   : .24 // score.24 < down.25 === 0
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-off.png');
              expect(self.children('input').val()).toEqual('0.24');
            });

            it ('ignores half while greater then down limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: false,
                round   : { down: .25, full: .6, up: .76 },
                score   : .26 // score.26 > down.25 and score.6 < up.76 === .5
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-off.png');
              expect(self.children('input').val()).toEqual('0.26');
            });

            it ('ignores half while equal full limit, ignoring it', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: false,
                round   : { down: .25, full: .6, up: .76 },
                score   : .6 // score.6 > down.25 and score.6 < up.76 === .5
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
              expect(self.children('input').val()).toEqual('0.6');
            });

            it ('ignores half while greater than down limit and less than up limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: false,
                round   : { down: .25, full: .6, up: .76 },
                score   : .75 // score.75 > down.25 and score.75 < up.76 === .5
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
              expect(self.children('input').val()).toEqual('0.75');
            });

            it ('ignores full while equal or greater than up limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: false,
                round   : { down: .25, full: .6, up: .76 },
                score   : .76 // score.76 == up.76 === 1
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
            });
          });

          context('as true', function() {
            it ('rounds down while less down limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: true,
                round   : { down: .25, full: .6, up: .76 },
                score   : .24 // score.24 < down.25 === 0
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-off.png');
            });

            it ('receives half while greater then down limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: true,
                round    : { down: .25, full: .6, up: .76 },
                score    : .26 // score.26 > down.25 and score.6 < up.76 === .5
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-half.png');
            });

            it ('receives half while equal full limit, ignoring it', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: true,
                round   : { down: .25, full: .6, up: .76 },
                score   : .6 // score.6 > down.25 and score.6 < up.76 === .5
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-half.png');
            });

            it ('receives half while greater than down limit and less than up limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: true,
                round   : { down: .25, full: .6, up: .76 },
                score   : .75 // score.75 > down.25 and score.75 < up.76 === .5
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-half.png');
            });

            it ('receives full while equal or greater than up limit', function() {
              // given
              var self = $('#element');

              // when
              self.raty({
                half    : true,
                halfShow: true,
                round   : { down: .25, full: .6, up: .76 },
                score   : .76 // score.76 == up.76 === 1
              });

              // then
              var imgs = self.children('img');

              expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
            });
          });
        });

        context('with :target', function() {
          beforeEach(function() { buildDivTarget(); });

          context('and :precision', function() {
            context('and :targetType as score', function() {
              context('and :targetKeep', function() {
                context('and :targetType as score', function() {
                  it ('set .5 increment value target with half option and no precision', function() {
                    // given
                    var self = $('#element');

                    // when
                    self.raty({
                      half      : true,
                      precision : false,
                      score     : 1.5,
                      target    : '#hint',
                      targetKeep: true,
                      targetType: 'score'
                    });

                    // then
                    expect($('#hint')).toHaveHtml('1.5');
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  describe('class bind', function() {
    beforeEach(function() {
      $('body').append('<div class="element"></div><div class="element"></div>');
    });

    afterEach(function() {
      $('.element').remove();
    });

    it ('is chainable', function() {
      // given
      var self = $('.element');

      // when
      var refs = self.raty();

      // then
      expect(refs.eq(0)).toBe(self.eq(0));
      expect(refs.eq(1)).toBe(self.eq(1));
    });

    it ('creates the default markup', function() {
      // given
      var self = $('.element');

      // when
      self.raty();

      // then
      var imgs  = self.eq(0).children('img'),
          score = self.eq(0).children('input');

      expect(imgs.eq(0)).toHaveAttr('title', 'bad');
      expect(imgs.eq(1)).toHaveAttr('title', 'poor');
      expect(imgs.eq(2)).toHaveAttr('title', 'regular');
      expect(imgs.eq(3)).toHaveAttr('title', 'good');
      expect(imgs.eq(4)).toHaveAttr('title', 'gorgeous');
      expect(imgs).toHaveAttr('src', 'star-off.png');
      expect(score).toHaveAttr('type', 'hidden');
      expect(score).toHaveAttr('name', 'score');
      expect(score.val()).toEqual('');

      imgs  = self.eq(1).children('img');
      score = self.eq(0).children('input');

      expect(imgs.eq(0)).toHaveAttr('title', 'bad');
      expect(imgs.eq(1)).toHaveAttr('title', 'poor');
      expect(imgs.eq(2)).toHaveAttr('title', 'regular');
      expect(imgs.eq(3)).toHaveAttr('title', 'good');
      expect(imgs.eq(4)).toHaveAttr('title', 'gorgeous');
      expect(imgs).toHaveAttr('src', 'star-off.png');
      expect(score).toHaveAttr('type', 'hidden');
      expect(score).toHaveAttr('name', 'score');
      expect(score.val()).toEqual('');
    });
  });

  describe('functions', function() {
    describe('GET #score', function() {
      it ('accepts number as string', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ score: '1' });

        // then
        expect(self.children('input')).toHaveValue(1);
      });

      it ('accepts float string', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ score: '1.5' });

        // then
        expect(self.children('input')).toHaveValue(1.5);
      });

      context('with integer score', function() {
        it ('gets as int', function() {
          // given
          var self = $('#element').raty({ score: 1 });

          // when
          var score = self.raty('score');

          // then
          expect(score).toEqual(1);
        });
      });

      context('with float score', function() {
        it ('gets as float', function() {
          // given
          var self = $('#element').raty({ score: 1.5 });

          // when
          var score = self.raty('score');

          // then
          expect(score).toEqual(1.5);
        });
      });

      context('with score zero', function() {
        it ('gets null to emulate cancel', function() {
          // given
          var self = $('#element').raty({ score: 0 });

          // when
          var score = self.raty('score');

          // then
          expect(score).toEqual(null);
        });
      });

      context('with score greater than :numberMax', function() {
        it ('gets the max', function() {
          // given
          var self = $('#element').raty({ number: 50, score: 50 });

          // when
          var score = self.raty('score');

          // then
          expect(score).toEqual(self.data('settings').numberMax);
        });
      });
    });

    describe('SET #score', function() {
      it ('sets the score', function() {
        // given
        var self = $('#element');

        // when
        self.raty({ score: 1 });

        // then
        expect(self.raty('score')).toEqual(1);
      });

      describe('with :click', function() {
        it ('calls the click callback', function() {
          // given
          var self = $('#element').raty({
                click: function(score) {
                  $(this).data('score', score);
                }
              });

          // when
          self.raty('score', 5);

          // then
          expect(self.children('img')).toHaveAttr('src', 'star-on.png');
        });
      });

      describe('without :click', function() {
        it ('does not throw exception', function() {
          // given
          var self = $('#element').raty();

          // when
          var lambda = function() { self.raty('score', 1); };

          // then
          expect(lambda).not.toThrow(new Error('You must add the "click: function(score, evt) { }" callback.'));
        });
      });

      describe('with :readOnly', function() {
        it ('does not set the score', function() {
          // given
          var self = $('#element').raty({ readOnly: true });

          // when
          self.raty('score', 5);

          // then
          expect(self.children('img')).toHaveAttr('src', 'star-off.png');
        });
      });
    });

    describe('#set', function() {
      it ('is chainable', function() {
        // given
        var self = $('#element').raty();

        // when
        var ref = self.raty('set', { number: 1 });

        // then
        expect(ref).toBe(self);
      });

      it ('changes the declared options', function() {
        // given
        var self = $('#element').raty();

        // when
        var ref = self.raty('set', { scoreName: 'change-just-it' });

        // then
        expect(ref.children('input')).toHaveAttr('name', 'change-just-it');
      });

      it ('does not change other none declared options', function() {
        // given
        var self = $('#element').raty({ number: 6 });

        // when
        var ref = self.raty('set', { scoreName: 'change-just-it' });

        // then
        expect(ref.children('img').length).toEqual(6);
      });

      context('with external bind on wrapper', function() {
        it ('keeps it', function() {
          // given
          var self = $('#element').on('click', function() {
            $(this).data('externalClick', true);
          }).raty();

          // when
          self.raty('set', {}).click();

          // then
          expect(self.data('externalClick')).toBeTruthy();
        });
      });

      context('when :readOnly by function', function() {
        it ('is removes the readonly data info', function() {
          // given
          var self = $('#element').raty().raty('readOnly', true);

          // when
          var ref = self.raty('set', { readOnly: false });

          // then
          expect(self).not.toHaveData('readonly');
        });
      });
    });

    describe('#readOnly', function() {
      context('changes to true', function() {
        it ('sets score as readonly', function() {
          // given
          var self = $('#element').raty();

          // when
          self.raty('readOnly', true);

          // then
          expect(self.children('input')).toHaveAttr('readonly', 'readonly');
        });

        it ('removes the pointer cursor', function() {
          // given
          var self = $('#element').raty();

          // when
          self.raty('readOnly', true);

          // then
          expect(self).not.toHaveCss({ cursor: 'pointer' });
          expect(self).not.toHaveCss({ cursor: 'default' });
        });

        it ('Applies "Not rated yet!" on stars', function() {
          // given
          var self = $('#element').raty();

          // when
          self.raty('readOnly', true);

          // then
          expect(self.children('img')).toHaveAttr('title', 'Not rated yet!');
        });

        it ('avoids trigger mouseover', function() {
          // given
          var self = $('#element').raty(),
              imgs = self.children('img');

          self.raty('readOnly', true);

          // when
          imgs.eq(0).mouseover();

          // then
          expect(imgs).toHaveAttr('src', 'star-off.png');
        });

        it ('avoids trigger click', function() {
          // given
          var self = $('#element').raty(),
              imgs = self.children('img');

          self.raty('readOnly', true);

          // when
          imgs.eq(0).mouseover().click().mouseleave();

          // then
          expect(imgs).toHaveAttr('src', 'star-off.png');
          expect(self.children('input').val()).toEqual('');
        });

        context('with :score', function() {
          it ('applies the score title on stars', function() {
            // given
            var self = $('#element').raty({ score: 1 });

            // when
            self.raty('readOnly', true);

            // then
            expect(self.children('img')).toHaveAttr('title', 'bad');
          });
        });

        context('with :cancel', function() {
          it ('hides the button', function() {
            // given
            var self = $('#element').raty({ cancel: true, path: '../lib/img' });

            // when
            self.raty('readOnly', true);

            // then
            expect(self.children('.raty-cancel')).toBeHidden();
          });
        });

        context('with external bind on wrapper', function() {
          it ('keeps it', function() {
            // given
            var self = $('#element').on('click', function() {
              $(this).data('externalClick', true);
            }).raty();

            // when
            self.raty('readOnly', true).click();

            // then
            expect(self.data('externalClick')).toBeTruthy();
          });
        });

        context('with external bind on stars', function() {
          it ('keeps it', function() {
            // given
            var self = $('#element').raty(),
                star = self.children('img').first();

            star.on('click', function() {
              self.data('externalClick', true);
            });

            // when
            self.raty('readOnly', true);
            star.click();

            // then
            expect(self.data('externalClick')).toBeTruthy();
          });
        });
      });

      context('changes to false', function() {
        it ('removes the :readOnly of the score', function() {
          // given
          var self = $('#element').raty();

          // when
          self.raty('readOnly', false);

          // then
          expect(self.children('input')).not.toHaveAttr('readonly', 'readonly');
        });

        it ('applies the pointer cursor on wrapper', function() {
          // given
          var self = $('#element').raty();

          // when
          self.raty('readOnly', false);

          // then
          expect(self).toHaveCss({ cursor: 'pointer' });
        });

        it ('Removes the "Not rated yet!" off the stars', function() {
          // given
          var self   = $('#element').raty({ readOnly: true }),
              imgs  = self.children('img');

          // when
          self.raty('readOnly', false);

          // then
          expect(imgs.eq(0)).toHaveAttr('title', 'bad');
          expect(imgs.eq(1)).toHaveAttr('title', 'poor');
          expect(imgs.eq(2)).toHaveAttr('title', 'regular');
          expect(imgs.eq(3)).toHaveAttr('title', 'good');
          expect(imgs.eq(4)).toHaveAttr('title', 'gorgeous');
        });

        it ('triggers mouseover', function() {
          // given
          var self = $('#element').raty({ readOnly: true }),
              imgs = self.children('img');

          self.raty('readOnly', false);

          // when
          imgs.eq(0).mouseover();

          // then
          expect(imgs.eq(0)).toHaveAttr('src', 'star-on.png');
        });

        it ('triggers click', function() {
          // given
          var self = $('#element').raty({ readOnly: true }),
              imgs = self.children('img');

          self.raty('readOnly', false);

          // when
          imgs.eq(0).mouseover().click().mouseleave();

          // then
          expect(imgs).toHaveAttr('src', 'star-on.png');
          expect(self.children('input')).toHaveValue('1');
        });

        context('with :score', function() {
          it ('removes the score title off the stars', function() {
            // given
            var self = $('#element').raty({ readOnly: true, score: 3 });

            // when
            self.raty('readOnly', false);

            // then
            var imgs = self.children('img')

            expect(imgs.eq(0)).toHaveAttr('title', 'bad');
            expect(imgs.eq(1)).toHaveAttr('title', 'poor');
            expect(imgs.eq(2)).toHaveAttr('title', 'regular');
            expect(imgs.eq(3)).toHaveAttr('title', 'good');
            expect(imgs.eq(4)).toHaveAttr('title', 'gorgeous');
          });
        });

        context('with :cancel', function() {
          it ('shows the button', function() {
            // given
            var self = $('#element').raty({ readOnly: true, cancel: true, path: '../lib/img' });

            // when
            self.raty('readOnly', false);

            // then
            expect(self.children('.raty-cancel')).toBeVisible();
            expect(self.children('.raty-cancel')).not.toHaveCss({ display: 'block' });
          });

          it ('rebinds the mouseover', function() {
            // given
            var self   = $('#element').raty({ readOnly: true, cancel: true }),
                cancel = self.children('.raty-cancel'),
                imgs   = self.children('img:not(.raty-cancel)');

            // when
            self.raty('readOnly', false);

            cancel.mouseover();

            // then
            expect(cancel).toHaveAttr('src', 'cancel-on.png');
            expect(imgs).toHaveAttr('src', 'star-off.png');
          });

          it ('rebinds the click', function() {
            // given
            var self = $('#element').raty({ readOnly: true, cancel: true, score: 5 }),
                imgs = self.children('img:not(.raty-cancel)');

            // when
            self.raty('readOnly', false);

            self.children('.raty-cancel').click().mouseout();

            // then
            expect(imgs).toHaveAttr('src', 'star-off.png');
          });
        });
      });
    });

    describe('#cancel', function() {
      describe('with :readOnly', function() {
        it ('does not cancel', function() {
          // given
          var self = $('#element').raty({ readOnly: true, score: 5 });

          // when
          self.raty('cancel');

          // then
          expect(self.children('img')).toHaveAttr('src', 'star-on.png');
        });
      });

      context('without click trigger', function() {
        it ('cancel the rating', function() {
          // given
          var self = $('#element').raty({
                score: 1,
                click: function() {
                  $(this).data('clicked', true);
                }
              });

          // when
          self.raty('cancel');

          // then
          expect(self.children('img')).toHaveAttr('src', 'star-off.png');
          expect(self.children('input').val()).toEqual('');
          expect(self.data('clicked')).toBeFalsy();
        });
      });

      context('with click trigger', function() {
        it ('cancel the rating', function() {
          // given
          var self = $('#element').raty({
                score: 1,
                click: function() {
                  $(this).data('clicked', true);
                }
              });

          // when
          self.raty('cancel', true);

          // then
          expect(self.children('img')).toHaveAttr('src', 'star-off.png');
          expect(self.children('input').val()).toEqual('');
          expect(self.data('clicked')).toBeTruthy();
        });
      });

      context('with :target', function() {
        beforeEach(function() { buildDivTarget(); });

        context('and :targetKeep', function() {
          it ('sets the :targetText on target', function() {
            // given
            var hint = $('#hint').html('dirty'),
                self = $('#element').raty({
                  cancel    : true,
                  target    : '#hint',
                  targetKeep: true,
                  targetText: 'targetText'
                });

            // when
            self.raty('cancel');

            // then
            expect(hint).toHaveHtml('targetText');
          });
        });
      });
    });

    describe('#click', function() {
      it ('clicks on star', function() {
        // given
        var self = $('#element').raty({
          click: function() {
            $(this).data('clicked', true);
          }
        });

        // when
        self.raty('click', 1);

        // then
        expect(self.children('img')).toHaveAttr('src', 'star-on.png');
        expect(self.data('clicked')).toBeTruthy();
      });

      it ('receives the score', function() {
        // given
        var self = $('#element').raty({
          click: function(score) {
            $(this).data('score', score);
          }
        });

        // when
        self.raty('click', 1);

        // then
        expect(self.data('score')).toEqual(1);
      });

      it ('receives the event', function() {
        // given
        var self = $('#element').raty({
          click: function(score, evt) {
            $(this).data('evt', evt);
          }
        });

        // when
        self.raty('click', 1);

        // then
        expect(self.data('evt').type).toEqual('click');
      });

      describe('with :readOnly', function() {
        it ('does not set the score', function() {
          // given
          var self = $('#element').raty({ readOnly: true });

          // when
          self.raty('click', 1);

          // then
          expect(self.children('img')).toHaveAttr('src', 'star-off.png');
        });
      });

      context('without :click', function() {
        it ('throws error', function() {
          // given
          var self = $('#element').raty();

          // when
          var lambda = function() { self.raty('click', 1); };

          // then
          expect(lambda).toThrow(new Error('You must add the "click: function(score, evt) { }" callback.'));
        });
      });

      context('with :target', function() {
        beforeEach(function() { buildDivTarget(); });

        context('and :targetKeep', function() {
          it ('sets the score on target', function() {
            // given
            var self = $('#element').raty({
              target    : '#hint',
              targetKeep: true,
              click     : function() { }
            });

            // when
            self.raty('click', 1);

            // then
            expect($('#hint')).toHaveHtml('bad');
          });
        });
      });
    });

    describe('#reload', function() {
      it ('is chainable', function() {
        // given
        var self = $('#element').raty();

        // when
        var ref = self.raty('reload');

        // then
        expect(ref).toBe(self);
      });

      it ('reloads with the same configuration', function() {
        // given
        var self = $('#element').raty({ number: 6 });

        // when
        var ref = self.raty('reload');

        // then
        expect(ref.children('img').length).toEqual(6);
      });

      context('when :readOnly by function', function() {
        it ('is removes the readonly data info', function() {
          // given
          var self = $('#element').raty().raty('readOnly', true);

          // when
          var ref = self.raty('reload');

          // then
          expect(self).not.toHaveData('readonly');
        });
      });
    });

    describe('#destroy', function() {
      it ('is chainable', function() {
        // given
        var self = $('#element').raty();

        // when
        var ref = self.raty('destroy');

        // then
        expect(ref).toBe(self);
      });

      it ('clear the content', function() {
        // given
        var self = $('#element').raty();

        // when
        self.raty('destroy');

        // then
        expect(self).toBeEmpty();
      });

      it ('removes the trigger mouseleave', function() {
        // given
        var self = $('#element').raty({
              mouseout: function() {
                console.log(this);
                $(this).data('mouseleave', true);
              }
            });

        self.raty('destroy');

        // when
        self.mouseleave();

        // then
        expect(self.data('mouseleave')).toBeFalsy();
      });

      it ('resets the style attributes', function() {
        // given
        var self = $('#element').css({ cursor: 'help', width: 10 }).raty();

        // when
        self.raty('destroy');

        // then
        expect(self[0].style.cursor).toEqual('help');
        expect(self[0].style.width).toEqual('10px');
      });
    });
  });
});
