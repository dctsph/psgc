# About
___
A collection of Philippine Standard Geographic Code that were broken down by:

- Barangays
- Cities / Municipalities
- Provinces
- Regions

## PSGC Publication Date
- Q4-2021

## Collection Samples
___
### Barangay
```json
{ "name": "Bayanan", "bgy_code": "042103004", "mun_code": "042103000" }
```
### City/Munipality
```json
{ "name": "City of Bacoor", "mun_code": "042103000", "prv_code": "042100000" }
```
### Province
```json
{ "name": "Cavite", "prv_code": "042100000", "reg_code": "040000000" }
```
### Region
```json
{ "name": "Region IV-A (CALABARZON)", "reg_code": "040000000" }
```

## Installation
___
```bash
$ npm install @dctsph/psgc
```

## Usage
Import the package in your application.
```javascript
import psgc from "@dctsph/psgc";
```

## Available Methods

| Method                            | Description                         | Example                                         |
|-----------------------------------|-------------------------------------|-------------------------------------------------|
| getAllRegions()                   | Show all regions                    | `psgc.getAllRegions()`                          |
| getBarangaysByMunicipality(mun_code) | List all barangays by municipality  | `psgc.getBarangaysByMunicipality('042103000')`  |
| getMunicipalitiesByProvince(prv_code) | List all municipalities by province | `psgc.getMunicipalitiesByProvince('042100000')` |
| getProvincesByRegion(reg_code)    | List all provinces by region        | `psgc.getProvincesByRegion('040000000')`        |
| getBarangaysByProvince(prv_code)  | List all barangays by province      | `psgc.getBarangaysByProvince('042100000')`      |
| getRegionByProvince(prv_code)     | Show the region by province         | `psgc.getRegionByProvince('042100000')`         |


## References
- [Philippine Statistics Authority (PSGC)](https://psa.gov.ph/classification/psgc/)
- [Wikipedia](https://en.wikipedia.org/)

## License
Licensed under  [MIT](https://opensource.org/licenses/MIT)