import { defineStore } from "pinia";
import axios from "axios";

export const useMarketStore = defineStore("market", {
  state: () => ({
    data: [],
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get("/task-b.data.json");
        const data = response.data;
        this.setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    setData(data) {
      // Set the data in the store
      this.data = data;
    },
  },
  getters: {
    businessUnitsList: (state) => (market) => {
      const uniqueBusinessUnitsSet = new Set();
      state.data.forEach((item) => {
        if (market) {
          item.market === market
            ? uniqueBusinessUnitsSet.add(item.businessUnit)
            : null;
        } else {
          uniqueBusinessUnitsSet.add(item.businessUnit);
        }
      });
      const uniqueBusinessUnitsArray = Array.from(uniqueBusinessUnitsSet);
      return uniqueBusinessUnitsArray;
    },
    customerIdsListFromBusinessUnit: (state) => {
      const uniqueCustomerIdsSet = new Set();
      state.data.forEach((item) => {
        uniqueCustomerIdsSet.add(item.customerId);
      });
      const uniqueCustomerIdsArray = Array.from(uniqueCustomerIdsSet);

      return uniqueCustomerIdsArray;
    },

    // Task (2) Draft
    getCustomerBalanceEventsForMarket: (state) => (customerId, market) => {
      const filteredCustomerEvents = state.data.filter(
        (item) => item.customerId === customerId && item.market === market
      );

      const balance = filteredCustomerEvents.reduce((acc, item) => {
        if (item.type === "INCREASED") {
          acc += item.value;
        } else if (item.type === "DECREASED") {
          acc -= item.value;
        }

        return acc;
      }, 0);

      console.log({ events: filteredCustomerEvents, balance });

      return { events: filteredCustomerEvents, balance };
    },

    getBusinessUnitsBalance: (state) => (BU) => {
      const marketData = state.data.filter((item) => item.businessUnit === BU);

      const balance = marketData.reduce((acc, item) => {
        if (item.type === "INCREASED") {
          acc += item.value;
        } else if (item.type === "DECREASED") {
          acc -= item.value;
        }

        return acc;
      }, 0);

      return balance;
    },

    getBUCustomersBalance: (state) => (BU) => {
      const businessUnitCustomersBalance = {};

      const marketData = state.data.filter((item) => item.businessUnit === BU);

      marketData.forEach((obj) => {
        if (businessUnitCustomersBalance[obj.customerId] === undefined) {
          businessUnitCustomersBalance[obj.customerId] = 0;
        }

        if (obj.type === "INCREASED") {
          businessUnitCustomersBalance[obj.customerId] += obj.value;
        } else if (obj.type === "DECREASED") {
          businessUnitCustomersBalance[obj.customerId] -= obj.value;
        }
      });
      return businessUnitCustomersBalance;
    },
  },
});
