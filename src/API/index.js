import axios from "axios";
// import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const API = axios.create({
  baseURL: BASE_URL,
});

//  driver

API.Login = (data) => {
  return API.post("/v1/admins/auth/login", data);
};
API.galleries = () => {
  return API.get("/v1/galleries");
};
API.deletegalleries = (id) => {
  return API.delete(`/v1/galleries/${id}`);
};
API.getcategorygalleries = () => {
  return API.get("/v1/galleries/access-categories");
};
API.deletecategorygalleries = (id) => {
  return API.delete(`/v1/galleries/access-categories/${id}`);
};
API.updatecategorygallery=(id)=>{
  return API.patch(`/v1/galleries/access-categories/${id}`)
}
API.getaccessgalleries = () => {
  return API.get("/v1/galleries/access");
};
API.deleteaccessgalleries = (id) => {
  return API.delete(`v1/galleries/access/${id}`);
};
API.createGalleries = (data) => {
  return API.post("/v1/utility/upload-image", data);
};
API.getevents = (data) => {
  return API.get("/v1/events");
};
API.createevents = (data) => {
  return API.post("/v1/events", data);
};
API.deleteevents = (id) => {
  return API.delete(`/v1/events/${id}`);
};

export { API };
