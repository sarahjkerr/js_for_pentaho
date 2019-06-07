var changeServiceDataType = makeList(ServiceType)

function makeList(x){
    var listVersion = x.split(" ");
    return listVersion
}

var isItOneWord = checker(changeServiceDataType)

function checker(value){
    if (value.length == 1) {
        return true;
    }
    return false;
}

var ServiceType = replaceTreatment(ServiceType)

function replaceTreatment(u){
    if (isItOneWord == true) {
        var updatedService = u.replace(/\b(treatment|Treatment)\b/i,"Mental Health");
        return updatedService
    }
    else {
        return ServiceType;
    }
}
