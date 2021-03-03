import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Hardcoded to true for easier development
  const [userData, setUserData] = useState({
    // age: null,
    // sex: null,
    // weight: null,
    // height: null,
    // activity: null,

    // --- HARDCODED VALUES FOR TESTING ---
    age: 25,
    sex: "male",
    weight: 71,
    height: 177,
    activity: "none",
  });

  const [caloricGoal, setCaloricGoal] = useState(null);
  const [BMI, setBMI] = useState(null);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [currPage, setCurrPage] = useState(null);
  const [listData, setListData] = useState([]);
  const [dayPieData, setDayPieData] = useState([]);

  // Keeps track of the amount of calories consumed in total today. Is updated when an entry is added or removed from listData[]
  // The nutrientID that is associated with Energy (Kcal) in the USDA API is 1008
  useEffect(() => {
    let totCalories = 0;

    listData.forEach((item) => {
      for (const n in item.data.foodNutrients) {
        if (item.data.foodNutrients[n].nutrientId == 1008) {
          totCalories +=
            (item.data.foodNutrients[n].value / 100) * item.quantity;
        }
      }
    });
    setConsumedCalories(consumedCalories);
  }, [listData]);

  // Calculates the daily caloric intake and the BMI when the user data is updated.
  useEffect(() => {
    calcDailyCalories();
    calcBMI();
  }, [userData]);

  // Add and remove items from listData
  const addItem = (item) => {
    setListData((prevListData) => {
      return [item, ...prevListData];
    });
  };

  const removeItem = (key) => {
    setListData(
      listData.filter((item, i) => {
        return key !== i;
      })
    );
  };

  const calcDailyCalories = () => {
    // Calc BMR (Basal Metabolic Rate)
    let BMR = 0;

    if (userData.sex == "male") {
      BMR =
        66.47 +
        13.75 * userData.weight +
        5.003 * userData.height -
        6.755 * userData.age;
    } else {
      BMR =
        655.1 +
        9.563 * userData.weight +
        1.85 * userData.height -
        4.676 * userData.age;
    }
    if (userData.activity == "none") {
      setCaloricGoal(BMR * 1.2);
    } else if (userData.activity == "light") {
      setCaloricGoal(BMR * 1.375);
    } else if (userData.activity == "moderate") {
      setCaloricGoal(BMR * 1.55);
    } else if (userData.activity == "very active") {
      setCaloricGoal(BMR * 1.725);
    } else {
      setCaloricGoal(BMR * 1.9);
    }
  };

  const calcBMI = () => {
    setBMI((userData.weight / userData.height / userData.height) * 10000);
  };

  return (
    <AppContext.Provider
      value={{
        currPage: currPage,
        listData: listData,
        dayPieData: dayPieData,
        consumedCalories: consumedCalories,
        isAuthenticated: isAuthenticated,
        userData: userData,
        caloricGoal: caloricGoal,
        BMI: BMI,
        removeItem: removeItem,
        addItem: addItem,
        setUserData: setUserData,
        setIsAuthenticated: setIsAuthenticated,
        setCaloricGoal: setCaloricGoal,
        setBMI: setBMI,
        setListData: setListData,
        setConsumedCalories: setConsumedCalories,
        setCurrPage: setCurrPage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
