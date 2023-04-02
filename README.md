# Dish-near-me                                   
It is a single-page web application with config-driven UI, uses live Swiggy API for checking out nearby restaurants, including their location, and allows you to search restaurants and add food to your cart to view the final cost.   

## App Demo
Link to video

## To Run App In Your Local Machine
You need to write the following commands on the terminal screen so that you can run this project locally.

```bash
  git clone "https://github.com/chefpkj/dish-near-me.git"
```
Go to the project directory

```bash
  cd dish-near-me
```
Install dependencies
```bash
  npm i
```
Start the server
```bash
  npm start
```
This application should now be running on `localhost`. But If you'll try to run it, it won't show you anything because of CORS (browser security feature). To bypass this you need to write the following commands on the terminal screen.
```bash
  open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```
It will open a new window of chrome with disabled CORS. Now you can explore dish-near-me!! 

## Problems I Faced
I had some issues in order to implement my custom hook due to more than one copy of React created by transitive dependencies. So that was a bummer for me, but I overcame that problem shortly.

## Technologies Used
- React
- Parcel
- Redux-toolkit
- Joi
- Shimmer-UI











