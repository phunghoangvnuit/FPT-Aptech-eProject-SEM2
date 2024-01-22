create database bookstore_db;
use bookstore_db;

CREATE TABLE `categories`  (
  `id` INT PRIMARY KEY ,
  name VARCHAR(255)
);

create table `books` (
  `id` int primary key auto_increment,
  `title` varchar(255) not null,
  `author` varchar(100),
  `price` double,
  `old_price` double,
  `category_id` int,
  `in_stock` int null,
  foreign key (`category_id`) references `categories` (`id`)
);

create table carts(
	`id` binary(16) primary key ,
    `total_price` decimal(10,2)
);

CREATE TABLE `orders` (
  `id` int primary key auto_increment ,
  `cart_id` binary(16),
  `order_date` datetime,
  `total_amount` decimal(10,2),
  foreign key (`cart_id`) references `carts` (`id`)
);

CREATE TABLE `cartitem` (
  `id` int primary key auto_increment,
  `cart_id` binary(16),
  `book_id` int,
  `quantity` int,
  foreign key (`cart_id`) references `carts` (`id`),
  foreign key (`book_id`) references `books` (`id`)
);


-- Insert records into category table
INSERT INTO categories (id,name) VALUES
  (1,'Business & Finance'),
  (2,'Personal Development'),
  (3,'Novel & Fiction'),
  (4,'Biography'),
  (5,'Education & Reference');

-- Insert records into books table
INSERT INTO books (title, author, price, old_price, category_id, in_stock) VALUES
  ('The Story Is Everything', 'Andreas Loizou', 334800, 350000, 1, 10),
  ('100 Business Tools For Success', 'Jeremy Kourdi', 289800, 310000, 1, 15),
  ('100 Things Successful Leaders Do', 'Nigel Cumberland', 225800, 240000, 1, 20),
  ('The Art Of Business Wars', 'David Brown', 289800, 320000, 1, 25),
  ('Happy Money: The Japanese Art Of Making Peace With Your Money', 'Ken Honda', 245700, 260000, 1, 30),
  ('Trillion Dollar Coach', 'Eric Schmidt', 265700, 280000, 1, 35),
  ('TED Talks', 'Chris Anderson', 235700, 250000, 1, 40),
  ('The Future Is Asian: Global Order In The Twenty-first Century', 'Parag Khanna', 345700, 400000, 1, 45),
  ('How To Make Work Not Suck', 'Carina Maggar', 215700, 230000, 1, 50),
  ('Getting Things Done: The Art Of Stress-Free Productivity', 'David Allen', 255700, 280000, 1, 55),
  ('Unreasonable Success And How To Achieve It', 'Richard Koch', 295700, 320000, 1, 60),
  ('The Sell: The Secrets Of Selling Anything To Anyone', 'Fredrik Eklund, Bruce Littlefield', 185700, 220000, 1, 65),
  ('The Perfection Trap: The Power Of Good Enough In A World That Always Wants More', 'Thomas Curran', 225700, 260000, 1, 70),
  ('No Filter: The Inside Story Of Instagram', 'Sarah Frier', 295700, 340000, 1, 75),
  ('The Cold Start Problem', 'Andrew Chen', 245700, 280000, 1, 80),
  ('How Women Rise: Break The 12 Habits Holding You Back', 'Sally Helgesen, Marshall Goldsmi', 195700, 220000, 1, 85),
  ('Do What You Love, Love What You Do', 'Holly Tucker', 225700, 260000, 1, 90),
  ('Elon Musk: How The Billionaire CEO Of SpaceX And Tesla Is Shaping Our Future', 'Ashlee Vance', 315700, 380000, 1, 95),
  ('Power Play: Elon Musk, Tesla, And The Bet Of the Century', 'Tim Higgins', 275700, 320000, 1, 100),
  ('The Making Of A Manager', 'Julie Zhuo', 255700, 300000, 1, 105);



