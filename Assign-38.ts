function describe_city (city:string, country:string = "Pakistan"):string{
    return `'${city}' is in '${country}'.`;
}
console.log(describe_city("Islamabad"));
console.log(describe_city("Gwadar"));
console.log(describe_city("Istanbul", "Turkeyie"));
