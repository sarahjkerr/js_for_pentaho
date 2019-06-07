//STEP ONE: PRODUCE UNIQUE ARRAYS
// Pentaho reads in the field values as a string. Turn the string into an array. Pentaho can't call a filter method on a blank array,
// so if a row is null, this puts in a placeholder we delete later on.
``` function makeArray(x) {
	if (x !== null) {
		var nowArray = x.split(",");
		return nowArray
	} else {
		var placeHolder = ["This","Is","A","Placeholder","To","Delete"];
		return placeHolder
	}
}
```


// Create a var that stores the array so that it can be easily called later.
```var isNowArrayActivityIDs = makeArray(All_Program_IDs_Activity)
var isNowArrayPartIDs = makeArray(All_Program_IDs_Partner)```

```
// Iterate over the array, identify duplicate values, and remove them.
```


function uniq(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}
```
// Apply the duplicate finder to the array variable created from PHPC input.

```var dedupedActivityIDs = uniq(isNowArrayActivityIDs)
var dedupedPartIDs = uniq(isNowArrayPartIDs)```


```
//STEP TWO: COMPARE THE ARRAYS V2
//Function that looks at program IDs for activities and pops the ones that don't align with partner PPA program IDs
```
function difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  return result;
}

```
//Var that returns string of mismatched IDs
```
var mismatchedProgramsActivities = difference(dedupedActivityIDs,dedupedPartIDs)