INSERT INTO books (title, author, price, old_price, category_id, in_stock) VALUES
  ('Success Affirmations', 'Jack Canfield', 189900, 245700, 2, 30),
  ('The Power Of Chowa', 'Akemi Tanaka', 154900, 198500, 2, 25),
  ('Find Your Voice: The Secret To Talking With Confidence In Any Situation', 'Caroline Goyder', 142500, 175800, 2, 20),
  ('The 7 Second CV: How To Land The Interview', 'James Reed', 189000, 220000, 2, 35),
  ('How To Begin: Start Doing Something That Matters', 'Michael Bungay Stanier', 224500, 265000, 2, 40),
  ('Grit: Why Passion And Persistence Are The Secrets To Success', 'Angela Duckworth', 159900, 185600, 2, 28),
  ('The Happiness Cure: Why You’re Not Built For Constant Happiness, And How To Find A Way Through', 'Dr Anders Hansen', 176500, 198000, 2, 22),
  ('Flip Thinking: The Life-Changing Art Of Turning Problems Into Opportunities', 'Berthold Gunster', 189900, 210500, 2, 30),
  ('Time Wise: Productivity Secrets Of The World Most Successful People', 'Amantha Imber', 145900, 175000, 2, 25),
  ('How To Be Confident: The No.1 Sunday Times Bestseller', 'James Smith', 198500, 235600, 2, 32),
  ('Start At The End: How Reverse-Engineering Can Lead To Success', 'Dan Bigham', 169000, 195700, 2, 18),
  ('Freedom From Anxiety', 'Paul McKenna', 145000, 168900, 2, 20),
  ('Beat Stress At Work: How To Balance Your Ambition With Your Anxiety', 'Mark Simmonds, Lucy Streule, Melissa Doman MA', 189000, 212300, 2, 29),
  ('The Art of Sleeping', 'Rob Hobson', 175000, 189500, 2, 25),
  ('Stressilient: How To Beat Stress And Build Resilience', 'Dr Sam Akbar', 189500, 203000, 2, 21),
  ('Upshift: Turning Pressure Into Performance And Crisis Into Creativity', 'Ben Ramalingam', 198500, 225400, 2, 28),
  ('Confident And Killing It', 'Tiwalola Ogunlesi', 218000, 245900, 2, 33),
  ('Better Sleep, Better You', 'Frank Lipman, Neil Parikh', 175900, 198500, 2, 27),
  ('The Money Mentor: How To Manage Debt, Reach Your Goals, And Achieve Financial Wellness', 'Santis O’Garro', 189500, 210000, 2, 24),
  ('The Status Game: On Human Life And How To Play It', 'Will Storr', 168900, 195000, 2, 19);


  
  
INSERT INTO books (title, author, price, old_price, category_id, in_stock) VALUES
  ('Girlcrush (Paperback)', 'Florence Given', 198000, 245700, 3, 100),
  ('Lady Joker: Volume 2', 'Kaoru Takamura', 210000, 255000, 3, 120),
  ('Lady Joker: Volume 1', 'Kaoru Takamura', 220000, 265000, 3, 80),
  ('Time Shelter: Winner Of The International Booker Prize 2023', 'Georgi Gospodinov', 230000, 275000, 3, 150),
  ('Fairy Tale', 'Stephen King', 240000, 285000, 3, 90),
  ('The Boys From Biloxi', 'John Grisham', 250000, 295000, 3, 110),
  ('Crave: Charm', 'Tracy Wolff', 260000, 305000, 3, 130),
  ('Crave: Court 4', 'Tracy Wolff', 270000, 315000, 3, 100),
  ('Crave: Covet 3', 'Tracy Wolff', 280000, 325000, 3, 120),
  ('The Hawthorne Legacy (The Inheritance Games)', 'Jennifer Lynn Barnes', 290000, 335000, 3, 80),
  ('Iron Flame - The Empyrean Series', 'Rebecca Yarros', 300000, 345000, 3, 110),
  ('Fourth Wing - The Empyrean Series', 'Rebecca Yarros', 310000, 355000, 3, 140),
  ('Ivy Newt And The Time Thief', 'Derek Keilty, Magda Brol', 320000, 365000, 3, 70),
  ('One Night: A Novel (Avon Romance)', 'Debbie Macomber', 330000, 375000, 3, 130),
  ('Anna Karenina', 'Leo Tolstoy', 340000, 385000, 3, 90),
  ('Young Sherlock Holmes 2: Red Leech', 'Leo Tolstoy', 350000, 395000, 3, 120),
  ('Art of Running in Heels', 'Rachel Gibson', 360000, 405000, 3, 80),
  ('Love, Hate and Other Filters', 'Samira Ahmed', 370000, 415000, 3, 100),
  ('Invitation To A Bonfire', 'Adrienne Celt', 380000, 425000, 3, 110),
  ('The Occasional Virgin', 'Hanan al-Shaykh', 390000, 435000, 3, 90);


  
  
