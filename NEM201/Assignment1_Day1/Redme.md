Write following queries:
Find all the countries in region "Asia":- 
**db.CountrysDatabase.find({"region":"Asia"})**


Find all the countries with currency: "EUR" :-
**db.CountrysDatabase.find({"currency":"EUR"})**


Find all the countries whose timezone's gmtOffset is 3600 :- 
**db.CountrysDatabase.find({"timezones.gmtOffset":3600})**


Find all the countries whose timezone's gmtOffset is 3600 AND timezone name is Central European Time (or CET) :-
**db.CountrysDatabase.find({$and:[{"timezones.gmtOffset":3600},{"timezones.tzName":"Central European Time"}]})**


Find All the countries with more than 1 time zone (hint: size of array)
**db.CountrysDatabase.find({$expr:{$gt:[{$size:"$timezones"}, 1]}})**


Find All the countries with "Korean translation (KR)
Work with the data, use rest of the operators to find any other data for practice you want