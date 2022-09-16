#sanctum

cd laravel
composer install
php artisan key:generate
// create your mysql database
// set .env database information
php artisan migrate
php artisan db:seed
// A testing user is created {user: test@gmail.com,  pass: test}

cd ..

cd react
npm install
