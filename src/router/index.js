const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/:retailUnitCode/:period",
    name: "RetailUnitPeriod",
    component: () => import("../views/Filter1View.vue"),
  },
  {
    path: "/:retailUnitCode/:period/:businessUnitCode",
    name: "RetailUnitPeriodBusinessUnit",
    component: () => import("../views/Filter2View.vue"),
  },
  {
    path: "/:retailUnitCode/:period/:customerId([a-zA-Z]{2}\\.customer-\\d{2})",
    name: "RetailUnitPeriodCustomer",
    component: () => import("../views/Filter3View.vue"),
  },
];

export default routes;
