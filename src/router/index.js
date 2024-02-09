const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/:retailunitCode/:period",
    name: "RetailUnitPeriod",
    component: () => import("../views/Filter1View.vue"),
  },
  {
    path: "/:retailunitCode/:period/:businessUnitCode",
    name: "RetailUnitPeriodBusinessUnit",
    component: () => import("../views/Filter2View.vue"),
  },
 {
   path: "/:retailUnitCode/:period/:customerId",
   name: "RetailUnitPeriodCustomer",
   component: () => import("../views/Filter3View.vue"),
 },
];

export default routes;
