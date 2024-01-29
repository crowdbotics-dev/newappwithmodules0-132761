import axios from "axios"
const newappwithmodulesAPI = axios.create({
  baseURL: "https://newappwithmodules0-132761.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return newappwithmodulesAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return newappwithmodulesAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return newappwithmodulesAPI.post(`/api/v1/signup/`, payload)
}
function modules_equipment_management_equipment_list(payload) {
  return newappwithmodulesAPI.get(`/modules/equipment-management/equipment/`)
}
function modules_equipment_management_equipment_create(payload) {
  return newappwithmodulesAPI.post(
    `/modules/equipment-management/equipment/`,
    payload
  )
}
function modules_equipment_management_equipment_retrieve(payload) {
  return newappwithmodulesAPI.get(
    `/modules/equipment-management/equipment/${payload.id}/`
  )
}
function modules_equipment_management_equipment_update(payload) {
  return newappwithmodulesAPI.put(
    `/modules/equipment-management/equipment/${payload.id}/`,
    payload
  )
}
function modules_equipment_management_equipment_partial_update(payload) {
  return newappwithmodulesAPI.patch(
    `/modules/equipment-management/equipment/${payload.id}/`,
    payload
  )
}
function modules_equipment_management_equipment_destroy(payload) {
  return newappwithmodulesAPI.delete(
    `/modules/equipment-management/equipment/${payload.id}/`
  )
}
function rest_auth_login_create(payload) {
  return newappwithmodulesAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return newappwithmodulesAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return newappwithmodulesAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return newappwithmodulesAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return newappwithmodulesAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return newappwithmodulesAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return newappwithmodulesAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return newappwithmodulesAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return newappwithmodulesAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return newappwithmodulesAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return newappwithmodulesAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_equipment_management_equipment_list,
  modules_equipment_management_equipment_create,
  modules_equipment_management_equipment_retrieve,
  modules_equipment_management_equipment_update,
  modules_equipment_management_equipment_partial_update,
  modules_equipment_management_equipment_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
