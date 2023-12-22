import axios from "axios";
// import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const API = axios.create({
  baseURL: BASE_URL,
});

//  LOGIN

API.Login = (data) => {
  return API.post("/v1/admins/auth/login", data);
};

// Galleries
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


// EVENTS
API.getevents = (data) => {
  return API.get("/v1/events");
};
API.createevents = (data) => {
  return API.post("/v1/events", data);
};
API.deleteevents = (id) => {
  return API.delete(`/v1/events/${id}`);
};
API.getsingleeeventsbyid = (id) => {
  return API.get(`/v1/events/${id}`);
};
API.updateevents = (id, data) => {
  return API.patch(`/v1/events/${id}`, data);
};


//SPOTLIGHT

API.GetSpotlights = () => {
  return API.get("/v1/spotlights");
}
API.UpdateSpotlights = (id) => {
  return API.patch(`/v1/spotlights/${id}`);
}
API.DeleteSpotlights = (id) => {
  return API.delete(`/v1/spotlights/${id}`);
}
API.CreateSpotlights = (data) => {
  return API.post(`/v1/spotlights`,data);
}

//CONTACT US

API.GetContact = () => {
  return API.get("/v1/contact-us");
}
API.GetNewsletter = () => {
  return API.get("/v1/newsletters");
}
API.deleteNewsletter = (id) => {
  return API.get(`/v1/newsletters/${id}`);
}


//BOOK LISTING
API.GetListingsBooks = () => {
  return API.get("/v1/listings/books");
}
API.GetSingleListingsBooks = () => {
  return API.get("/v1/listings/books/:id");
}
API.UpdateListingsBooks = (id,data) => {
  return API.patch(`/v1/listings/books/${id}`,data);
}
API.DeleteListingsBooks = (id) => {
  return API.delete(`/v1/listings/books/${id}`);
}
API.CreateListingsBooks = (data) => {
  return API.post(`/v1/listings/books`,data);
}

//CATALOG LISTING
API.GetListingsCatalogs = () => {
  return API.get("/v1/listings/catalogs");
}
API.UpdateListingsCatalogs = (id,data) => {
  return API.patch(`/v1/listings/catalogs/${id}`,data);
}
API.DeleteListingsCatalogs = (id) => {
  return API.delete(`/v1/listings/catalogs/${id}`);
}
API.CreateListingsCatalogs = (data) => {
  return API.post(`/v1/listings/catalogs`,data);
}

//CATALOG LISTING
API.GetListingsArticles = () => {
  return API.get("/v1/listings/articles");
}
API.UpdateListingsArticles = (id,data) => {
  return API.patch(`/v1/listings/articles/${id}`,data);
}
API.DeleteListingsArticles = (id) => {
  return API.delete(`/v1/listings/articles/${id}`);
}
API.CreateListingsArticles = (data) => {
  return API.post(`/v1/listings/articles`,data);
}

export { API };