INSERT INTO books (title, author, price, old_price, category_id, in_stock) VALUES
  ('The Code Breaker: Jennifer Doudna, Gene Editing, And The Future Of The Human Race', 'Walter Isaacson', 245700, 300000, 4, 150),
  ('The Death Of A Soldier Told By His Sister', 'Olesya Khromeychuk', 198000, 250000, 4, 120),
  ('My Life In Red And White', 'Arsène Wenger', 175000, 220000, 4, 200),
  ('An Ugly Truth: Inside Facebook Battle for Domination', 'Sheera Frenkel', 320000, 400000, 4, 180),
  ('How To Turn Down A Billion Dollars: The Snapchat Story', 'Billy Gallagher', 185000, 230000, 4, 250),
  ('Samsung Rising: Inside The Secretive Company Conquering Tech', 'Geoffrey Cain', 265000, 330000, 4, 220),
  ('Tim Cook : The Genius Who Took Apple To The Next Level', 'Leander Kahney', 240000, 300000, 4, 300),
  ('The Woman In Me', 'Britney Spears', 150000, 190000, 4, 160),
  ('The Life And Times Of A Very British Man', 'Kamal Ahmed', 210000, 260000, 4, 240),
  ('The Subtle Art Of Not Giving A F*ck Journal', 'Mark Manson', 120000, 150000, 4, 180),
  ('Peaceful Heart, Warrior Spirit: The True Story Of My Spiritual Quest', 'Dan Millman', 180000, 220000, 4, 200),
  ('The Palace Papers', 'Tina Brown', 250000, 310000, 4, 250),
  ('Leadership: Six Studies In World Strategy', 'Henry Kissinger', 195000, 240000, 4, 280),
  ('Power Play: Tesla, Elon Musk, And The Bet Of The Century', 'Tim Higgins', 300000, 375000, 4, 200),
  ('Scenes From My Life: A Memoir', 'Jon Sternfeld, Michael K Williams', 160000, 200000, 4, 240),
  ('Why Fish Dont Exist: A Story Of Loss, Love, And The Hidden Order Of Life', 'Lulu Miller', 135000, 170000, 4, 180),
  ('A Taste Of Power: A Black Womans Story (Penguin Modern Classics)', 'Elaine Brown', 220000, 275000, 4, 200),
  ('My Fathers Daughter (Black Britain: Writing Back 7)', 'Hannah Azieb Pool, Bernardine Evaristo', 250000, 310000, 4, 260),
  ('Riot Days', 'Maria Alyokhina', 190000, 240000, 4, 150),
  ('Becoming: A Guided Journal For Discovering Your Voice', 'Michelle Obama', 280000, 350000, 4, 220);


  

INSERT INTO books (title, author, price, old_price, category_id, in_stock) VALUES
  ('Organic Chemistry II For Dummies', 'John T. Moore, Richard H. Langley', 189000, 250000, 5, 120),
  ('Cybersecurity For Dummies', 'Joseph Steinberg', 175000, 220000, 5, 180),
  ('Queen Elizabeth II For Dummies', 'Stewart Ross', 210000, 260000, 5, 240),
  ('The Official SAT Study Guide, 2020 Edition', 'The College Board', 195000, 240000, 5, 200),
  ('Barron AP Psychology Premium 2022-2023', 'Allyson J Weseley, Robert McEntarffer', 230000, 280000, 5, 220),
  ('Barron 1100 Words You Need to Know', 'Rich Carriero, Murray Bromberg, Melvin Gordon', 240000, 300000, 5, 250),
  ('GED Test Prep Plus 2022-2023', 'Caren Van Slyke', 160000, 200000, 5, 150),
  ('Facebook For Dummies 8th Edition', 'Carolyn Abram, Amy Karasavas', 205000, 255000, 5, 180),
  ('Beer For Dummies 3rd Edition', 'Marty Nachel, Steve Ettlinger', 255000, 320000, 5, 250),
  ('Business Meeting & Event Planning For Dummies', 'Susan Friedmann', 180000, 220000, 5, 200),
  ('Apple Watch For Seniors For Dummies', 'Dwight Spivey', 220000, 275000, 5, 240),
  ('Soft Skills For Dummies', 'Cindi Reiman', 150000, 190000, 5, 150),
  ('Minecraft Basics For Dummies', 'Jesse Stay, Joseph Stay, Alex Sta', 190000, 240000, 5, 200),
  ('Android Smartphones For Dummies', 'Jerome DiMarzio', 200000, 250000, 5, 180),
  ('Scrum For Dummies 3rd Edition', 'Mark C Layton, Steven J Ostermiller, Dean J Kynaston', 225000, 280000, 5, 220),
  ('Bond Investing For Dummies 3rd Edition', 'Russell Wild', 280000, 350000, 5, 260),
  ('Trading Psychology For Dummies', 'Roland Ullrich', 195000, 240000, 5, 220),
  ('Mutual Funds For Dummies 8th Edition', 'Eric Tyson', 240000, 300000, 5, 250),
  ('Business Plans For Dummies 3rd Edition', 'Paul Tiffany, Steven D Peterson', 210000, 260000, 5, 200),
  ('Penny Stocks For Dummies 3rd Edition', 'Peter Leeds', 230000, 280000, 5, 220);





