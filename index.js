import barangays from "./json/barangays.json"
import municipalities from "./json/municipalities.json"
import provinces from "./json/provinces.json"
import regions from "./json/regions.json"

function getBarangaysByMunicipality(mun_code) {
  const municipalityCode = mun_code.toString()
  const filteredBarangays = barangays.filter(value => value.mun_code === municipalityCode)
  return sortAlphabetically(filteredBarangays)
}

function getMunicipalitiesByProvince(prv_code) {
  const provincialCode = prv_code.toString()
  const filteredMunicipalities = municipalities.filter(value => value.prv_code === provincialCode)
  return sortAlphabetically(filteredMunicipalities)
}

function getProvincesByRegion(reg_code) {
  const regionCode = reg_code.toString()
  const filteredProvinces = provinces.filter(value => value.reg_code === regionCode)
  return sortAlphabetically(filteredProvinces)
}

function getBarangaysByProvince(prv_code) {
  const provincialCode = prv_code.toString()
  const barangaysByProvince = []
  const provinceMunicipalities = getMunicipalitiesByProvince(provincialCode).filter(value => value.prv_code === provincialCode)

  for (const municipality of provinceMunicipalities) {
    const filteredBarangays = getBarangaysByMunicipality(municipality.mun_code)

    for (const barangay of filteredBarangays) {
      barangaysByProvince.push({
        ...barangay,
        municipality: municipality.name
      })
    }
  }

  return sortAlphabetically(barangaysByProvince)
}

function getRegionByProvince(prv_code) {
  const provincialCode = prv_code.toString()
  const filteredProvince = provinces.find(value => value.prv_code === provincialCode)
  return regions.filter(value => value.reg_code === filteredProvince.reg_code)
}

function getAllProvinces() {
  return sortAlphabetically(provinces)
}

function getAllRegions() {
  // Sort not needed, already arranged in ascending order based on PSGC code.
  return regions
}

function sortAlphabetically(array) {
  array.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })

  return array
}

export default {
  getBarangaysByMunicipality,
  getMunicipalitiesByProvince,
  getProvincesByRegion,
  getBarangaysByProvince,
  getRegionByProvince,
  getAllProvinces,
  getAllRegions
}