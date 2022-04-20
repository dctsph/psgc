import barangays from "./json/barangays.json"
import municipalities from "./json/municipalities.json"
import provinces from "./json/provinces.json"
import regions from "./json/regions.json"

function getBarangaysByMunicipality(mun_code) {
  const municipalityCode = mun_code.toString()
  return barangays.filter(value => value.mun_code === municipalityCode)
}

function getMunicipalitiesByProvince(prv_code) {
  const provincialCode = prv_code.toString()
  return municipalities.filter(value => value.prv_code === provincialCode)
}

function getProvincesByRegion(reg_code) {
  const regionCode = reg_code.toString()
  return provinces.filter(value => value.reg_code === regionCode)
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

  return barangaysByProvince
}

function getRegionByProvince(prv_code) {
  const provincialCode = prv_code.toString()
  const filteredProvince = provinces.find(value => value.prv_code === provincialCode)
  return regions.filter(value => value.reg_code === filteredProvince.reg_code)
}

function getAllRegions() {
  return regions
}

export default {
  getBarangaysByMunicipality,
  getMunicipalitiesByProvince,
  getProvincesByRegion,
  getBarangaysByProvince,
  getRegionByProvince,
  getAllRegions
}