Write aggregation queries for following:
find largest population city in every state:
*db.zips.aggregate([{$group:{_id:"$city" , largest:{$max:"$pop"}}}])*


find average population per state by cities
*db.zips.aggregate([{$group:{_id:"$city" , average:{$avg:"$pop"}}}])*


find the lowest population city
*db.zips.aggregate([{$group:{_id:"$city" , lowest:{$min:"$pop"}}}])*