-- Insert records into cart table
insert into carts (id,total_price) values
  (UUID_TO_BIN('652707f1-eda9-445b-a6ca-038ed5f1b5b2'), 10.2),
  (UUID_TO_BIN('792bf1e2-03ee-4c65-9e40-d101488f85b3'), 11.3),
  (UUID_TO_BIN('e66151c3-f2c7-41ae-b49f-556fb11824c3'), 11.2),
  (UUID_TO_BIN('e47dfabb-f9fa-45a3-8e69-5510e9eac1b2'), 10.09),
  (UUID_TO_BIN('60267a48-99b1-4a68-9db3-1b8980b7a514'), 9.5),
  (UUID_TO_BIN('3e2a1173-7690-4217-ac21-bacfe45a8ae7'), 10.23),
  (UUID_TO_BIN('7da86c35-7776-42f0-ab14-1b9fd5ff198b'), 12.3),
  (UUID_TO_BIN('bb4ed05f-22b9-4fa8-afad-94432882b238'), 16),
  (UUID_TO_BIN('5a1c75ec-bfb2-4c50-a1e6-5630e8c51a1c'), 11),
  (UUID_TO_BIN('ac53dda1-7a63-4397-bf86-a5287f427783'), 13.05),
  (UUID_TO_BIN('da6d1bf3-b00a-4442-a5e3-d026ed5d7703'), 12.99),
  (UUID_TO_BIN('93ef2a61-107d-4d09-95af-d4b1431f35b5'), 11.99),
  (UUID_TO_BIN('11361518-770f-427e-b2c3-db5e14b744e3'), 11.9),
  (UUID_TO_BIN('f2683a05-97ec-4ecb-92f3-1432f033a788'), 13.99),
  (UUID_TO_BIN('401d891f-23ca-4bb5-9dd7-d4a5061cd39d'), 5.99),
  (UUID_TO_BIN('44309564-affd-4f7b-b2dc-d133262b8198'), 6.99),
  (UUID_TO_BIN('a9ae504b-24b8-4fce-8e73-93ec00face52'), 4.99),
  (UUID_TO_BIN('ea84ea56-2b0d-4de2-8768-925ed03a752c'), 12.89),
  (UUID_TO_BIN('35b11e02-da61-4a43-b69e-db81486ede54'), 11.2),
  (UUID_TO_BIN('afbe8b0d-4433-4450-b2d2-a5f26dac2daa'), 10.9);
  

