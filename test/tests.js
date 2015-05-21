// Test library deps
var expect = require('chai').expect;
var assert = require('chai').assert;
var _ = require('lodash-node');


// Functions being tested
var meerkatTalkOne = require('../lib/excercise1').meerkatTalkOne;
var meerkatTalkTwo = require('../lib/excercise1').meerkatTalkTwo;
var chooseAnimal = require('../lib/excercise2').chooseAnimal;
var animalStats = require('../lib/excercise3').animalStats;
var animalIndexing = require('../lib/excercise3').animalIndexing;
var numDays = require('../lib/excercise4').numDays;

/*
describe('excercise 1', function() {
  describe('#meerkatTalkOne()', function() {
    expect(meerkatTalkOne()).to.equal('chirp chirp chirp');
  });
  describe('#meerkatTalkTwo()', function() {
    expect(meerkatTalkTwo()).to.equal('chirp chirp chirp chirp chirp chirp chirp chirp chirp');
  });
});
*/

/*
describe('excercise 2', function() {
  describe('#chooseAnimal()', function() {
    var valid_results = [ "elephant", "penguin", "eagle", "camel" ];
    var animal = chooseAnimal();
    assert.include(valid_results, animal, 'A valid animal must be returned'); 
  });
});
*/

describe('excercise 3', function() {
  var animalExhibitStats = {
    "numberOpen": 13,
    "number closed": 2,
    "petting-zoo-open": true,
    "mostPopular": "Lucky the Emperor Penguin",
    "2ndMostPopular": "Dumbo the Depressed Donkey"
  };

  describe('#animalStats()', function() {
    assert(_.isEqual(animalStats(), animalExhibitStats),
      'animalExhibitStats value should not change'
    );
  });
  describe('#animalIndexing()', function() {
    animalExhibitStats.mostPopular = null;
    animalExhibitStats['2ndMostPopular'] = null;
    assert(_.isEqual(animalIndexing(), animalExhibitStats),
      'animalExhibitStats value should not change'
    );
  });
});

describe('excercise 4', function() {
  describe('#numDays()', function() {
    expect(numDays()).to.equal(7);
  });
});