### A very simple development framework
A very simple development framework based on the technology stack which includes react, spring-boot and MySQL, etc,. 

### To prepare MySql
drop table volunteer; 

CREATE TABLE `volunteer` (`id` int(11) NOT NULL AUTO_INCREMENT, `lastname` varchar(255) DEFAULT NULL,`firstname` varchar(255) DEFAULT NULL,`email` varchar(255) DEFAULT NULL,`phonenumber` varchar(255) DEFAULT NULL,`gender` varchar(255) DEFAULT NULL,  `birthday` date DEFAULT NULL, PRIMARY KEY (`id`)); 

insert into `volunteer` (`id`, `lastname`,`firstname`, `email`, `phonenumber`, `gender`,  `birthday`) values('1','Dong','Tony','tonydong2030@gmail.com','086123456789','M','1998-04-02'); 

### To run frontend
cd frontend 
npm install 
npm run start 

### To run backend
cd backend 
mvn install 
mvn spring-boot:run 

### visit via browser
http://localhost:3000 

enjoy!
