# vueproject

Project test for Vue.js Developer

## Project setup
```
npm install -g @vue/cli
```

## Create Project
```
vue create vueproject
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Backend is .Net and MySql

## Create a database and table
```
CREATE DATABASE projectapi_db;

USE projectapi_db;

CREATE TABLE `grocery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(45) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```
