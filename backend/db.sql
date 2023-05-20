drop table volunteer;


CREATE TABLE `volunteer` (`id` int(11) NOT NULL AUTO_INCREMENT, `lastname` varchar(255) DEFAULT NULL,`firstname` varchar(255) DEFAULT NULL,`email` varchar(255) DEFAULT NULL,`phonenumber` varchar(255) DEFAULT NULL,`gender` varchar(255) DEFAULT NULL,  `birthday` date DEFAULT NULL, PRIMARY KEY (`id`));

insert into `volunteer` (`id`, `lastname`,`firstname`, `email`, `phonenumber`, `gender`,  `birthday`) 
                values('1','Dong','Tony','tonydong2030@gmail.com','086123456789','M','1998-04-02');

