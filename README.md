# About

A collection of Philippine Standard Geographic Code that were broken down by:

- Barangays
- Cities / Municipalities
- Provinces
- Regions

## PSGC Publication Date
- Q1-2022 ([Summary of Changes](https://psa.gov.ph/classification/psgc/downloads/PSGC%201Q%202022%20Summary%20of%20Changes.xlsx))

## Collection Samples

### Barangay
```json
{ "name": "Bayanan", "bgy_code": "042103004", "mun_code": "042103000" }
```
### City/Municipality
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

```bash
$ npm install @dctsph/psgc
```

## Usage
Import the package in your application.
```javascript
import psgc from "@dctsph/psgc";
```

## Available Methods

| Method                                | Description                                                                                                                                                                                                      | Example                                         |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| getAllRegions()                       | Show all regions.                                                                                                                                                                                                | `psgc.getAllRegions()`                          |
| getAllProvinces()                     | Show all provinces. <br/><br/><strong>Usage:</strong><br/>Use this if you want to start the filter by province instead of region and use the `getRegionByProvince` method to get the selected province's region. | `psgc.getAllProvinces()`                        |
| getBarangaysByMunicipality(mun_code)  | Get all barangays by municipality.                                                                                                                                                                               | `psgc.getBarangaysByMunicipality('042103000')`  |
| getMunicipalitiesByProvince(prv_code) | Get all municipalities by province.                                                                                                                                                                              | `psgc.getMunicipalitiesByProvince('042100000')` |
| getProvincesByRegion(reg_code)        | Get all provinces by region.                                                                                                                                                                                     | `psgc.getProvincesByRegion('040000000')`        |
| getBarangaysByProvince(prv_code)      | Get all barangays by province.                                                                                                                                                                                   | `psgc.getBarangaysByProvince('042100000')`      |
| getRegionByProvince(prv_code)         | Get region by province.                                                                                                                                                                                          | `psgc.getRegionByProvince('042100000')`         |

### ⚠️ Note:
- Getting the list of all barangays will not be added to avoid any performance issues due to its large number of items.

## References
- [Philippine Statistics Authority (PSGC)](https://psa.gov.ph/classification/psgc/)
- [Wikipedia](https://en.wikipedia.org/)

## License
Licensed under  [MIT](https://opensource.org/licenses/MIT)