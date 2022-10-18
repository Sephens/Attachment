console.log('%cHello Steve','color:blue; font-size:30px;');
var personArr = [
    {
    "personId": 123,
    "name": "Jhon",
    "city": "Melbourne",
    "phoneNo": "1234567890"
    },
    {
    "personId": 124,
    "name": "Amelia",
    "city": "Sydney",
    "phoneNo": "1234567890"
    },
    {
    "personId": 125,
    "name": "Emily",
    "city": "Perth",
    "phoneNo": "1234567890"
    },
    {
    "personId": 126,
    "name": "Abraham",
    "city": "Perth",
    "phoneNo": "1234567890"
    }
    ];
    console.table(personArr, ['name', 'personId']);

    var number = 30;
    num = number.toString()
    console.log(number.toString());
    console.log(typeof(num));