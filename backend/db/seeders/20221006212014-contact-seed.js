'use strict';
const { CONTACT_TABLE } = require('./../models/contact.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(CONTACT_TABLE, [
      {
        id: 'f5eac071-de3e-4848-90e7-7177eac41cc6',
        first_name: 'Tyshawn',
        last_name: 'Stokes',
        email: 'Scot94@yahoo.com',
        phone_number: '934-434.5476 0869',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'ad790a0a-d23a-4f46-9ec8-fa5e33e5cce7',
        first_name: 'Eda',
        last_name: 'Ferry',
        email: 'Jared_Heller71@yahoo.com',
        phone_number: '589-334-7340',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '51b11e96-9996-4ddf-89ef-f10ef5932657',
        first_name: 'Danyka',
        last_name: 'Marvin',
        email: 'Brooks_Pacocha@hotmail.com',
        phone_number: '383-900-7928 350',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '30815ec8-8349-4fb5-9aa4-883f7a2a0294',
        first_name: 'Cade',
        last_name: 'Stehr',
        email: 'Evangeline.Douglas98@yahoo.com',
        phone_number: '823-365-9522 4239',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '32bd2454-5266-411c-999b-2129f53f1179',
        first_name: 'Yasmin',
        last_name: 'Breitenberg',
        email: 'Gus_Farrell23@yahoo.com',
        phone_number: '680-895.8486 0340',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '333c49bb-a0e3-49a3-b59f-e753d2571a92',
        first_name: 'Jerald',
        last_name: 'Murazik',
        email: 'Shawna.Ernser@yahoo.com',
        phone_number: '1-979-578-4307',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'ad69c328-690a-4ff8-8eb2-b9ada8e500f1',
        first_name: 'Wanda',
        last_name: 'Hilll',
        email: 'Vivienne80@yahoo.com',
        phone_number: '1-828-334-3816',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '9ddee5e0-7c00-44ea-ab94-dbf51f8cbcda',
        first_name: 'Cathryn',
        last_name: 'Rodriguez',
        email: 'Malika54@yahoo.com',
        phone_number: '281-508-4725',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'fb9b1603-55f7-4d0f-9a69-febb25c224fd',
        first_name: 'Marcelle',
        last_name: 'Bruen',
        email: 'Gerson83@yahoo.com',
        phone_number: '1-207-565-9655',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'bc979979-bd42-4a77-b56d-0bed6487c42e',
        first_name: 'Lorenzo',
        last_name: 'Effertz',
        email: 'Shanny.Hodkiewicz@yahoo.com',
        phone_number: '434-213-6271 2362',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '28ad8dcf-eae7-4056-bcaa-473cb37ca311',
        first_name: 'Lucy',
        last_name: 'Haag',
        email: 'Ward16@hotmail.com',
        phone_number: '506-518-8308 957',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '2bee39dc-f15f-41c0-a687-71f6a222d05d',
        first_name: 'Janice',
        last_name: 'Kerluke',
        email: 'Korbin_Bahringer51@gmail.com',
        phone_number: '207-463.4482',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '0cbf5259-7366-4d15-93cf-a0bc62188cfc',
        first_name: 'Titus',
        last_name: 'Kuhic',
        email: 'Lavada_Farrell@gmail.com',
        phone_number: '(251) 743-6806 1250',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'a5c08473-3fd4-4775-a6b8-1d5217b81b8e',
        first_name: 'Stacy',
        last_name: 'Donnelly',
        email: 'Cletus1@hotmail.com',
        phone_number: '1-896-891-8364',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '9751c41f-19c0-4b69-828a-188c001bc6b9',
        first_name: 'Andreane',
        last_name: 'Donnelly',
        email: 'Otho_Wuckert73@yahoo.com',
        phone_number: '(977) 752-9915 440',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'c47636b1-01ad-48d6-8c24-39159a86bd1c',
        first_name: 'Elva',
        last_name: 'Sporer',
        email: 'Margot_Ullrich50@yahoo.com',
        phone_number: '1-956-489-8190',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '2df8a15e-db94-4925-83da-39beac7a8a2f',
        first_name: 'Janae',
        last_name: 'Rippin',
        email: 'Demarco_Witting@yahoo.com',
        phone_number: '(313) 483-6085',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '29f539ae-1e32-4566-8e1b-8f4405ef030d',
        first_name: 'Geraldine',
        last_name: 'Schulist',
        email: 'Freida77@hotmail.com',
        phone_number: '417-721.5397',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '8ad81048-18ab-47aa-a0c5-d6061f10cbf4',
        first_name: 'Royal',
        last_name: 'Tromp',
        email: 'Darron.Zemlak@gmail.com',
        phone_number: '494-419-9319 1401',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '8117995e-7462-44cb-8f9f-e4422898ff4f',
        first_name: 'Antoinette',
        last_name: 'VonRueden',
        email: 'Jana.Weissnat10@hotmail.com',
        phone_number: '901-249.2186 8267',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'd2e16589-3063-4233-9585-867c0c1ea179',
        first_name: 'Skylar',
        last_name: 'Tremblay',
        email: 'Savanah64@yahoo.com',
        phone_number: '650-762.2789',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '15c59719-afd8-4afe-8552-f4cc6af90282',
        first_name: 'Fausto',
        last_name: 'Turner',
        email: 'Chesley_Crooks48@gmail.com',
        phone_number: '1-947-429-2176 08053',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '8e2858ee-a633-4d02-be57-f6ca7139c74f',
        first_name: 'Lavada',
        last_name: 'Rodriguez',
        email: 'Wyatt26@hotmail.com',
        phone_number: '1-906-686-5629',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '70fa5c98-46e4-4edd-bd7a-0f4ffe5bf122',
        first_name: 'Anne',
        last_name: 'Ferry',
        email: 'Rico30@gmail.com',
        phone_number: '1-457-691-2237 434',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'dd0df7e0-6dfb-463a-8384-9dbe8bd45863',
        first_name: 'Mollie',
        last_name: 'Rempel',
        email: 'Enrico_Satterfield21@hotmail.com',
        phone_number: '1-429-232-9375',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '7964056a-d01e-4061-bde0-1ce92a4b6cfd',
        first_name: 'Alvis',
        last_name: 'Lehner',
        email: 'Edyth63@hotmail.com',
        phone_number: '(967) 757-6402 853',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '09b9bc0d-31db-4928-b25d-4eca8bad3940',
        first_name: 'Eva',
        last_name: 'Deckow',
        email: 'Edyth.Haag@gmail.com',
        phone_number: '420-849.2470 0825',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'd0282ea1-e3ba-47c1-be69-525dff8dcb58',
        first_name: 'Lura',
        last_name: 'Smitham',
        email: 'Larry_Green65@gmail.com',
        phone_number: '843-706-2469',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '8fcf209f-455e-436f-93f5-104a48227d38',
        first_name: 'Mike',
        last_name: 'Paucek',
        email: 'Doris32@hotmail.com',
        phone_number: '1-790-796-8896 995',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '1e4348e3-842e-4d87-aa84-f6c30e72c328',
        first_name: 'Bertrand',
        last_name: 'Casper',
        email: 'Ellie_Torphy38@yahoo.com',
        phone_number: '904-824.9519 63773',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '440ff223-7990-4c1f-9e81-585e6bf998b0',
        first_name: 'Jedidiah',
        last_name: 'Wunsch',
        email: 'Chadrick.Jerde16@gmail.com',
        phone_number: '413-798.9328',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '88f20e20-c260-40a5-b4cb-97057bd31773',
        first_name: 'Ivy',
        last_name: 'Kilback',
        email: 'Rosalia20@hotmail.com',
        phone_number: '1-347-226-8713',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '9c8611e3-6b3f-4fb0-a3df-9f74700838d6',
        first_name: 'Raoul',
        last_name: 'McDermott',
        email: 'Samir.Mertz6@gmail.com',
        phone_number: '760-554-2537',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '1915dcee-dba5-46e9-8b32-2baf54f5402e',
        first_name: 'Leanne',
        last_name: 'VonRueden',
        email: 'Penelope.Kihn51@yahoo.com',
        phone_number: '388-648-1114 933',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'b35d967c-89b9-4a33-a526-f031bb54aaf7',
        first_name: 'Norris',
        last_name: 'Abshire',
        email: 'Estevan79@yahoo.com',
        phone_number: '1-951-687-3908',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'ac57317a-7310-43b3-84c7-23e9e56dea7b',
        first_name: 'Emelie',
        last_name: 'Spinka',
        email: 'Elfrieda_Rosenbaum16@hotmail.com',
        phone_number: '469-351-8507 4791',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '0eb623d6-fc96-4afc-aa10-012c2b925795',
        first_name: 'Adelia',
        last_name: 'Blick',
        email: 'Mona_White38@yahoo.com',
        phone_number: '(248) 319-2221 1224',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '018f32f0-698a-4fff-940a-e69a0a7cdc15',
        first_name: 'Minnie',
        last_name: 'Fadel',
        email: 'Mitchel81@hotmail.com',
        phone_number: '410-531.8810 3242',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '059e8350-7f12-4fb7-b1b0-33ee5888e369',
        first_name: 'Gaetano',
        last_name: 'Funk',
        email: 'Vicky41@yahoo.com',
        phone_number: '410-450-2803',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '480f5c7c-b6ec-4654-84dc-8b6534275223',
        first_name: 'Adrien',
        last_name: 'Corkery',
        email: 'Doris36@hotmail.com',
        phone_number: '(811) 681-6513 77779',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'c227f22e-4042-4d91-8a87-e9c0e4f0e75b',
        first_name: 'Jamie',
        last_name: 'Zulauf',
        email: 'Keon20@gmail.com',
        phone_number: '(276) 518-0210 70320',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '4ae12bd1-2417-4f6b-83e1-f1718d47bbf8',
        first_name: 'Magdalen',
        last_name: 'Hahn',
        email: 'Liliane88@hotmail.com',
        phone_number: '654-911.8701',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'd7c80a7f-d54e-41c8-b9a2-ffa9df2ec79e',
        first_name: 'Pink',
        last_name: 'Jerde',
        email: 'Judah.Marvin@hotmail.com',
        phone_number: '1-562-283-8705 047',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'f3e3fae4-c0bb-449d-bf2d-f2752baa8e1b',
        first_name: 'Porter',
        last_name: 'Lindgren',
        email: 'Deborah.Ryan@gmail.com',
        phone_number: '564-967-2902 979',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'c66ba389-1189-45a0-af07-80eb978a21c6',
        first_name: 'Brent',
        last_name: 'Kozey',
        email: 'Deondre82@hotmail.com',
        phone_number: '776-251-6628 1163',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'e2283788-88e8-415d-b7fc-dffa49fd6d92',
        first_name: 'Minnie',
        last_name: 'Kertzmann',
        email: 'Asa2@gmail.com',
        phone_number: '506-890-6651 33741',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '22b8c516-a0e8-4e3a-ad8b-e8a716fcc8c4',
        first_name: 'Rebeca',
        last_name: 'Fritsch',
        email: 'Ila.Frami@gmail.com',
        phone_number: '585-252-1354',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '1af93ae8-dad3-4bcc-a103-94b5929215e1',
        first_name: 'Jairo',
        last_name: 'Bode',
        email: 'Flavio_Goldner@yahoo.com',
        phone_number: '893-621.4348',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '10fab122-02a1-480a-a5d7-70593a3db697',
        first_name: 'Berta',
        last_name: 'OConnell',
        email: 'Bobbie66@hotmail.com',
        phone_number: '1-581-293-5891 8815',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'f3240ed7-c3ae-4a4c-b701-20b03897a280',
        first_name: 'Emiliano',
        last_name: 'Bins',
        email: 'Jacky.Conroy@gmail.com',
        phone_number: '316-710.3607',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'ce70f0f7-b6f9-4a9d-ae64-204122cf020e',
        first_name: 'Alvina',
        last_name: 'Dickens',
        email: 'Sarai64@yahoo.com',
        phone_number: '761-307-2855 287',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'ec47d0ad-c73c-4c06-9155-c937cb3b4ecf',
        first_name: 'Noah',
        last_name: 'Robel',
        email: 'Monte_Will@hotmail.com',
        phone_number: '792-954.7510 2597',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'd70df92d-8499-4fc8-94cc-a1c3b055baf0',
        first_name: 'Lavina',
        last_name: 'Toy',
        email: 'Abby.Towne@yahoo.com',
        phone_number: '307-951.7389',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'd778a398-45ba-431e-a8dd-851dff142ba9',
        first_name: 'Maximo',
        last_name: 'Fritsch',
        email: 'Gonzalo68@yahoo.com',
        phone_number: '(885) 506-4256 6581',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'f2854767-4be8-437a-8594-11ef57e46af8',
        first_name: 'Montana',
        last_name: 'Kutch',
        email: 'Irwin.Kautzer@hotmail.com',
        phone_number: '1-907-784-4188 94567',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'f2977500-ac60-4487-a26f-018815b8a83b',
        first_name: 'Meagan',
        last_name: 'Cruickshank',
        email: 'Norbert70@yahoo.com',
        phone_number: '576-549-6298 996',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '39d1a7d6-a94c-409d-b3e1-a321773b0812',
        first_name: 'Betty',
        last_name: 'Gleichner',
        email: 'Orlando72@yahoo.com',
        phone_number: '1-965-350-6830 2062',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '5d06688e-59c0-4ee5-a32c-d5c9c00a0189',
        first_name: 'Magdalen',
        last_name: 'Klein',
        email: 'Troy.Moen93@hotmail.com',
        phone_number: '(461) 510-1348 9161',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'a235a3e5-8e7c-471d-849d-63156071a731',
        first_name: 'Delphine',
        last_name: 'Harber',
        email: 'Ava94@yahoo.com',
        phone_number: '1-983-801-4617',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'c301299d-7571-4ef0-a299-ed25fb62dbe1',
        first_name: 'Steve',
        last_name: 'Kassulke',
        email: 'Birdie.Nolan@gmail.com',
        phone_number: '268-404-3142 57843',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '9b2db039-fea5-4e66-880c-8e87fc68d71b',
        first_name: 'Leatha',
        last_name: 'Gulgowski',
        email: 'Cindy16@yahoo.com',
        phone_number: '337-329-0968',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '8ac38a05-fe94-4bbe-8dfc-f04b567b520b',
        first_name: 'Eusebio',
        last_name: 'Nader',
        email: 'Vida.Pollich@gmail.com',
        phone_number: '1-924-838-8826',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'a7e7a06c-8ff8-4b1d-8fa7-cb20dde173cb',
        first_name: 'Geoffrey',
        last_name: 'Ebert',
        email: 'Isabella_Howe@hotmail.com',
        phone_number: '1-747-776-7893 26711',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '0e3cd3e9-294a-4fa8-8ba2-a442d2795faf',
        first_name: 'Nadia',
        last_name: 'Fahey',
        email: 'Erich_Turner@yahoo.com',
        phone_number: '(291) 608-1934',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '6fae4eb4-7243-49f4-ac35-3828b4035fdd',
        first_name: 'Enrique',
        last_name: 'Kohler',
        email: 'Charley.Hills86@gmail.com',
        phone_number: '603-310-4980',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'a9f68e15-56fc-411e-9602-8f21f250eeaf',
        first_name: 'Aric',
        last_name: 'Emard',
        email: 'Malika.Gutmann66@hotmail.com',
        phone_number: '338-762.4160 0283',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '3a5f0551-fa46-45f0-99b5-293d33075641',
        first_name: 'Lucinda',
        last_name: 'Kshlerin',
        email: 'Orrin16@gmail.com',
        phone_number: '(785) 660-2261 30855',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'e0352985-b42b-4c17-8bdb-94ddc324bf96',
        first_name: 'Ezequiel',
        last_name: 'Hammes',
        email: 'Ava.Shanahan@yahoo.com',
        phone_number: '1-381-931-6109',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '987712f6-7e65-4abd-a74e-82e736d2e107',
        first_name: 'Domenica',
        last_name: 'Smitham',
        email: 'River48@gmail.com',
        phone_number: '500-261-1381 2094',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '649f1bac-5cc4-4ac1-939b-8dcd811333f2',
        first_name: 'Kendall',
        last_name: 'Rau',
        email: 'Gideon.Wuckert35@hotmail.com',
        phone_number: '(757) 642-0881 48865',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '0b6fdcbe-b298-4fde-a0e9-fa82cfcec12d',
        first_name: 'Sigurd',
        last_name: 'Mertz',
        email: 'Berry.Satterfield95@gmail.com',
        phone_number: '411-671.1492 74498',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'a79c3beb-484a-4a87-81fe-f9a4038380f0',
        first_name: 'Kaylee',
        last_name: 'Legros',
        email: 'Nestor.Jones48@gmail.com',
        phone_number: '(852) 573-2219',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'ca382302-aeca-4ca5-8a44-36f2b466b3a5',
        first_name: 'Cora',
        last_name: 'Kuvalis',
        email: 'Cleveland61@gmail.com',
        phone_number: '(501) 987-6226',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'f6cb3fd1-e31a-449d-9068-35c340866110',
        first_name: 'Cooper',
        last_name: 'Schimmel',
        email: 'Steve_Bayer31@hotmail.com',
        phone_number: '325-843-6324 46984',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '852323c4-db1e-4b29-b7e5-abe35e6d0318',
        first_name: 'Celestino',
        last_name: 'Jerde',
        email: 'Kara_Reilly96@yahoo.com',
        phone_number: '333-854.3360 989',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '7e27c09b-62b0-4f65-a85b-c3400f787bc0',
        first_name: 'Jaunita',
        last_name: 'Pfannerstill',
        email: 'Florencio9@yahoo.com',
        phone_number: '902-833.4298 53629',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '19f9da46-6594-4afe-8437-8b6c1e23cf20',
        first_name: 'Wilber',
        last_name: 'Yost',
        email: 'Maryam.Rice@gmail.com',
        phone_number: '491-951.2107 25690',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'cc81ee78-00cd-4b19-8930-0f34ab8d7bce',
        first_name: 'Jay',
        last_name: 'Boyle',
        email: 'Jamey_Muller@gmail.com',
        phone_number: '311-205.0565 032',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '166162e6-5cd5-4d87-b1a6-10a3c3bca16d',
        first_name: 'Melyna',
        last_name: 'Grant',
        email: 'Era.Kertzmann@gmail.com',
        phone_number: '888-947.9567 26795',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '62f0e602-9684-44e4-9f37-7cfce6233be3',
        first_name: 'Kyler',
        last_name: 'Kiehn',
        email: 'Abelardo.Baumbach@gmail.com',
        phone_number: '(328) 499-5187 614',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '85d70426-842f-4287-b2bb-12e32e1645d6',
        first_name: 'Antone',
        last_name: 'Purdy',
        email: 'Claudia_Hills38@hotmail.com',
        phone_number: '1-822-856-8819 120',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'cf4e7448-72b6-45c9-9259-95fcabe6620d',
        first_name: 'Carrie',
        last_name: 'Schneider',
        email: 'Gussie.Marks@gmail.com',
        phone_number: '972-310-4164 0911',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '93c7f5c2-e67c-4c50-a6f6-e713f928532d',
        first_name: 'Elian',
        last_name: 'Schoen',
        email: 'Kavon22@gmail.com',
        phone_number: '608-600.8826 2473',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '939096f7-adb0-4f95-9d62-1e3e8575bcab',
        first_name: 'Darby',
        last_name: 'Renner',
        email: 'Merritt_Mayer@yahoo.com',
        phone_number: '1-258-324-3176',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '7a0ca815-e357-4550-86fe-af9f507da07e',
        first_name: 'Eldred',
        last_name: 'Bernier',
        email: 'Fern.Nienow34@yahoo.com',
        phone_number: '(803) 207-4692 921',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '1f5c658c-6471-420f-8592-cb06340a1dcf',
        first_name: 'Marion',
        last_name: 'Cassin',
        email: 'Edgar_OConner@gmail.com',
        phone_number: '630-739-5962',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '27c87e52-62e8-4a01-8e64-99d1ef792d50',
        first_name: 'Leta',
        last_name: 'Heidenreich',
        email: 'Howell.Donnelly61@gmail.com',
        phone_number: '769-868-8951 28664',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'af311efd-b09c-4a82-babd-22ead1af7733',
        first_name: 'Shayna',
        last_name: 'Miller',
        email: 'Amelia.Bednar21@hotmail.com',
        phone_number: '410-815-4299',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'a0c0a0b1-e640-4503-aa94-e37aad8f40f4',
        first_name: 'Bernard',
        last_name: 'Ruecker',
        email: 'Alvena_Wintheiser97@hotmail.com',
        phone_number: '(395) 966-9059 37320',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '63d48960-592f-4c90-b928-e23b3b8723a7',
        first_name: 'Ernestina',
        last_name: 'DuBuque',
        email: 'Dasia_Leannon@gmail.com',
        phone_number: '901-356-4043 10099',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '54be972e-eb80-48d1-9700-b6bc5469f1a3',
        first_name: 'Keshawn',
        last_name: 'Harvey',
        email: 'Stewart_Wuckert48@yahoo.com',
        phone_number: '766-993.3555 731',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '3b27944e-4a43-446e-8f0a-f3bf58a52c0c',
        first_name: 'Mckenna',
        last_name: 'Hodkiewicz',
        email: 'Elisha_Brakus@gmail.com',
        phone_number: '748-469.6922 6548',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '62da0b7a-1d7c-4aeb-bbdd-c8cd31c00659',
        first_name: 'Cordia',
        last_name: 'Torphy',
        email: 'Delfina.Schultz@yahoo.com',
        phone_number: '1-845-578-7026 509',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '65561139-538d-45a5-94f1-7ef3279ad330',
        first_name: 'Roy',
        last_name: 'Powlowski',
        email: 'Jace69@hotmail.com',
        phone_number: '1-802-532-2144',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'dc802e47-fc9a-499d-be7a-5cacc653644c',
        first_name: 'Ettie',
        last_name: 'Bernier',
        email: 'Boris.Anderson45@gmail.com',
        phone_number: '774-422-1714 2557',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '0a0c3d32-ad2f-48a8-b798-534c80d7e0cc',
        first_name: 'Garrett',
        last_name: 'Murphy',
        email: 'Gracie63@hotmail.com',
        phone_number: '1-922-226-6982 724',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'd88c163c-9d5d-4c9d-abd4-f193d8c4ccb5',
        first_name: 'Maybelle',
        last_name: 'Ortiz',
        email: 'Harold21@gmail.com',
        phone_number: '425-377-4983 670',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: 'a36f5e86-e826-49b2-8053-6e89a961fa66',
        first_name: 'Ernestina',
        last_name: 'Thompson',
        email: 'Ahmed_Russel@gmail.com',
        phone_number: '(460) 591-0033 1709',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '621884ac-1e7a-41a7-b587-5b74c00c07c9',
        first_name: 'Daisy',
        last_name: 'Graham',
        email: 'Rosemarie_Keeling8@yahoo.com',
        phone_number: '701-355-6013 813',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
      {
        id: '628cd535-a0db-4031-a70b-d6756fb2f52d',
        first_name: 'Delmer',
        last_name: 'Bashirian',
        email: 'Jaeden.Kshlerin49@hotmail.com',
        phone_number: '1-591-770-7952 58676',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(CONTACT_TABLE);
  },
};