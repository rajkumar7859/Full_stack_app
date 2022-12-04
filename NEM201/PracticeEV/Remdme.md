1.Find total population of all the countries in Easter Europe Region:-
*db.Practic_ev.aggregate([{$match: {Region: "EASTERN EUROPE"}},{$group: {_id: {Country:"$Country" ,Region:"$Region"}, total: {$sum:"$Population"}}}])*

2.Find Average population per country in all regions:-
*db.Practic_ev.aggregate([{$group: {_id:{Region:"$Region" ,Country:"$Country"}, average: {$avg:"$Population"}}}])*

3.Find Average Birth rate of entire world:-
*db.Practic_ev.aggregate([{$group: {_id:{ Country:"$Country"}, average: {$avg:"$Birthrate"}}} ])*

.4 Find all the countries , sort them by GDP ascending , population descending .take top 10 countries out
*db.Practic_ev.aggregate([{$group: {_id:{Country: "$Country"}}},{$sort:{GDP:1}} ,{$sort: {Population:-1}} ,{$limit:10}])*


5.Find all the countries Birthrate lower than 20 , group them bu region , find lowest birthrate region:
*db.Practic_ev.aggregate([{$match:{Birthrate:{$lt:20}}}, {$group:{_id:"$Region" ,lowest:{$min:"$Birthrate"}} } ])*

6.Find sum of population by name of region :-
*db.Practic_ev.aggregate([{$group:{_id:{Region:"$Region"} ,sum:{$sum:"$Population"}}}])*


7.Find average birthrate accorfion to region , sort them but lowest first:-
*db.Practic_ev.aggregate([{$group:{_id:{Region:"$Region"} ,average:{$avg:"$Birthrate"}}} ,{$sort:{"Birthrate":-1}}])* 

.8 Sort all countries by population descending, get 11 to 20 position countries from these:-
*db.Practic_ev.aggregate([{$group:{_id:{Country:"$Country"}}},{$sort:{"Population":-1}} ,{$skip:10} , {$limit:10}])*

9.Write an update query for: find all the countries with phones per thousand greater than 400, set it to 1000:-
*db.Practic_ev.aggregate([{$match: {PhonesPerThousand: { $gt:400  } } } ,{$set:{"PhonesPerThousand":1000}}])*

10.Write an update query for: replace all the countries Climate to 0:-
*db.Practic_ev.updateMany({}, {$set: {"Climate":0}})* //its not showing in vs code in db.json file but it's updating the climate pleace check it on mongodb