-- Insert records into orders table
insert into orders (cart_id, order_date, total_amount) values
  (UUID_TO_BIN('652707f1-eda9-445b-a6ca-038ed5f1b5b2'), '2023-01-01 12:00:00', 01),
  (UUID_TO_BIN('792bf1e2-03ee-4c65-9e40-d101488f85b3'), '2023-02-02 14:30:00', 02),
  (UUID_TO_BIN('e66151c3-f2c7-41ae-b49f-556fb11824c3'), '2023-03-03 10:45:00', 03),
  (UUID_TO_BIN('e47dfabb-f9fa-45a3-8e69-5510e9eac1b2'), '2023-04-04 18:20:00', 04),
  (UUID_TO_BIN('60267a48-99b1-4a68-9db3-1b8980b7a514'), '2023-05-05 16:10:00', 06),
  (UUID_TO_BIN('3e2a1173-7690-4217-ac21-bacfe45a8ae7'), '2023-06-06 09:55:00', 05),
  (UUID_TO_BIN('7da86c35-7776-42f0-ab14-1b9fd5ff198b'), '2023-07-07 21:15:00', 08),
  (UUID_TO_BIN('bb4ed05f-22b9-4fa8-afad-94432882b238'), '2023-08-08 17:05:00', 09),
  (UUID_TO_BIN('5a1c75ec-bfb2-4c50-a1e6-5630e8c51a1c'), '2023-09-09 11:30:00', 09),
  (UUID_TO_BIN('ac53dda1-7a63-4397-bf86-a5287f427783'), '2023-10-10 13:40:00', 08),
  (UUID_TO_BIN('da6d1bf3-b00a-4442-a5e3-d026ed5d7703'), '2023-11-11 14:00:00', 06),
  (UUID_TO_BIN('93ef2a61-107d-4d09-95af-d4b1431f35b5'), '2023-12-12 16:30:00', 10),
  (UUID_TO_BIN('11361518-770f-427e-b2c3-db5e14b744e3'), '2023-01-13 12:15:00', 12),
  (UUID_TO_BIN('f2683a05-97ec-4ecb-92f3-1432f033a788'), '2023-02-14 20:40:00', 18),
  (UUID_TO_BIN('401d891f-23ca-4bb5-9dd7-d4a5061cd39d'), '2023-03-15 18:30:00', 02),
  (UUID_TO_BIN('44309564-affd-4f7b-b2dc-d133262b8198'), '2023-04-16 11:05:00', 01),
  (UUID_TO_BIN('a9ae504b-24b8-4fce-8e73-93ec00face52'), '2023-05-17 22:25:00', 03),
  (UUID_TO_BIN('ea84ea56-2b0d-4de2-8768-925ed03a752c'), '2023-06-18 18:15:00', 09),
  (UUID_TO_BIN('35b11e02-da61-4a43-b69e-db81486ede54'), '2023-07-19 12:40:00', 05),
  (UUID_TO_BIN('afbe8b0d-4433-4450-b2d2-a5f26dac2daa'), '2023-08-20 14:50:00', 04);


-- Insert records into cartitem table
insert into cartitem (cart_id, book_id, quantity) values
   (UUID_TO_BIN('652707f1-eda9-445b-a6ca-038ed5f1b5b2'), 1, 2),
  (UUID_TO_BIN('792bf1e2-03ee-4c65-9e40-d101488f85b3'), 3, 1),
  (UUID_TO_BIN('e66151c3-f2c7-41ae-b49f-556fb11824c3'), 5, 3),
  (UUID_TO_BIN('e47dfabb-f9fa-45a3-8e69-5510e9eac1b2'), 2, 1),
  (UUID_TO_BIN('60267a48-99b1-4a68-9db3-1b8980b7a514'), 7, 2),
  (UUID_TO_BIN('3e2a1173-7690-4217-ac21-bacfe45a8ae7'), 4, 1),
  (UUID_TO_BIN('7da86c35-7776-42f0-ab14-1b9fd5ff198b'), 6, 4),
  (UUID_TO_BIN('bb4ed05f-22b9-4fa8-afad-94432882b238'), 8, 2),
  (UUID_TO_BIN('5a1c75ec-bfb2-4c50-a1e6-5630e8c51a1c'), 9, 3),
  (UUID_TO_BIN('ac53dda1-7a63-4397-bf86-a5287f427783'), 10, 1),
  (UUID_TO_BIN('da6d1bf3-b00a-4442-a5e3-d026ed5d7703'), 11, 2),
  (UUID_TO_BIN('93ef2a61-107d-4d09-95af-d4b1431f35b5'), 12, 1),
  (UUID_TO_BIN('11361518-770f-427e-b2c3-db5e14b744e3'), 13, 3),
  (UUID_TO_BIN('f2683a05-97ec-4ecb-92f3-1432f033a788'), 14, 1),
  (UUID_TO_BIN('401d891f-23ca-4bb5-9dd7-d4a5061cd39d'), 15, 2),
  (UUID_TO_BIN('44309564-affd-4f7b-b2dc-d133262b8198'), 16, 1),
  (UUID_TO_BIN('a9ae504b-24b8-4fce-8e73-93ec00face52'), 17, 4),
  (UUID_TO_BIN('ea84ea56-2b0d-4de2-8768-925ed03a752c'), 18, 2),
  (UUID_TO_BIN('35b11e02-da61-4a43-b69e-db81486ede54'), 19, 3),
  (UUID_TO_BIN('afbe8b0d-4433-4450-b2d2-a5f26dac2daa'), 20, 1);
  

